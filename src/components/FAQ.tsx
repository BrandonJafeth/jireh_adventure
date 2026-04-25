import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLang } from '../i18n/useLang';
import { translations, t } from '../i18n/translations';

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.10 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [lang] = useLang();
  const f = translations.faq;

  const faqs = f.items.map(item => ({
    question: t(item.q, lang),
    answer: t(item.a, lang),
  }));

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#F7F3EE]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
        >
          <motion.h2
            className="font-heading font-[800] text-4xl md:text-5xl lg:text-6xl text-[#0B3D5E] uppercase leading-[0.95] tracking-[0.02em]"
            variants={staggerItem}
          >
            {t(f.heading, lang)}
          </motion.h2>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={staggerItem}
                className="liquid-glass rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-5 py-4 md:px-6 md:py-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-white/40 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-[800] text-[#0B3D5E] text-lg lg:text-xl tracking-wide">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
                    className="shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-[#0B3D5E]/50" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <div className="px-5 md:px-6 pb-5 md:pb-6">
                        <div className="h-px bg-[#0B3D5E]/10 mb-4"></div>
                        <p className="font-body font-light text-sm text-[#0B3D5E]/70 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
