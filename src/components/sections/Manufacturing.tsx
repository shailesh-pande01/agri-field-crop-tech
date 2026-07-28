"use client";

import { motion } from "framer-motion";
import { Microscope, FlaskConical, ClipboardCheck, PackageCheck, Truck } from "lucide-react";

export default function Manufacturing() {
  const steps = [
    { icon: <Microscope className="w-8 h-8" />, title: "संशोधन", desc: "अद्ययावत प्रयोगशाळेत संशोधन" },
    { icon: <FlaskConical className="w-8 h-8" />, title: "उत्पादन", desc: "आधुनिक तंत्रज्ञानाने निर्मिती" },
    { icon: <ClipboardCheck className="w-8 h-8" />, title: "गुणवत्ता तपासणी", desc: "काटेकोर गुणवत्ता नियंत्रण" },
    { icon: <PackageCheck className="w-8 h-8" />, title: "पॅकेजिंग", desc: "सुरक्षित व आकर्षक पॅकिंग" },
    { icon: <Truck className="w-8 h-8" />, title: "शेतकऱ्यांपर्यंत वितरण", desc: "जलद आणि सुरक्षित वितरण" },
  ];

  return (
    <section className="py-24 bg-agri-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-sm font-bold text-agri-lime tracking-wider uppercase">प्रक्रिया</h2>
            <h3 className="text-3xl md:text-5xl font-bold">
              दर्जेदार उत्पादन प्रक्रिया
            </h3>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-white/20 -translate-y-1/2 rounded-full" />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="flex flex-col items-center text-center relative group"
              >
                <div className="w-20 h-20 bg-agri-green rounded-full flex items-center justify-center shadow-[0_0_0_8px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_0_12px_rgba(255,255,255,0.2)] transition-all duration-300 mb-6 relative z-10">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold mb-2 text-agri-lime">{step.title}</h4>
                <p className="text-gray-300 text-sm max-w-[150px] mx-auto">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
