export interface LegalDocument {
  title: string;
  lastUpdated: string;
  sections: {
    heading: string;
    content: string | string[];
  }[];
}

export const legalData: Record<'privacy' | 'cookies' | 'terms', LegalDocument> = {
  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'October 2026',
    sections: [
      {
        heading: '1. Who We Are',
        content: 'Thalyta Pires Beauty ("we", "us", "our") is the data controller for the personal information processed through this website and our beauty service booking channels. For inquiries regarding data protection, please contact us at contact@thalytapiresbeauty.com.',
      },
      {
        heading: '2. Personal Data We Collect',
        content: [
          '• Contact Information: Full name, phone number, email address.',
          '• Appointment Details: Requested service, date, time, and service location (borough, area, or postal code in London and surroundings).',
          '• Communication & References: Enquiries, style preferences, inspiration photos, and messages exchanged via WhatsApp.',
          '• Special-Category Data: Allergies, skin sensitivities, or health conditions voluntarily provided by clients to ensure safe product application.',
          '• Booking & Transaction Records: Handled securely through our external booking platform (Fresha).',
        ],
      },
      {
        heading: '3. Purpose and Lawful Basis for Processing',
        content: [
          '• Contractual Necessity: To organize, schedule, confirm, and deliver mobile makeup, hairstyling, and self-makeup lessons.',
          '• Legitimate Interests: To respond to availability requests, improve our bespoke customer experience, and maintain business records.',
          '• Explicit Consent: For processing health and allergy information necessary to safeguard client safety during treatments, and for marketing communications where applicable.',
          '• Legal Obligations: To maintain standard financial, tax, and regulatory compliance under United Kingdom law.',
        ],
      },
      {
        heading: '4. Third-Party Sharing and Data Transfers',
        content: 'We never sell your personal information. Data may be shared with trusted third-party providers solely to deliver services: Fresha (appointment scheduling and client record management), WhatsApp / Meta Platforms (client communication and direct messaging), and embedded interactive services (Instagram and Google Maps, subject to your cookie consent).',
      },
      {
        heading: '5. Data Retention',
        content: 'Your personal data is retained only for as long as necessary to fulfill the purposes for which it was collected, to provide aftercare, or to meet statutory accounting and legal retention periods in the United Kingdom.',
      },
      {
        heading: '6. Your Rights under UK GDPR',
        content: [
          'Under the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018, you have the right to:',
          '• Request access to the personal data we hold about you.',
          '• Request correction of inaccurate or incomplete information.',
          '• Request erasure of your data where no overriding legal basis applies.',
          '• Restrict or object to certain types of processing.',
          '• Request the transfer of your data (data portability).',
          '• Withdraw your consent at any time without affecting past lawful processing.',
        ],
      },
      {
        heading: '7. Regulatory Complaints',
        content: 'If you have concerns about how your data is handled, you have the right to lodge a formal complaint with the Information Commissioner’s Office (ICO), the UK supervisory authority for data protection (www.ico.org.uk).',
      },
    ],
  },
  cookies: {
    title: 'Cookie Policy',
    lastUpdated: 'October 2026',
    sections: [
      {
        heading: '1. What Are Cookies?',
        content: 'Cookies are small text files placed on your device by websites that you visit. They are widely used to make websites function efficiently, remember preferences, and provide analytical information to site operators.',
      },
      {
        heading: '2. Cookie Categories We Use',
        content: [
          '• Strictly Necessary: Essential for site navigation, security, and storing your basic interface preferences (such as language selection and cookie consent state). These do not require prior consent under PECR.',
          '• Functional & Interactive Third-Party Embeds: Embedded content such as the official Instagram video Reel and Google Maps area overview may place third-party cookies for playback and mapping. These are blocked until you grant consent.',
        ],
      },
      {
        heading: '3. Managing Your Cookie Choices',
        content: 'You can accept or reject non-essential cookies via our on-screen banner or update your preferences at any time by clicking "Cookie Settings" in our footer. You may also adjust cookie settings directly within your web browser.',
      },
      {
        heading: '4. Third-Party Embeds Notice',
        content: 'When you choose to view third-party content (Instagram and Google Maps), those providers may collect your IP address and set cookies in accordance with their respective privacy and cookie policies.',
      },
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    lastUpdated: 'October 2026',
    sections: [
      {
        heading: '1. Services & Booking Confirmation',
        content: 'Thalyta Pires Beauty provides mobile makeup artistry, hairstyling, and self-makeup lessons across London and surrounding boroughs, as well as appointments at the private home studio. Formal bookings are processed and confirmed via the Fresha online booking platform.',
      },
      {
        heading: '2. Pricing and Payments',
        content: [
          '• Service fees are displayed in British Pounds (£ GBP).',
          '• Hairstyling prices start from £60 and vary based on complexity, hair length, and volume. The finalized fee is explicitly confirmed before your appointment.',
          '• Self-makeup VIP masterclasses are priced at £180 for 3 hours and 30 minutes of private tuition.',
          '• Travel fees outside core London coverage zones will be communicated and agreed upon before confirmation.',
        ],
      },
      {
        heading: '3. Rescheduling, Cancellation, and Punctuality',
        content: 'Clients are kindly requested to provide as much notice as possible for cancellations or rescheduling via Fresha or WhatsApp. For mobile appointments, please ensure timely access to your premises. If delays exceed 20 minutes, the appointment duration may need to be adjusted to honor subsequent scheduled clients.',
      },
      {
        heading: '4. Client Responsibilities & Health Disclosures',
        content: [
          '• Skin Preparation: Clients should have clean, moisturized skin and clean, dry hair (unless blow-dry service is requested).',
          '• Health & Allergies: Clients must disclose any allergies, sensitivities, eye infections, skin flare-ups, or cold sores prior to the session to prevent adverse reactions and ensure hygienic execution.',
          '• Workspace: Mobile visits require a safe, clean, well-lit area with an accessible power outlet for styling equipment.',
        ],
      },
      {
        heading: '5. Intellectual Property & Photography',
        content: 'Client before-and-after photographs or videos are only recorded and shared on social media with explicit client consent. All branding, images, website copy, and course materials are the intellectual property of Thalyta Pires Beauty.',
      },
      {
        heading: '6. Limitation of Liability and Governing Law',
        content: 'Thalyta Pires Beauty maintains professional public liability insurance. To the maximum extent permitted by law, liability for indirect or consequential losses is excluded. These terms are governed by and construed in accordance with the laws of England and Wales.',
      },
    ],
  },
};
