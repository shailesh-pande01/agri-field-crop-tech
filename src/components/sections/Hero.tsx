"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, ChevronRight, Sprout } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 4000); // Change product every 4 seconds

    return () => clearInterval(timer);
  }, []);

  const currentProduct = products[currentIndex];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-agri-cream pt-20">
      {/* Background abstract shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-agri-lime/30 to-agri-green/10 blur-3xl" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-agri-light/20 to-agri-dark/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 min-h-[350px] flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-agri-green/20 shadow-sm mb-6">
                <Sprout className="w-5 h-5 text-agri-green" />
                <span className="text-sm font-semibold text-agri-green">आधुनिक कृषी तंत्रज्ञान</span>
              </div>
            </motion.div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-agri-dark font-poppins">
                  {currentProduct.englishName}
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-agri-green to-agri-lime">
                  {currentProduct.marathiName}
                </h2>
                <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
                  {currentProduct.description}
                </p>
              </motion.div>
            </AnimatePresence>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link
                href={`/products/${currentProduct.id}`}
                className="inline-flex items-center gap-2 bg-agri-green hover:bg-agri-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                उत्पादन पहा <ChevronRight className="w-5 h-5" />
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-agri-dark border-2 border-agri-green/20 px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                संपर्क करा
              </a>
            </motion.div>
          </div>

          {/* Image/Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-agri-green/20 to-agri-lime/20 rounded-full blur-2xl animate-pulse" />
              
              <div className="relative z-10 w-full h-full flex items-center justify-center drop-shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-3/4 h-3/4"
                  >
                    <Image
                      src={currentProduct.image}
                      alt={currentProduct.englishName}
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Floating Leaves */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-10 right-10 text-agri-light opacity-60 z-20"
              >
                <Leaf className="w-12 h-12" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-20 left-0 text-agri-green opacity-60 z-20"
              >
                <Leaf className="w-16 h-16" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
