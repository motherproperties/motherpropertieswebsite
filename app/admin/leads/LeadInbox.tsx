'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Lead, LeadStatus } from '@/lib/types';

const statuses: LeadStatus[] = [
  'new', 'contacted', 'qualified', 'site_visit_proposed',
  'site_visit_confirmed', 'visited', 'nurture', 'converted', 'lost', 'invalid',
];

interface InboxResponse {
  leads: Lead[];
  summary: {
    total: number;
    byStatus: Record<LeadStatus, number>;
    siteVisits: number;
    failedNotifications: number;
  };
}

export function LeadInbox() {
  const [token, setToken] = useState('');
  const [data, setData] = useState<InboxResponse | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setToken(sessionStorage.getItem('mother-properties-lead-token') || '');
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const load = useCallback(async (providedToken = token) => {
    if (!providedToken) return;
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/admin/leads/', {
        headers: { Authorization: `Bearer ${providedToken}` },
        cache: 'no-store',
      });
      if (!response.ok) throw new Error('Access failed. Check the token and production configuration.');
      const result = await response.json() as InboxResponse;
      sessionStorage.setItem('mother-properties-lead-token', providedToken);
      setData(result);
    } catch (caught) {
      setData(null);
      setError(caught instanceof Error ? caught.message : 'Unable to load leads.');
    } finally {
      setLoading(false);
    }
  }, [token]);

  const updateStatus = async (lead: Lead, status: LeadStatus) => {
    const response = await fetch('/api/admin/leads/', {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: lead.id, status }),
    });
    if (!response.ok) {
      setError('The lead status could not be updated.');
      return;
    }
    await load();
  };

  const exportCsv = async () => {
    const response = await fetch('/api/admin/leads/export/', {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) {
      setError('The export could not be created.');
      return;
    }
    const url = URL.createObjectURL(await response.blob());
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `mother-properties-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const activeLeads = useMemo(
    () => data?.leads.filter((lead) => !['converted', 'lost', 'invalid'].includes(lead.status)) || [],
    [data]
  );

  if (!data) {
    return (
      <div className="mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <label htmlFor="lead-token" className="block font-semibold text-gray-900">Lead inbox token</label>
        <input
          id="lead-token"
          type="password"
          autoComplete="current-password"
          value={token}
          onChange={(event) => setToken(event.target.value)}
          className="mt-3 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-forest-600 focus:outline-none focus:ring-2 focus:ring-forest-200"
        />
        <button
          type="button"
          onClick={() => load(token)}
          disabled={!token || loading}
          className="mt-4 w-full rounded-xl bg-forest-700 px-4 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? 'Opening…' : 'Open inbox'}
        </button>
        {error && <p role="alert" className="mt-4 text-sm text-red-700">{error}</p>}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ['Total leads', data.summary.total],
          ['New', data.summary.byStatus.new],
          ['Site-visit requests', data.summary.siteVisits],
          ['Notification failures', data.summary.failedNotifications],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">{label}</p>
            <p className="mt-1 text-3xl font-semibold text-gray-900">{value}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-gray-600">{activeLeads.length} active leads requiring follow-up</p>
        <button type="button" onClick={exportCsv} className="rounded-xl border border-forest-700 px-4 py-2 font-semibold text-forest-800 hover:bg-forest-50">
          Export CSV
        </button>
      </div>
      {error && <p role="alert" className="mt-4 text-sm text-red-700">{error}</p>}
      <div className="mt-5 overflow-x-auto rounded-2xl border border-gray-200 bg-white">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50 text-left text-gray-600">
            <tr>
              <th className="px-4 py-3">Lead</th>
              <th className="px-4 py-3">Intent / source</th>
              <th className="px-4 py-3">Next step</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.leads.map((lead) => (
              <tr key={lead.id}>
                <td className="px-4 py-4 align-top">
                  <p className="font-semibold text-gray-900">{lead.name}</p>
                  <a className="block text-forest-700 hover:underline" href={`tel:${lead.phone}`}>{lead.phone}</a>
                  <a className="block text-forest-700 hover:underline" href={`mailto:${lead.email}`}>{lead.email}</a>
                  <p className="mt-1 text-xs text-gray-500">{new Date(lead.timestamp).toLocaleString()}</p>
                </td>
                <td className="px-4 py-4 align-top text-gray-700">
                  <p>{lead.intent.replaceAll('_', ' ')}</p>
                  <p className="text-xs text-gray-500">{lead.formType} · {lead.source}</p>
                  {lead.siteVisitDate && <p className="mt-1">Visit: {lead.siteVisitDate}</p>}
                </td>
                <td className="max-w-xs px-4 py-4 align-top text-gray-700">{lead.nextAction || '—'}</td>
                <td className="px-4 py-4 align-top">
                  <label className="sr-only" htmlFor={`status-${lead.id}`}>Status for {lead.name}</label>
                  <select
                    id={`status-${lead.id}`}
                    value={lead.status}
                    onChange={(event) => updateStatus(lead, event.target.value as LeadStatus)}
                    className="rounded-lg border border-gray-300 bg-white px-3 py-2"
                  >
                    {statuses.map((status) => (
                      <option key={status} value={status}>{status.replaceAll('_', ' ')}</option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
