import React from "react";
import { Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white text-gray-900 border-b border-gray-200 text-right select-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Large Featured Column */}
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wider text-brown-600 bg-brown-500/10 border border-brown-500/20">
              <Sparkles className="h-4 w-4" />
              נעים להכיר – עידן שיפוצים ואחזקות
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brown-600 leading-tight">
            מי אנחנו ומה מייחד אותנו?
          </h2>

          <div className="space-y-6 text-right max-w-3xl mx-auto pt-4 border-t border-gray-100/80 font-opensans">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-800 font-light leading-relaxed">
              חברת עידן שיפוצים ואחזקות הוקמה מתוך חזון להביא סטנדרט בינלאומי של דיוק, יושרה ומצוינות לענף הבנייה והשיפוצים באזור חיפה והצפון. כבר למעלה מ-15 שנה שאנו מלווים בעלי דירות, משקיעים ומעצבים משלב התכנון הראשוני ועד למסירת מפתח חגיגית.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-light leading-relaxed">
              אנחנו מבינים ששיפוץ הוא החלטה משמעותית המלווה בחששות. לכן, שמנו לנו למטרה לספק לכם חוויה שונה לחלוטין – מעטפת שירות שקופה, שבה אתם מעודכנים על בסיס יומי בהתקדמות העבודה, לצד עבודה עם חומרי פרימיום בעלי תו תקן ישראלי מוקפד בלבד.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
