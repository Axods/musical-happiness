import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-deep-blue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-gold font-semibold text-lg mb-4">About IntelGain</h3>
            <p className="text-steel-gray">
              Empowering professionals with intelligent search capabilities and comprehensive data insights.
            </p>
          </div>
          
          <div>
            <h3 className="text-gold font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-steel-gray hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-steel-gray hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-steel-gray hover:text-gold transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gold font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-steel-gray hover:text-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-steel-gray hover:text-gold transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-steel-gray/20 text-center text-steel-gray">
          <p>&copy; {new Date().getFullYear()} IntelGain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}