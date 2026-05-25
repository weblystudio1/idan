import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white relative scroll-mt-20 select-none text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-brown-600 bg-brown-500/10 mb-3 border border-brown-500/15">
            צור קשר
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-950">
            נשמח לשמוע מכם ולייעץ לכם
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-650 font-light max-w-2xl mx-auto">
            הקליקו, שילחו הודעה או התקשרו בכל שלב. נציגינו יעניקו לכם מענה מקצועי, ישר ואישי.
          </p>
        </div>

        {/* Centered Beautiful Contact Block */}
        <div className="max-w-3xl mx-auto bg-gray-50 border border-gray-150 p-8 sm:p-12 rounded-3xl hover:shadow-md transition-all duration-300">
          <div className="text-center sm:text-right">
            <h3 className="text-2xl font-black text-gray-950 mb-4 text-center">
              פרטי התקשרות מהירה
            </h3>
            <p className="text-gray-650 text-sm sm:text-base leading-relaxed font-light mb-10 text-center max-w-xl mx-auto">
              צוות המומחים של עידן שיפוצים עומד לשירותכם לכל שאלה, תמחור ראשוני או פגישת ייעוץ אישית אצלכם בנכס וללא כל התחייבות.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Phone item */}
              <div className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-2xl hover:border-brown-400 transition-colors duration-200">
                <div className="bg-brown-600/10 p-3 rounded-xl text-brown-600 shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-gray-400 tracking-wider">טלפון ישיר</h4>
                  <a 
                    href="tel:0524456789" 
                    className="text-lg sm:text-xl font-bold text-brown-600 hover:text-brown-700 transition-colors block mt-1"
                  >
                    052-4456789
                  </a>
                </div>
              </div>

              {/* Email item */}
              <div className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-2xl hover:border-brown-400 transition-colors duration-200">
                <div className="bg-brown-600/10 p-3 rounded-xl text-brown-600 shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-extrabold text-gray-400 tracking-wider">אימייל לפניות</h4>
                  <a 
                    href="mailto:idan.reno.p@gmail.com" 
                    className="text-sm sm:text-base font-bold text-gray-800 hover:text-brown-600 transition-colors block mt-1 break-all"
                  >
                    idan.reno.p@gmail.com
                  </a>
                </div>
              </div>

              {/* Location item */}
              <div className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-2xl hover:border-brown-400 transition-colors duration-200">
                <div className="bg-brown-600/10 p-3 rounded-xl text-brown-600 shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-gray-400 tracking-wider">אזורי שירות</h4>
                  <span className="text-sm sm:text-base font-bold text-gray-800 block mt-1">
                    חיפה, הקריות, צפון והסביבה
                  </span>
                </div>
              </div>

              {/* Hours item */}
              <div className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-2xl hover:border-brown-400 transition-colors duration-200">
                <div className="bg-brown-600/10 p-3 rounded-xl text-brown-600 shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-gray-400 tracking-wider">שעות פעילות</h4>
                  <span className="text-sm sm:text-base font-bold text-gray-800 block mt-1">
                    ימים א' - ה': 08:00 - 18:00
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200/60 mt-10 pt-6 text-center">
            <span className="text-xs sm:text-sm font-semibold text-gray-500">
              זמינות מרבית גם בוואטסאפ לכל שאלה והתייעצות מהירה
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
