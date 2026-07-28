"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "रामदास पाटील",
      location: "नाशिक",
      crop: "द्राक्ष",
      text: "मी गेल्या वर्षीपासून Agri Field Crop Tech चे Calciplex-11 वापरत आहे. माझ्या द्राक्षांच्या बागेत फळगळ कमी झाली असून फळांची गुणवत्ता खूपच चांगली झाली आहे. खरोखरच उत्तम उत्पादन!",
    },
    {
      name: "विठ्ठलराव देशमुख",
      location: "सोलापूर",
      crop: "डाळिंब",
      text: "Phyto Zinc मुळे माझ्या डाळिंबाच्या बागेतील पिवळेपणा पूर्णपणे नाहीसा झाला. फुलांची आणि फळांची संख्या वाढली आहे. आता दरवर्षी मी हेच वापरणार.",
    },
    {
      name: "सुनील पवार",
      location: "अहमदनगर",
      crop: "टोमॅटो",
      text: "Nutri Plus च्या वापरामुळे माझ्या टोमॅटो पिकाची वाढ खूप छान झाली आणि फळांचा आकारही वाढला. इतर खतांपेक्षा याचे रिझल्ट्स खूप फास्ट आहेत.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-sm font-bold text-agri-green tracking-wider uppercase">शेतकऱ्यांचे मनोगत</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-agri-dark">
              शेतकऱ्यांचा विश्वास, आमची ओळख
            </h3>
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute top-0 left-0 text-agri-cream -z-10 transform -translate-x-1/2 -translate-y-1/2">
            <Quote className="w-32 h-32 rotate-180" />
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 min-h-[300px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full text-center"
              >
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </p>
                <div>
                  <h4 className="font-bold text-agri-dark text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-agri-green font-medium text-sm">
                    {testimonials[currentIndex].location} • पीक: {testimonials[currentIndex].crop}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-agri-cream text-agri-dark flex items-center justify-center hover:bg-agri-green hover:text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-agri-cream text-agri-dark flex items-center justify-center hover:bg-agri-green hover:text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
