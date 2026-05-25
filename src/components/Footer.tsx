import React from "react";
import { Hammer, Phone, Mail, MapPin, Clock, ArrowUp, Send, Smartphone } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-gray-950 text-gray-400 pt-16 pb-8 border-t border-white/5 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main top Grid */}
        <div className="flex flex-col items-center justify-center pb-12 border-b border-gray-900 text-center">
          
          {/* Brand details */}
          <div className="space-y-4 max-w-lg mb-8">
            <div className="flex flex-col items-center justify-center gap-3 cursor-pointer" onClick={scrollToTop}>
              <div>
                <span className="text-2xl font-black text-white block">
                  עידן <span className="text-brown-400">שיפוצים</span>
                </span>
                <span className="text-[12px] tracking-[0.2em] font-light text-gray-400 block -mt-1 uppercase">
                  אחזקות ועבודות גמר
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              החברה המובילה בחיפה והצפון לעבודות שיפוצים כלליים, הנמכות גבס, חידוש חדרי רחצה מושלמים, צבע ואיטום ברמה הגבוהה ביותר בשילוב פיקוח מקצועי צמוד ואחריות מקיפה.
            </p>
            <div className="pt-2 text-sm text-brown-400 font-medium">
              טלפון ישיר: <a href="tel:0524456789" className="hover:underline text-white ml-3">052-4456789</a> | אזורי שירות: חיפה, קריות והסביבה
            </div>
          </div>
        </div>

        {/* Bottom copyright declaration Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light">
          <div>
            &copy; {new Date().getFullYear()} עידן שיפוצים ואחזקות. כל הזכויות שמורות. נבנה עבור שיווק והמרת לקוחות מתקדם.
          </div>
          
          <button
            onClick={scrollToTop}
            className="bg-gray-900 hover:bg-brown-600 text-white p-3 rounded-full border border-gray-800 hover:border-brown-600 transition-all shadow cursor-pointer flex items-center gap-1"
            aria-label="חזרה לראש המסך"
          >
            <span>חזרה ללמעלה</span>
            <ArrowUp className="h-4 w-4 animate-bounce" />
          </button>
        </div>

      </div>
    </footer>
  );
}
