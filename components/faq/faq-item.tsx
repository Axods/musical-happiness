"use client";

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  index: number;
}

export function FAQItem({ question, answer, index }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <AccordionItem value={`item-${index}`}>
        <AccordionTrigger className="text-lg font-semibold text-deep-blue hover:text-teal">
          {question}
        </AccordionTrigger>
        <AccordionContent className="text-steel-gray">
          {answer}
        </AccordionContent>
      </AccordionItem>
    </motion.div>
  );
}