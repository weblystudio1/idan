import React, { useState } from "react";
import { 
  ArrowDown, ThumbsUp, Phone 
} from "lucide-react";

// Import custom sub-modules
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import ContactSection from "./components/ContactPage";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

// Define generated hero asset path directly
const heroImage = "/src/assets/images/living_kitchen_hero_1779396105108.png";

export default function App() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between overflow-x-hidden text-right leading-normal bg-gray-50 text-gray-900" style={{ direction: "rtl" }}>
      
      {/* 1. Transparent Floating Header Navigation */}
      <Header onContactClick={() => scrollToSection("contact")} />

      {/* 2. Stunning Visual HERO SECTION */}
      <section 
        id="hero" 
        className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 bg-gray-950 text-white overflow-hidden"
      >
        
        {/* Background Image with Fallback and Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop";
            }}
            alt="שיפוצי יוקרה מודרניים עידן"
            className="w-full h-full object-cover opacity-60 scale-102 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/40 to-black/30 z-10" />
        </div>

        {/* Hero Content container */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center mt-8 sm:mt-12">
          
          <div className="space-y-8 max-w-4xl mx-auto">
            
            {/* Huge display slogan */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-secular tracking-tight text-white leading-tight drop-shadow-lg">
              עידן שיפוצים <br />
              <span className="text-white pb-2 block">סטנדרט של יוקרה</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brown-300 via-brown-400 to-brown-500 pb-2 block drop-shadow-none">בכל פינה בבית</span>
            </h1>

          </div>

          {/* Scroll down indicator link */}
          <div className="flex justify-center mt-24 select-none">
            <button
              onClick={() => scrollToSection("about")}
              className="p-3 bg-white/10 hover:bg-white/25 rounded-full border border-white/10 animate-bounce cursor-pointer text-white"
              aria-label="גלול למטה אל נעים להכיר"
            >
              <ArrowDown className="h-5 w-5 text-brown-400" />
            </button>
          </div>

        </div>

      </section>

      {/* 3. SECTION – נעים להכיר */}
      <About />

      {/* 4. SECTION – השירותים והפתרונות שלנו */}
      <Services />

      {/* 5. SECTION – צור קשר */}
      <ContactSection />

      {/* 6. SECTION – פוטר האתר */}
      <Footer />

      {/* כפתור וואטסאפ צף בצד שמאל למטה */}
      <WhatsAppButton />
    </div>
  );
}
