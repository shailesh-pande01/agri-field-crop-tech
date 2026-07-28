"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-sm font-bold text-agri-green tracking-wider uppercase">संपर्क</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-agri-dark">
              आमच्याशी संपर्क साधा
            </h3>
            <p className="text-lg text-gray-600">
              तुमच्या शंका किंवा उत्पादनांच्या माहितीसाठी आम्हाला कधीही संपर्क करू शकता.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-agri-cream rounded-3xl p-8 space-y-6">
              <h4 className="text-2xl font-bold text-agri-dark mb-6">संपर्क माहिती</h4>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm text-agri-green">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 mb-1">कारखाना व कार्यालय</h5>
                  <p className="text-gray-600">Agri Field Crop Tech<br/>संभाजीनगर, महाराष्ट्र</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm text-agri-green">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 mb-1">फोन नंबर</h5>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <p className="text-sm text-gray-500 mt-1">(सकाळी १० ते संध्याकाळी ६)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm text-agri-green">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 mb-1">ईमेल</h5>
                  <p className="text-gray-600">agrifieldcroptech@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-lg h-[300px] relative border-4 border-white">
              {/* Google Map Embedded iframe for Sambhajinagar */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120055.61737402633!2d75.22896594247858!3d19.87616527584177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba2292f767815%3A0x6b976451e04baab9!2sChhatrapati%20Sambhajinagar%20(Aurangabad)%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709664532789!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Agri Field Crop Tech Location"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100 h-full">
              <h4 className="text-2xl font-bold text-agri-dark mb-8">आम्हाला संदेश पाठवा</h4>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">संपूर्ण नाव</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-agri-green focus:border-transparent transition-all"
                    placeholder="तुमचे नाव"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">मोबाईल नंबर</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-agri-green focus:border-transparent transition-all"
                    placeholder="तुमचा मोबाईल नंबर"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">गाव / शहर</label>
                  <input
                    type="text"
                    id="city"
                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-agri-green focus:border-transparent transition-all"
                    placeholder="तुमचे गाव किंवा शहर"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">संदेश</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-agri-green focus:border-transparent transition-all resize-none"
                    placeholder="तुमचा प्रश्न किंवा संदेश..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-agri-green hover:bg-agri-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  संदेश पाठवा <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
