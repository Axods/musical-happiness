import Link from 'next/link';

export const faqContent = [
  {
    question: "What Is IntelGain?",
    answer: (
      <div className="space-y-4">
        <p>
          IntelGain is a comprehensive public records search platform designed for professionals who need reliable access to accurate information about U.S. residents. Our platform combines advanced search capabilities with extensive data sources to provide detailed insights for:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Background checks and verification</li>
          <li>Investigative research</li>
          <li>Professional due diligence</li>
          <li>Public records access</li>
        </ul>
      </div>
    )
  },
  {
    question: "Who uses IntelGain?",
    answer: (
      <div className="space-y-4">
        <p>IntelGain serves a diverse range of professionals, including:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Journalists:</strong> For investigative reporting and fact-checking
          </li>
          <li>
            <strong>Researchers:</strong> Conducting academic or professional research
          </li>
          <li>
            <strong>Legal Professionals:</strong> For case research and due diligence
          </li>
          <li>
            <strong>Investigators:</strong> Supporting various types of investigations
          </li>
          <li>
            <strong>Business Professionals:</strong> For background checks and verification
          </li>
        </ul>
      </div>
    )
  },
  {
    question: "I heard you give out free access to journalists, is it true?",
    answer: (
      <div className="space-y-4">
        <p>
          Yes! We provide complimentary access to verified journalists and media professionals. This is part of our commitment to supporting investigative journalism and press freedom.
        </p>
        <p>
          To apply for journalist access:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Visit our <Link href="/journalist-access" className="text-teal hover:underline">Journalist Access</Link> page</li>
          <li>Provide your professional credentials</li>
          <li>Include your media organization details</li>
          <li>Submit any relevant work samples</li>
        </ul>
        <p>
          Our team reviews all applications within 24-48 hours.
        </p>
      </div>
    )
  },
  {
    question: "Is there an API for IntelGain?",
    answer: (
      <div className="space-y-4">
        <p>
          Yes, we offer a comprehensive API for programmatic access to our data. Our API allows you to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Integrate people search capabilities into your applications</li>
          <li>Automate background checks</li>
          <li>Access real-time data updates</li>
          <li>Perform bulk searches</li>
        </ul>
        <p>
          For detailed API documentation and pricing, visit our{" "}
          <Link href="/documentation" className="text-teal hover:underline">
            API Documentation
          </Link>{" "}
          page.
        </p>
      </div>
    )
  }
];