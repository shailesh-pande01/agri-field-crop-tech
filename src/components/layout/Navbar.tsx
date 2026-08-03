"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

import { companyInfo } from "@/data/company";

const navLinks = [
  { name: "मुख्यपृष्ठ", href: "#home" },
  { name: "आमच्याविषयी", href: "#about" },
  { name: "उत्पादने", href: "#products" },
  { name: "आम्हालाच का निवडावे?", href: "#why-us" },
  { name: "संपर्क", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-white/80 backdrop-blur-md py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image 
              src="/logo/company-logo.png" 
              alt={`${companyInfo.name} Logo`} 
              width={40} 
              height={40} 
              className="object-contain" 
            />
            <span className="font-poppins font-bold text-xl md:text-2xl text-agri-dark">
              {companyInfo.name}
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-agri-green font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#contact"
              className="bg-agri-green hover:bg-agri-dark text-white px-6 py-2 rounded-full font-medium transition-colors shadow-lg hover:shadow-xl"
            >
              संपर्क करा
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-agri-green focus:outline-none"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-agri-green hover:bg-agri-cream rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-agri-green text-white px-6 py-3 rounded-full font-medium shadow-md"
              >
                संपर्क करा
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
