"use client"

import { useEffect, useState } from "react";
import { FAQSection } from "@/components/FAQ"
import { Footer } from "@/components/Footer"
import { GettingStarted } from "@/components/GettingStarted"
import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { ServicesSection } from "@/components/ServicesSection"
import { ShopSection } from "@/components/ShopSection"
import { Testimonials } from "@/components/Testimonials"
import AboutUsView from "@/components/AboutUs";
import ContactUsView from "@/components/ContactUs";
import PrivacyPolicyView from "@/components/Privacy";

export default function Home() {
  const [currentView, setCurrentView] = useState<{
    type: 'section' | 'page';
    name: string;
  } | null>(null);

  useEffect(() => {
    const requestedView = new URLSearchParams(window.location.search).get("view");

    if (["about", "contact", "privacy"].includes(requestedView ?? "")) {
      setCurrentView({ type: "page", name: requestedView as string });
      return;
    }

    if (window.location.hash) {
      const section = window.location.hash.slice(1);
      requestAnimationFrame(() => {
        document.getElementById(section)?.scrollIntoView();
      });
    }
  }, []);

  const handleSectionSelect = (section: string) => {
    setCurrentView({ type: 'section', name: section });
    
    // Scroll to section after a small delay to allow state update
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handlePageSelect = (page: string) => {
    setCurrentView({ type: 'page', name: page });
  };

  const renderView = () => {
    if (currentView?.type === 'page') {
      switch(currentView.name) {
        case "about":
          return <AboutUsView />;
        case "contact":
          return <ContactUsView />;
        case "privacy":
          return <PrivacyPolicyView />;
     
        default:
          return renderMainContent();
      }
    }
    
    return renderMainContent();
  };

  const renderMainContent = () => (
    <>
      <div id="home">
        <HeroSection />
      </div>
      <GettingStarted />
      <div id="services">
        <ServicesSection />
      </div>
      <ShopSection />
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="faqs">
        <FAQSection />
      </div>
    </>
  );

  return (
    <div className="min-h-screen overflow-x-clip">
      <Header 
        onSectionSelect={handleSectionSelect}
        onPageSelect={handlePageSelect}
      />
      <main className="mx-auto w-[92%] max-w-[1360px]">
        {renderView()}
      </main>
      <Footer 
        onSectionSelect={handleSectionSelect}
        onPageSelect={handlePageSelect}
      />
    </div>
  )
}
