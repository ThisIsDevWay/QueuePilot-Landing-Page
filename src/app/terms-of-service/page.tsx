
"use client";
import { useTranslation } from '@/contexts/LocaleContext';
import { useEffect, useState } from 'react';

// This component now just returns the content, to be used in a dialog
export default function TermsOfServiceContent() {
  const { t } = useTranslation();
  const [displayDate, setDisplayDate] = useState('');

  useEffect(() => {
    // This ensures date is only generated on client to avoid hydration issues
    // and that it's using the locale from the context for formatting if possible.
    // For simplicity, we'll use the browser's default locale for date formatting here.
    setDisplayDate(new Date().toLocaleDateString(navigator.language || 'en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    }));
  }, []);

  return (
    <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none text-foreground/80">
      <p>Last updated: {displayDate || 'Loading date...'}</p>

      <h2 className="font-headline text-primary !text-lg sm:!text-xl !mb-2">1. Agreement to Terms</h2>
      <p>
        By using our Services, you agree to be bound by these Terms. If you do not agree to be bound by these Terms, do not use the Services.
      </p>

      <h2 className="font-headline text-primary !text-lg sm:!text-xl !mb-2">2. Changes to Terms or Services</h2>
      <p>
        We may update the Terms at any time, in our sole discretion. If we do so, we’ll let you know either by posting the updated Terms on the Site or through other communications. It’s important that you review the Terms whenever we update them or you use the Services.
      </p>

      <h2 className="font-headline text-primary !text-lg sm:!text-xl !mb-2">3. Who May Use the Services?</h2>
      <p>
        You may use the Services only if you are 18 years or older and capable of forming a binding contract with QueuePilot and are not barred from using the Services under applicable law.
      </p>

      <h2 className="font-headline text-primary !text-lg sm:!text-xl !mb-2">4. Content and Content Rights</h2>
      <p>
        For purposes of these Terms: (i) "Content" means text, graphics, images, music, software, audio, video, works of authorship of any kind, and information or other materials that are posted, generated, provided or otherwise made available through the Services; and (ii) "User Content" means any Content that Account holders (including you) provide to be made available through the Services. Content includes without limitation User Content.
      </p>

      <h2 className="font-headline text-primary !text-lg sm:!text-xl !mb-2">5. General Prohibitions and QueuePilot's Enforcement Rights</h2>
      <p>
        You agree not to do any of the following:
      </p>
      <ul className="list-disc pl-5">
        <li>Post, upload, publish, submit or transmit any User Content that: (i) infringes, misappropriates or violates a third party’s patent, copyright, trademark, trade secret, moral rights or other intellectual property rights, or rights of publicity or privacy; (ii) violates, or encourages any conduct that would violate, any applicable law or regulation or would give rise to civil liability; (iii) is fraudulent, false, misleading or deceptive; (iv) is defamatory, obscene, pornographic, vulgar or offensive; (v) promotes discrimination, bigotry, racism, hatred, harassment or harm against any individual or group; (vi) is violent or threatening or promotes violence or actions that are threatening to any person or entity; or (vii) promotes illegal or harmful activities or substances.</li>
        <li>Use, display, mirror or frame the Services or any individual element within the Services, QueuePilot’s name, any QueuePilot trademark, logo or other proprietary information, or the layout and design of any page or form contained on a page, without QueuePilot’s express written consent;</li>
        <li>Attempt to probe, scan or test the vulnerability of any QueuePilot system or network or breach any security or authentication measures;</li>
      </ul>

      <h2 className="font-headline text-primary !text-lg sm:!text-xl !mb-2">6. Termination</h2>
      <p>
        We may terminate your access to and use of the Services, at our sole discretion, at any time and without notice to you.
      </p>

      <h2 className="font-headline text-primary !text-lg sm:!text-xl !mb-2">7. Disclaimers</h2>
      <p>
        THE SERVICES ARE PROVIDED “AS IS,” WITHOUT WARRANTY OF ANY KIND. WITHOUT LIMITING THE FOREGOING, WE EXPLICITLY DISCLAIM ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUIET ENJOYMENT AND NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE.
      </p>

      <h2 className="font-headline text-primary !text-lg sm:!text-xl !mb-2">8. Limitation of Liability</h2>
      <p>
        NEITHER QUEUEPILOT NOR ANY OTHER PARTY INVOLVED IN CREATING, PRODUCING, OR DELIVERING THE SERVICES WILL BE LIABLE FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY OR CONSEQUENTIAL DAMAGES, OR DAMAGES FOR LOST PROFITS, LOST REVENUES, LOST SAVINGS, LOST BUSINESS OPPORTUNITY, LOSS OF DATA OR GOODWILL, SERVICE INTERRUPTION, COMPUTER DAMAGE OR SYSTEM FAILURE OR THE COST OF SUBSTITUTE SERVICES OF ANY KIND ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR FROM THE USE OF OR INABILITY TO USE THE SERVICES.
      </p>
      
      <h2 className="font-headline text-primary !text-lg sm:!text-xl !mb-2">9. Contact Information</h2>
      <p>
        If you have any questions about these Terms or the Services, please contact QueuePilot at {t('footer.email')}.
      </p>
    </div>
  );
}
