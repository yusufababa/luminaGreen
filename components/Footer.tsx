"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  onSectionSelect?: (section: string) => void;
  onPageSelect?: (page: string) => void;
}

export function Footer({ onSectionSelect, onPageSelect }: FooterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Social media links
  const socialLinks = [
    {
      src: "/ig.png",
      alt: "Instagram",
      url: "https://www.instagram.com/lumina_green_360?igsh=MW1yZjBrb3Z3eXhvNA=="
    },
    {
      src: "/x.png",
      alt: "Twitter",
      url: "#"
    },
    {
      src: "/whatsapp.png",
      alt: "WhatsApp",
      url: "http://wa.me/2347079100046"
    },
    {
      src: "/facebook.png", 
      alt: "Facebook",
      url: "https://www.facebook.com/share/1EKTAAPYA6/"
    }
  ];

  const handleSectionClick = (section: string) => {
    if (onSectionSelect) {
      onSectionSelect(section);
    } else {
      window.location.assign(section === "home" ? "/" : `/#${section}`);
    }
  }

  const handlePageClick = (page: string) => {
    if (onPageSelect) {
      onPageSelect(page);
    } else {
      window.location.assign(`/?view=${page}`);
    }
  }

  return (
    <footer ref={ref} className="w-full border-t border-[#173c2a]/10 bg-white py-12 text-foreground sm:py-14">
      <div className="mx-auto w-[92%] max-w-[1360px]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Company Info */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-2">
              <Image 
                src="/logo.png" 
                alt="Lumina Green 360 Logo" 
                width={90} 
                height={70} 
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Cleaner spaces, responsible waste handling, and practical products for Maiduguri.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Home", type: "section", id: "home" },
                { name: "About Us", type: "page", id: "about" },
                { name: "Services", type: "section", id: "services" },
                { name: "Products", type: "link", id: "/products" },
                { name: "Testimonials", type: "section", id: "testimonials" },
                { name: "FAQs", type: "section", id: "faqs" },
                { name: "Contact Us", type: "page", id: "contact" }
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                >
                  {link.type === "link" ? (
                    <Link
                      href={link.id}
                      className="block w-full text-left text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => link.type === 'section' ? handleSectionClick(link.id) : handlePageClick(link.id)}
                      className="text-muted-foreground hover:text-foreground transition-colors text-left w-full"
                    >
                      {link.name}
                    </button>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-2 text-sm">
              {["Waste pickup", "Deep cleaning", "Office cleaning", "Fumigation"].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                >
                  <button
                    type="button"
                    onClick={() => handleSectionClick("services")}
                    className="text-left text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {service}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Privacy Policy", type: "page", id: "privacy" },
                { name: "Terms & Conditions", type: "page", id: "privacy" },
                { name: "Refund Policy", type: "page", id: "privacy" }
              ].map((legal, index) => (
                <motion.li
                  key={legal.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                >
                  <button
                    onClick={() => handlePageClick(legal.id)}
                    className="text-muted-foreground hover:text-foreground transition-colors text-left w-full"
                  >
                    {legal.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Media Icons and Copyright Section */}
        <motion.div 
          className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border pt-7 sm:flex-row sm:items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* Copyright Text */}
          <motion.p 
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Copyright © 2026 Lumina Green 360. All rights reserved.
          </motion.p>
          
          {/* Social Media Icons */}
          <motion.div 
            className="flex space-x-4 mb-4 mt-4 md:mb-0"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.alt}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              >
                <Image 
                  src={social.src} 
                  width={20} 
                  height={20} 
                  alt={social.alt} 
                  className="w-5 h-5" 
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
