"use client";

import { motion } from "framer-motion";

export default function Benefits() {
  const benefits = [
    { title: "मजबूत मुळे", desc: "मुळांची लांबी व जाडी वाढून जमिनीत खोलवर जातात.", color: "bg-amber-50 text-amber-800 border-amber-200" },
    { title: "निरोगी झाडे", desc: "रोगप्रतिकारक शक्ती वाढते, झाडे निरोगी व टवटवीत राहतात.", color: "bg-green-50 text-green-800 border-green-200" },
    { title: "चांगली फुलधारणा", desc: "फुलांची संख्या वाढते आणि फुलगळ थांबते.", color: "bg-pink-50 text-pink-800 border-pink-200" },
    { title: "उत्तम फळधारणा", desc: "फळांचा आकार, रंग आणि चव सुधारते.", color: "bg-orange-50 text-orange-800 border-orange-200" },
    { title: "अधिक उत्पादन", desc: "एकरी उत्पादनात लक्षणीय वाढ होते आणि फायदा वाढतो.", color: "bg-blue-50 text-blue-800 border-blue-200" },
    { title: "दर्जेदार पीक", desc: "बाजारात पिकाला चांगला भाव मिळवून देणारा दर्जा.", color: "bg-purple-50 text-purple-800 border-purple-200" },
  ];

  return (
    <section className="py-24 bg-agri-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-sm font-bold text-agri-green tracking-wider uppercase">फायदे</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-agri-dark">
              आमच्या उत्पादनांचे फायदे
            </h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {benefits.map((b, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-3xl border text-center flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow h-full ${b.color}`}
            >
              <h4 className="font-bold text-lg mb-2">{b.title}</h4>
              <p className="text-sm opacity-90 leading-snug">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
