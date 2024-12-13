"use client";

import { motion } from 'framer-motion';

export default function Privacy() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <motion.h1 
            className="text-3xl font-bold text-deep-blue mb-8"
            {...fadeIn}
          >
            Privacy Policy
          </motion.h1>

          <div className="space-y-6 text-steel-gray">
            <motion.section {...fadeIn} transition={{ delay: 0.1 }}>
              <h2 className="text-xl font-semibold text-deep-blue mb-3">1. Information We Collect</h2>
              <p>We collect information that you provide directly to us, including but not limited to your name, email address, and professional credentials when you register for an account or apply for journalist access.</p>
            </motion.section>

            <motion.section {...fadeIn} transition={{ delay: 0.2 }}>
              <h2 className="text-xl font-semibold text-deep-blue mb-3">2. How We Use Your Information</h2>
              <p>We use the information we collect to provide and improve our services, communicate with you, and ensure compliance with applicable laws and regulations.</p>
            </motion.section>

            <motion.section {...fadeIn} transition={{ delay: 0.3 }}>
              <h2 className="text-xl font-semibold text-deep-blue mb-3">3. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            </motion.section>

            <motion.section {...fadeIn} transition={{ delay: 0.4 }}>
              <h2 className="text-xl font-semibold text-deep-blue mb-3">4. Data Sharing</h2>
              <p>We do not sell your personal information to third parties. We may share your information with service providers who assist us in operating our platform and providing our services.</p>
            </motion.section>

            <motion.section {...fadeIn} transition={{ delay: 0.5 }}>
              <h2 className="text-xl font-semibold text-deep-blue mb-3">5. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information. You may also request a copy of your personal data or object to its processing.</p>
            </motion.section>

            <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
              <h2 className="text-xl font-semibold text-deep-blue mb-3">6. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy or our practices, please contact us at privacy@intelgain.com.</p>
            </motion.section>
          </div>
        </div>
      </motion.div>
    </div>
  );
}