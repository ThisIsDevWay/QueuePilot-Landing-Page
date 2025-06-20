
"use client";
import { useTranslation } from '@/contexts/LocaleContext';
import { useEffect, useState } from 'react';

// This component now just returns the content, to be used in a dialog
export default function PrivacyPolicyContent() {
  const { t } = useTranslation();
  const [displayDate, setDisplayDate] = useState('');

  useEffect(() => {
    // This ensures date is only generated on client to avoid hydration issues
    // and that it's using the locale from the context for formatting if possible
    // For simplicity, we'll use the browser's default locale for date formatting here.
    setDisplayDate(new Date().toLocaleDateString(navigator.language || 'en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    }));
  }, []);

  return (
    <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none text-foreground/80">
      <p>Last updated: {displayDate || 'Loading date...'}</p>

      <h2 className="font-headline text-primary !text-lg sm:!text-xl !mb-2">1. Introduction</h2>
      <p>
        Welcome to QueuePilot. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at {t('footer.email')}.
      </p>
      <p>
        When you visit our website and more generally, use any of our services (the "Services", which include the Website), we appreciate that you are trusting us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately.
      </p>

      <h2 className="font-headline text-primary !text-lg sm:!text-xl !mb-2">2. Information We Collect</h2>
      <p>
        We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services or otherwise when you contact us.
      </p>
      <p>
        The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make and the products and features you use. The personal information we collect may include the following: names; phone numbers; email addresses; mailing addresses; job titles; contact preferences; billing addresses; and other similar information.
      </p>

      <h2 className="font-headline text-primary !text-lg sm:!text-xl !mb-2">3. How We Use Your Information</h2>
      <p>
        We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
      </p>
      <ul className="list-disc pl-5">
        <li>To facilitate account creation and logon process.</li>
        <li>To post testimonials.</li>
        <li>Request feedback.</li>
        <li>To enable user-to-user communications.</li>
        <li>To manage user accounts.</li>
        <li>To send administrative information to you.</li>
        <li>To protect our Services.</li>
        <li>To enforce our terms, conditions and policies for business purposes, to comply with legal and regulatory requirements or in connection with our contract.</li>
        <li>To respond to legal requests and prevent harm.</li>
      </ul>

      <h2 className="font-headline text-primary !text-lg sm:!text-xl !mb-2">4. Will Your Information Be Shared With Anyone?</h2>
      <p>
        We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
      </p>

      <h2 className="font-headline text-primary !text-lg sm:!text-xl !mb-2">5. How Long Do We Keep Your Information?</h2>
      <p>
        We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).
      </p>

      <h2 className="font-headline text-primary !text-lg sm:!text-xl !mb-2">6. How Do We Keep Your Information Safe?</h2>
      <p>
        We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
      </p>

      <h2 className="font-headline text-primary !text-lg sm:!text-xl !mb-2">7. What Are Your Privacy Rights?</h2>
      <p>
        In some regions (like the European Economic Area and the United Kingdom), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information.
      </p>

      <h2 className="font-headline text-primary !text-lg sm:!text-xl !mb-2">8. Updates to This Notice</h2>
      <p>
        We may update this privacy notice from time to time. The updated version will be indicated by an updated "Last updated" date and the updated version will be effective as soon as it is accessible.
      </p>

      <h2 className="font-headline text-primary !text-lg sm:!text-xl !mb-2">9. How Can You Contact Us About This Notice?</h2>
      <p>
        If you have questions or comments about this notice, you may email us at {t('footer.email')} or by post to:
      </p>
      <p>
        QueuePilot<br/>
        {t('footer.address')}
      </p>
    </div>
  );
}
