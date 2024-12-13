"use client";

import { motion } from 'framer-motion';

export default function Terms() {
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
            Terms of Service
          </motion.h1>

          <div className="space-y-6 text-steel-gray">
            <motion.section {...fadeIn} transition={{ delay: 0.1 }}>
              <h2 className="text-xl font-semibold text-deep-blue mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using IntelGain's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
            </motion.section>

            <motion.section {...fadeIn} transition={{ delay: 0.2 }}>
              <h2 className="text-xl font-semibold text-deep-blue mb-3">2. Use License</h2>
              <p>Permission is granted to temporarily access the materials (information or software) on IntelGain's website for personal, non-commercial transitory viewing only.</p>
            </motion.section>

            <motion.section {...fadeIn} transition={{ delay: 0.3 }}>
              <h2 className="text-xl font-semibold text-deep-blue mb-3">3. Data Usage</h2>
              <p>Users must comply with all applicable data protection laws and regulations when using our services. Any misuse of data accessed through our platform may result in immediate termination of service.</p>
            </motion.section>

            <motion.section {...fadeIn} transition={{ delay: 0.4 }}>
              <h2 className="text-xl font-semibold text-deep-blue mb-3">4. Account Terms</h2>
              <p>You are responsible for maintaining the security of your account and password. IntelGain cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.</p>
            </motion.section>

            <motion.section {...fadeIn} transition={{ delay: 0.5 }}>
              <h2 className="text-xl font-semibold text-deep-blue mb-3">5. Limitations</h2>
              <p>IntelGain shall not be held liable for any damages arising out of the use or inability to use the materials on our website.</p>
            </motion.section>

            <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
              <h2 className="text-xl font-semibold text-deep-blue mb-3">6. Governing Law</h2>
              <p>These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
            </motion.section>
          </div>
        </div>
      </motion.div>
    </div>
  );
}