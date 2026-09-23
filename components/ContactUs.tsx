"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";

export default function ContactUsView() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simple form submission that opens user's email client
      const subject = `Contact Form Submission - ${formData.name}`;
      const body = `Name: ${formData.name}AEmail: ${formData.email}Message: ${formData.message}Sent from Lumina Green 360 website`;
      
      // Open email client
      window.location.href = `mailto:luminagreen360@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Simulate success after a short delay
      setTimeout(() => {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
      }, 1000);
      
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus("error");
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Information */}
          <motion.div
            className="p-8 bg-muted rounded-lg h-full"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4 text-muted-foreground">
              <h1 className="text-sm lg:text-xl font-bold text-foreground mb-6">Get In Touch</h1>
              <p className="text-[0.8rem]">Have questions about our services or want a custom quote? We're here to help.</p>
              
              <div className="flex items-start space-x-3">
                <span className="text-lg bg-[#DCFCEA] rounded">
                  <Image src="/Outline.png" alt="Email" width={20} height={20} className="p-1"/>
                </span>
                <div>
                  <p className="text-[0.7rem]">luminagreen360@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-lg bg-[#DCFCEA] rounded">
                  <Image src="/Calling 1.png" alt="Phone" width={20} height={20} className="p-1"/>
                </span>
                <div>
                  <p className="text-[0.7rem]">+2347079100046</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-lg bg-[#DCFCEA] rounded">
                  <Image src="/whatsapp.png" alt="WhatsApp" width={20} height={20} className="p-1"/>
                </span>
                <div>
                  <p className="text-[0.7rem]">
                    <Link href="http://wa.me/2347079100046" className="text-blue-600 hover:underline">
                      http://wa.me/2347079100046
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-sm border"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Halima Yusuf Bawah"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-[#F3F4F6]"
                  required
                  disabled={isSubmitting}
               
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-[#F3F4F6]"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Write short description..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full min-h-[120px] bg-[#F3F4F6]"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="p-3 bg-green-100 text-green-700 rounded-md text-sm">
                  ✅ Thank you! Your email client has opened. Please send the message to luminagreen360@gmail.com
                </div>
              )}
              
              {submitStatus === "error" && (
                <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm">
                  ❌ Something went wrong. Please email us directly at luminagreen360@gmail.com
                </div>
              )}

              <motion.div
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                <Button 
                  type="submit" 
                  className="w-full rounded-full bg-gradient-to-r to-[#0B5A33] from-[#0D8E4B] py-6 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Opening Email..."
                  ) : (
                    "Contact Us Now"
                  )}
                </Button>
              </motion.div>

              <p className="text-xs text-muted-foreground text-center">
                Clicking the button will open your email client with a pre-filled message to luminagreen360@gmail.com
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
