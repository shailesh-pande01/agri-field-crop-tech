"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Factory, ShieldCheck, Sprout } from "lucide-react";
import Image from "next/image";

export default function About() {
  const features = [
    { icon: <ShieldCheck className="w-6 h-6 text-agri-green" />, title: "उत्कृष्ट गुणवत्ता" },
    { icon: <Sprout className="w-6 h-6 text-agri-green" />, title: "शास्त्रीय पद्धतीने विकसित उत्पादने" },
    { icon: <CheckCircle2 className="w-6 h-6 text-agri-green" />, title: "शेतकरी-केंद्रित दृष्टिकोन" },
    { icon: <Factory className="w-6 h-6 text-agri-green" />, title: "छत्रपती संभाजीनगर येथे निर्मिती" },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
              <Image
                src="/about-image.png"
                alt="Modern Farming in Maharashtra"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-agri-dark/80 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-bold text-2xl">Agri Field Crop Tech</p>
                  <p className="opacity-90">संभाजीनगर, महाराष्ट्र</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-agri-cream rounded-full -z-10" />
            <div className="absolute -top-10 -left-10 w-32 h-32 border-4 border-agri-green/20 rounded-full -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-sm font-bold text-agri-green tracking-wider uppercase">आमच्याविषयी</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-agri-dark leading-tight">
              शेतकऱ्यांची प्रगती, आमचे ध्येय!
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              <span className="font-semibold text-agri-green">Agri Field Crop Tech</span> हे उच्च दर्जाची कृषी उत्पादने बनवणारी एक विश्वासार्ह कंपनी आहे. आमची उत्पादने पिकांची वाढ, पिकांचा दर्जा, उत्पादन आणि एकंदर शेतीची उत्पादकता वाढवण्यासाठी शास्त्रशुद्ध पद्धतीने तयार केली जातात.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              शेतकऱ्यांना दर्जेदार आणि परिणामकारक उत्पादने देणे हा आमचा मुख्य उद्देश आहे. आमच्या अत्याधुनिक कारखान्यातून थेट तुमच्या शेतापर्यंत उत्तम दर्जाची खते पोहोचवण्यासाठी आम्ही वचनबद्ध आहोत.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-agri-cream flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <span className="font-medium text-gray-800">{feature.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
