"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function PrivacyPolicyView() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openSection, setOpenSection] = useState("privacy");

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? "" : section);
  };

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          ref={ref}
          className="text-start"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Privacy Policy Accordion */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="w-full p-6 text-left  transition-colors duration-200"
              onClick={() => toggleSection("privacy")}
            >
              <h2 className="text-[0.7rem] sm:text-[0.8rem] flex justify-between items-center">
                Privacy Policy
                <span className="text-xl">{openSection === "privacy" ? "−" : "+"}</span>
              </h2>
            </button>
            
            {openSection === "privacy" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[#DCFCEA]"
              >
                <div className="p-6 space-y-4 text-[0.7rem] sm:text-[0.8rem]">
                  <div>
                    <h3 className="font-semibold mb-2">Information We Collect</h3>
                    <p>Name, contact details, location, and payment information necessary to deliver services.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Use of Information</h3>
                    <p>Client information is used solely for service delivery, invoicing, communication, and customer support.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Data Protection</h3>
                    <p>All client data is securely stored and will not be shared with third parties without explicit consent, except where required by law.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Digital Platform</h3>
                    <p>For clients using our website (www.luminagreen360.com), we may collect cookies and analytics to improve user experience.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Confidentiality</h3>
                    <p>Client details remain strictly confidential and will never be sold, rented, or misused.</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Terms & Conditions Accordion */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="w-full p-6 text-left transition-colors duration-200"
              onClick={() => toggleSection("terms")}
            >
              <h2 className="text-[0.7rem] sm:text-[0.8rem] flex justify-between items-center">
                Terms & Conditions
                <span className="text-xl">{openSection === "terms" ? "−" : "+"}</span>
              </h2>
            </button>
            
            {openSection === "terms" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[#DCFCEA]"
              >
                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="text-[0.7rem] sm:text-[0.8rem]mb-4"> Service Scope</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Waste collection and cleanup services are provided based on agreed schedules, locations, and fees.
                      Any extra services outside the agreed scope will attract additional charges.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[0.7rem] sm:text-[0.8rem] mb-4">Pricing & Payments</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Prices are clearly communicated before service delivery.
                      Payment is due before or immediately upon service completion unless otherwise agreed. Subscription clients receive discounted rates as per agreement.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[0.7rem] sm:text-[0.8rem] mb-4"> Client Responsibilities</h3>
                    <p className="text-[0.7rem] sm:text-[0.8rem] leading-relaxed">
                      Ensure access to the premises at the scheduled service time. Provide accurate details on waste type, quantity, or special conditions. Hazardous or restricted waste materials must be disclosed in advance and may attract extra charges or refusal.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[0.7rem] sm:text-[0.8rem] mb-4"> Company Responsibilities</h3>
                    <p className="text-[0.7rem] sm:text-[0.8rem] leading-relaxed">
                      Provide professional, timely, and safe services. Maintain confidentiality of client information. Ensure ethical and environmentally responsible waste handling.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[0.7rem] sm:text-[0.8rem] mb-4"> Liability</h3>
                    <p className="text-[0.7rem] sm:text-[0.8rem] leading-relaxed">
                      Lumina Green 360 is not liable for indirect or consequential damages beyond the agreed service scope. Any claims must be submitted within 48 hours of service delivery.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[0.7rem] sm:text-[0.8rem] mb-4"> Termination</h3>
                    <p className="text-[0.7rem] sm:text-[0.8rem] leading-relaxed">
                      Either party may terminate service agreements with written notice of 7 days for subscriptions or recurring contracts.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Refund Policy Accordion */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="w-full p-6 transition-colors duration-200"
              onClick={() => toggleSection("refund")}
            >
              <h2 className="text-[0.7rem] sm:text-[0.8rem] flex justify-between items-center">
                Refund Policy
                <span className="text-xl">{openSection === "refund" ? "−" : "+"}</span>
              </h2>
            </button>
            
            {openSection === "refund" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[#DCFCEA]"
              >
                <div className="p-6 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-[0.7rem] sm:text-[0.8rem]mb-4">Service Cancellation</h3>
                    <p className="text-[0.7rem] sm:text-[0.8rem] leading-relaxed">
                      Clients may cancel a scheduled service at least 24 hours in advance to qualify for a full refund or rescheduling at no extra cost.
                      Cancellations made less than 24 hours before service will incur a 30% charge to cover administrative and operational costs.
                    </p>
                  </div>

                  <div className="">
                    <h3 className="text-[0.7rem] sm:text-[0.8rem]">Unsatisfactory Service</h3>
                    <p className="text-[0.7rem] sm:text-[0.8rem] leading-relaxed">
                      If clients are not satisfied with our service, they must notify us within 24 hours. We will either:
                    </p>
                    <ol className="text-[0.7rem] sm:text-[0.8rem] list-decimal list-inside mt-4 space-y-3 text-muted-foreground">
                      <li className="leading-relaxed">
                        Return to complete the service at no additional cost
                      </li>
                      <li className="leading-relaxed">
                        Issue a partial refund where applicable.
                      </li>
                    </ol>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

        
        </motion.div>
      </div>
    </div>
  );
}