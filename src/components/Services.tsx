import React from "react";
import { Home, Bath, Layers, Paintbrush } from "lucide-react";

export default function Services() {
  const servicesList = [
    {
      title: "שיפוץ משרדים ועסקים",
      description: "שינוי יסודי ומקיף של חלל המגורים מאלף ועד תיו: הריסה, בנייה, מערכות אינסטלציה וחשמל, ריצוף וגמר ברמת איכות ודיוק ללא פשרות.",
      icon: Home,
    },
    {
      title: "שיפוץ וחידוש חדרי רחצה מושלמים",
      description: "חידוש חדר הרחצה מאפס לרמת ספא מעוצב. כולל איטום יסודי רב-שכבתי למניעת נזילות, החלפת צנרת, פריסת אריחים וכלים סניטריים בדיוק מוחלט.",
      icon: Bath,
    },
    {
      title: "עבודות גבס ועיצובים",
      description: "תכנון וביצוע של מעטפת גבס דקורטיבית: תקרות צפות, הנמכות גבס למיזוג אוויר עם תאורה נסתרת, ונישות מעוצבות למערכות מדיה.",
      icon: Layers,
    },
    {
      title: "צבע ותיקונים אמנותיים",
      description: "עבודות גימור וצבע איכותיות: החלקת קירות קפדנית בשפכטל אמריקאי, תיקוני טיח מורכבים, טיפול יסודי בקירות ויישום צבעים דקורטיביים.",
      icon: Paintbrush,
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 border-t border-b border-gray-200/80 scroll-mt-20 text-right select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-brown-600 bg-brown-500/10 mb-3 border border-brown-500/15">
            השירותים והפתרונות שלנו
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-950">
            מה אנחנו יודעים לעשות הכי טוב
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-650 font-light max-w-2xl mx-auto">
            מגוון רחב של פתרונות שיפוצים וגימור מתקדמים תחת קורת גג אחת, בפיקוח הדוק ובאיכות ללא פשרות.
          </p>
        </div>

        {/* Stable 2-column Grid placement as requested */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div 
                key={index} 
                id={`service-card-${index}`}
                className="bg-white border border-gray-200/85 hover:border-brown-400 hover:shadow-md rounded-2xl p-6 transition-all duration-300 flex flex-col justify-start"
              >
                {/* Content Container */}
                <div className="flex flex-col h-full">
                  {/* Icon Header */}
                  <div className="bg-brown-600/10 text-brown-600 p-2.5 rounded-xl shrink-0 h-fit w-fit mb-4 flex items-center justify-center">
                    <IconComponent className="h-5.5 w-5.5" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-950 mb-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-650 text-xs sm:text-sm leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
