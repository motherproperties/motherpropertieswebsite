/**
 * Privacy Policy page
 */

import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Privacy Policy – Mother Properties',
  description: 'Privacy policy for Mother Properties website.',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" subtitle="How we protect your information" />

      <Section background="white">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-lg font-semibold text-gray-900 mb-4">
            Last Updated: November 24, 2025
          </p>

          <h2>Introduction</h2>
          <p>
            Mother Properties ("Company," "we," "our," "us," or "Mother Properties") operates the motherproperties.net website (the "Website"). We are committed to protecting your privacy and ensuring you have a positive experience on our Website.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our Website, including any other media form, media channel, mobile website, or mobile application related or connected to it (collectively, the "Site").
          </p>

          <h2>1. Information We Collect</h2>
          <p>We collect information in various ways, including:</p>
          
          <h3>1.1 Information You Provide</h3>
          <ul>
            <li><strong>Contact Information:</strong> Name, email address, phone number, postal address</li>
            <li><strong>Inquiry Details:</strong> Information about your interest in our properties</li>
            <li><strong>Communication:</strong> Content of emails, messages, or inquiries you send us</li>
            <li><strong>Financial Information:</strong> Payment information if you make a purchase</li>
          </ul>

          <h3>1.2 Automatically Collected Information</h3>
          <ul>
            <li><strong>Device Information:</strong> Browser type, IP address, operating system</li>
            <li><strong>Usage Information:</strong> Pages visited, time spent, links clicked</li>
            <li><strong>Cookies:</strong> We use cookies to enhance your experience</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and provide customer service</li>
            <li>Process contact form submissions</li>
            <li>Send you information about our properties and projects</li>
            <li>Send promotional emails about new projects (with your consent)</li>
            <li>Improve our Website and services</li>
            <li>Comply with legal obligations and regulations</li>
            <li>Prevent fraud and ensure security</li>
            <li>Analyze Website usage and trends</li>
          </ul>

          <h2>3. Data Security</h2>
          <p>
            Mother Properties is committed to protecting your data. We implement industry-standard security measures including:
          </p>
          <ul>
            <li>SSL/TLS encryption for data transmission</li>
            <li>Secure password protection</li>
            <li>Limited access to personal information</li>
            <li>Regular security assessments</li>
          </ul>
          <p>
            However, no method of transmission over the Internet is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee absolute security.
          </p>

          <h2>4. Sharing of Information</h2>
          <p>
            We do <strong>not</strong> sell, trade, or rent your personal information to third parties. We may share information in limited circumstances:
          </p>
          <ul>
            <li>With service providers who assist in our operations (subject to confidentiality agreements)</li>
            <li>When required by law or legal process</li>
            <li>To protect our rights and the safety of our users</li>
          </ul>

          <h2>5. Your Rights</h2>
          <p>You have the following rights regarding your information:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of personal information we hold</li>
            <li><strong>Correction:</strong> Request correction of inaccurate information</li>
            <li><strong>Deletion:</strong> Request deletion of your information (subject to legal requirements)</li>
            <li><strong>Opt-Out:</strong> Opt out of marketing communications</li>
            <li><strong>Data Portability:</strong> Request your data in a portable format</li>
          </ul>

          <h2>6. Cookies and Tracking</h2>
          <p>
            Our Website uses cookies to enhance functionality and user experience. You can control cookie settings in your browser preferences. Disabling cookies may affect Website functionality.
          </p>

          <h2>7. Third-Party Links</h2>
          <p>
            Our Website may contain links to third-party websites. We are not responsible for their privacy practices. We encourage you to review their privacy policies.
          </p>

          <h2>8. Children's Privacy</h2>
          <p>
            Our Website is not intended for children under 13 years of age. We do not knowingly collect information from children under 13. If we discover we have collected such information, we will delete it promptly.
          </p>

          <h2>9. Changes to Privacy Policy</h2>
          <p>
            We may update this Privacy Policy periodically. We will notify you of significant changes by posting the updated policy on this page with an updated "Last Updated" date.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, your personal information, or to exercise your rights, please contact us:
          </p>
          <ul>
            <li><strong>Email:</strong> motherpropertiesblr@gmail.com</li>
            <li><strong>Phone:</strong> +91 98450 42789 | +91 90350 51133</li>
            <li><strong>Address:</strong> #1831, 1st Floor, 41st Cross, 22nd Main, Jayanagar 9th Block, Bangalore 560 069</li>
          </ul>

          <p className="text-sm text-gray-500 mt-8">
            Last Updated: November 24, 2025
          </p>
        </div>
      </Section>
    </>
  );
}
