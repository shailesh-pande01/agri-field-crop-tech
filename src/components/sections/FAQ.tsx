"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "ही उत्पादने कोणत्या पिकांसाठी उपयुक्त आहेत?",
      a: "आमची उत्पादने सर्व प्रकारच्या भाजीपाला (मिरची, टोमॅटो), फळबागा (द्राक्ष, डाळिंब) आणि नगदी पिकांसाठी (कापूस) अत्यंत उपयुक्त आहेत."
    },
    {
      q: "फवारणी किती दिवसांच्या अंतराने करावी?",
      a: "उत्तम परिणामांसाठी पिकाच्या वाढीच्या अवस्थेनुसार साधारणपणे दर १५ दिवसांच्या अंतराने फवारणी करावी."
    },
    {
      q: "डोस किती घ्यावा?",
      a: "फवारणीसाठी २ ते ३ मिली प्रति लिटर पाणी आणि ठिबक सिंचनासाठी २५० ते ५०० मिली प्रति एकर हा डोस शिफारस केलेला आहे. पिकाच्या गरजेनुसार यामध्ये बदल होऊ शकतो."
    },
    {
      q: "ही उत्पादने पाण्यात पूर्णपणे विरघळतात का?",
      a: "होय, आमची सर्व उत्पादने १००% पाण्यात विरघळणारी (Water Soluble) आहेत, ज्यामुळे ती पिकांना लवकर आणि पूर्णपणे उपलब्ध होतात."
    },
    {
      q: "ही खते इतर कीटकनाशकांसोबत मिसळून वापरता येतात का?",
      a: "होय, बहुतांश कीटकनाशके आणि बुरशीनाशकांसोबत ही खते वापरता येतात. तरीही मोठ्या प्रमाणावर वापरण्यापूर्वी एका लहान बादलीत मिश्रण करून तपासणी करावी."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-agri-cream relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-sm font-bold text-agri-green tracking-wider uppercase">नेहमी विचारले जाणारे प्रश्न</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-agri-dark">
              तुमच्या प्रश्नांची उत्तरे
            </h3>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-semibold text-agri-dark text-lg pr-4">{faq.q}</span>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-agri-cream flex items-center justify-center text-agri-green">
                  {openIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 mt-2">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
