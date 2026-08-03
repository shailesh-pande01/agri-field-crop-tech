"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { products } from "@/data/products";

export default function Products() {

  return (
    <section id="products" className="py-24 bg-agri-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-sm font-bold text-agri-green tracking-wider uppercase">आमची उत्पादने</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-agri-dark">
              पिकांच्या संपूर्ण पोषणासाठी
            </h3>
            <p className="text-lg text-gray-600">
              आम्ही शेतीच्या विविध गरजांनुसार उच्च दर्जाची उत्पादने विकसित केली आहेत. 
              आमच्या उत्पादनांमुळे पिकांचा सर्वांगीण विकास होतो आणि उत्पादनात लक्षणीय वाढ होते.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-agri-green/20 flex flex-col h-full"
            >
              {/* Product Image Area */}
              <div className="relative aspect-square w-full bg-agri-cream rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-agri-green/5 to-transparent transition-opacity group-hover:opacity-100 opacity-0" />
                <div className="relative w-3/4 h-3/4 transform group-hover:scale-110 transition-transform duration-500">
                  <Image
                    src={product.image}
                    alt={product.englishName}
                    fill
                    className="object-contain drop-shadow-xl"
                  />
                </div>
              </div>

              {/* Text Info */}
              <div className="flex-grow flex flex-col">
                <h4 className="text-2xl font-black text-agri-dark font-poppins">{product.englishName}</h4>
                <p className="text-agri-green font-semibold text-sm mb-3 mt-1 min-h-[40px]">{product.marathiName}</p>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">{product.description}</p>
                
                <Link
                  href={`/products/${product.id}`}
                  className="w-full mt-auto flex items-center justify-center gap-2 bg-agri-cream hover:bg-agri-green text-agri-green hover:text-white border border-agri-green/20 py-3 rounded-xl font-semibold transition-colors"
                >
                  अधिक माहिती <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
