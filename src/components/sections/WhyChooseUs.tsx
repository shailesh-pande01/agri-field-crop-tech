"use client";

import { motion } from "framer-motion";
import { Award, Beaker, TrendingUp, HeartHandshake, Shield, Activity } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Award className="w-8 h-8 text-agri-green" />,
      title: "उच्च दर्जाची उत्पादने",
      desc: "आम्ही केवळ सर्वोत्तम कच्चा माल वापरून उत्कृष्ट दर्जाची उत्पादने बनवतो.",
    },
    {
      icon: <Beaker className="w-8 h-8 text-agri-green" />,
      title: "आधुनिक संशोधनावर आधारित",
      desc: "आमची सर्व उत्पादने अद्ययावत कृषी संशोधनावर आधारित आहेत.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-agri-green" />,
      title: "अधिक उत्पादन",
      desc: "आमच्या उत्पादनांच्या योग्य वापरामुळे पिकांच्या उत्पादनात निश्चित वाढ होते.",
    },
    {
      icon: <Activity className="w-8 h-8 text-agri-green" />,
      title: "उत्तम पोषण",
      desc: "पिकांना आवश्यक असणारे सर्व घटक संतुलित प्रमाणात मिळतात.",
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-agri-green" />,
      title: "शेतकऱ्यांचा विश्वास",
      desc: "हजारो शेतकरी आमच्या उत्पादनांवर विश्वास ठेवतात आणि उत्तम रिझल्ट्स मिळवतात.",
    },
    {
      icon: <Shield className="w-8 h-8 text-agri-green" />,
      title: "दर्जेदार उत्पादन प्रक्रिया",
      desc: "आमच्या कारखान्यात प्रत्येक टप्प्यावर गुणवत्तेची काटेकोर तपासणी केली जाते.",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-agri-cream/30 clip-path-slant z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-sm font-bold text-agri-green tracking-wider uppercase">वैशिष्ट्ये</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-agri-dark">
              आम्हालाच का निवडावे?
            </h3>
            <p className="text-lg text-gray-600">
              आम्ही केवळ उत्पादने विकत नाही, तर शेतकऱ्यांच्या प्रगतीसाठी एक भक्कम साथ देतो. 
              आमची वैशिष्ट्ये आम्हाला इतरांपेक्षा वेगळे बनवतात.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:border-agri-green/30 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-agri-cream rounded-2xl flex items-center justify-center mb-6">
                {reason.icon}
              </div>
              <h4 className="text-xl font-bold text-agri-dark mb-3">{reason.title}</h4>
              <p className="text-gray-600 leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
