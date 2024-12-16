import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-deep-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-gold font-semibold text-lg mb-4">About IntelGain</h3>
            <p className="text-gray-300 max-w-md">
              IntelGain provides comprehensive public records search capabilities for professionals,
              journalists, and researchers. Access accurate and up-to-date information about U.S. residents
              through our secure platform.
            </p>
          </div>
          
          <div>
            <h3 className="text-gold font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-gold transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/journalist-access" className="text-gray-300 hover:text-gold transition-colors">
                  Journalist Access
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gold font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-gold transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="text-gray-300 hover:text-gold transition-colors">
                  API Documentation
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} IntelGain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}