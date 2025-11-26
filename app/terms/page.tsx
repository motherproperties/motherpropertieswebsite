/**
 * Terms & Conditions page
 */

import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Terms & Conditions – Mother Properties',
  description: 'Terms and conditions for Mother Properties website.',
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms & Conditions" subtitle="Please read these terms carefully" />

      <Section background="white">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-lg font-semibold text-gray-900 mb-4">
            Last Updated: November 24, 2025
          </p>

          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing and using the Website at motherproperties.net (the "Website"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>

          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily access the materials (information or software) on Mother Properties' Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul>
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to decompile or reverse engineer any software contained on the Website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            <li>Engage in any data mining, data harvesting, or automated access of the Website</li>
          </ul>

          <h2>3. Disclaimer</h2>
          <p>
            The materials on Mother Properties' Website are provided on an 'as is' basis. Mother Properties makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2>4. Limitations of Liability</h2>
          <p>
            In no event shall Mother Properties or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Mother Properties' Website.
          </p>

          <h2>5. Project Information & Disclaimers</h2>
          <p>
            All project information, including but not limited to layouts, amenities, specifications, timelines, pricing, and expectations, are conceptual and subject to change. Mother Properties does not guarantee:
          </p>
          <ul>
            <li>Specific project timelines or completion dates</li>
            <li>Specific returns on investment</li>
            <li>Availability of specific plot sizes or locations</li>
            <li>Amenities as described in marketing materials</li>
          </ul>
          <p>
            Actual implementation may vary based on regulatory approvals, environmental factors, market conditions, site conditions, and other external factors beyond Mother Properties' control.
          </p>

          <h2>6. Investment Risk Disclosure</h2>
          <p>
            Investment in real estate and managed farmland involves risk. Past performance does not guarantee future results. Potential investors should:
          </p>
          <ul>
            <li>Conduct thorough due diligence</li>
            <li>Seek independent legal and financial advice</li>
            <li>Carefully review all documentation</li>
            <li>Understand local regulations and laws</li>
            <li>Assess their own financial situation and risk tolerance</li>
          </ul>

          <h2>7. Intellectual Property Rights</h2>
          <p>
            All materials on the Website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and data compilations, are the property of Mother Properties or its content suppliers and are protected by international copyright laws.
          </p>

          <h2>8. Links to Third-Party Websites</h2>
          <p>
            Mother Properties has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Mother Properties of the site. Use of any such linked website is at the user's own risk.
          </p>

          <h2>9. Modifications to Terms</h2>
          <p>
            Mother Properties may revise these terms of service for its Website at any time without notice. By using this Website, you are agreeing to be bound by the then current version of these terms of service.
          </p>

          <h2>10. User Responsibilities</h2>
          <p>
            Users of this Website agree to:
          </p>
          <ul>
            <li>Provide accurate information when submitting inquiries</li>
            <li>Not engage in illegal or unethical behavior</li>
            <li>Not transmit viruses, malware, or harmful code</li>
            <li>Respect intellectual property rights</li>
            <li>Not spam or harass other users</li>
          </ul>

          <h2>11. Governing Law and Jurisdiction</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts located in Bangalore, Karnataka, India.
          </p>

          <h2>12. Severability</h2>
          <p>
            If any provision of these terms and conditions is found to be invalid or unenforceable, such provision shall be severed, and the remaining provisions shall remain in full force and effect.
          </p>

          <h2>13. Contact Information</h2>
          <p>
            If you have any questions about these Terms & Conditions, please contact us:
          </p>
          <ul>
            <li><strong>Email:</strong> motherpropertiesblr@gmail.com</li>
            <li><strong>Phone:</strong> +91 98450 42789 | +91 90350 51133</li>
            <li><strong>Address:</strong> #1831, 1st Floor, 41st Cross, 22nd Main, Jayanagar 9th Block, Bangalore 560 069</li>
          </ul>

          <h2>14. Entire Agreement</h2>
          <p>
            These terms and conditions, including all incorporated policies, constitute the entire agreement between Mother Properties and you regarding the use of the Website and supersede all prior agreements.
          </p>

          <p className="text-sm text-gray-500 mt-8">
            Last Updated: November 24, 2025
          </p>
        </div>
      </Section>
    </>
  );
}
