"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Droplets, Package, Leaf } from "lucide-react";
import Image from "next/image";
import type { Product } from "@/data/products";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          <div className="fixed inset-0 flex items-center justify-center z-[70] p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl pointer-events-auto"
            >
              <div className="sticky top-0 right-0 z-10 flex justify-end p-4">
                <button
                  onClick={onClose}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-10 pt-0">
                {/* Image Section */}
                <div className="relative aspect-[3/4] bg-agri-cream rounded-2xl p-8 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-agri-green/10 to-transparent rounded-2xl" />
                  <div className="relative w-full h-full max-w-sm mx-auto">
                    <Image
                      src={product.image}
                      alt={product.englishName}
                      fill
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-4xl font-black text-agri-dark font-poppins">{product.englishName}</h2>
                    <h3 className="text-xl text-agri-green font-semibold mt-2">{product.marathiName}</h3>
                    <p className="text-gray-500 font-poppins text-sm mt-1">{product.subtitle}</p>
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>

                  <div className="bg-agri-cream/50 rounded-xl p-6 border border-agri-green/10">
                    <h4 className="text-xl font-bold text-agri-dark flex items-center gap-2 mb-4">
                      <Check className="w-6 h-6 text-agri-green" /> प्रमुख फायदे
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <div className="w-2 h-2 rounded-full bg-agri-green mt-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-agri-dark flex items-center gap-2 mb-2">
                        <Leaf className="w-5 h-5 text-agri-green" /> कोणत्या पिकांसाठी?
                      </h4>
                      <p className="text-gray-700">{product.recommendedCrops.join(", ")}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-agri-dark flex items-center gap-2 mb-2">
                        <Package className="w-5 h-5 text-agri-green" /> पॅकिंग साइज
                      </h4>
                      <p className="text-gray-700">{product.packaging}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-agri-dark flex items-center gap-2 mb-4 text-xl">
                      <Droplets className="w-6 h-6 text-agri-green" /> वापरण्याची पद्धत आणि डोस
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                        <p className="font-semibold text-blue-900 mb-1">फवारणीसाठी:</p>
                        <p className="text-blue-800">{product.applicationMethod.spray}</p>
                      </div>
                      <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                        <p className="font-semibold text-amber-900 mb-1">ठिबक / ड्रेंचिंगसाठी:</p>
                        <p className="text-amber-800">{product.applicationMethod.drip}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 text-center">
                    <p className="font-bold text-agri-green text-lg">{product.slogan}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
