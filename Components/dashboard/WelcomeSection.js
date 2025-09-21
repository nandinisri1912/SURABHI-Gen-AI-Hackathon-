import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Palette } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "../LanguageProvider";

export default function WelcomeSection({ artisan }) {
  const { t, currentLanguage } = useLanguage();
  
  const getGreeting = () => {
    const hour = new Date().getHours();
    const greetings = {
      en: hour < 12 ? "Good Morning" : hour < 17 ? "Good Afternoon" : "Good Evening",
      hi: hour < 12 ? "सुप्रभात" : hour < 17 ? "नमस्ते" : "शुभ संध्या",
      bn: hour < 12 ? "সুপ্রভাত" : hour < 17 ? "নমস্কার" : "শুভ সন্ধ্যা",
      ta: hour < 12 ? "காலை வணக்கம்" : hour < 17 ? "வணக்கம்" : "மாலை வணக்கம்",
      gu: hour < 12 ? "સુપ્રભાત" : hour < 17 ? "નમસ્તે" : "શુભ સાંજ"
    };
    return greetings[currentLanguage] || greetings.en;
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-white/90 via-pink-50/90 to-yellow-50/90 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-lg border border-pink-100 mb-8"
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
        <div className="flex items-center gap-4">
          {artisan.profile_image ? (
            <img 
              src={artisan.profile_image} 
              alt={artisan.name}
              className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover border-4 border-white shadow-lg"
            />
          ) : (
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {artisan.name.charAt(0)}
            </div>
          )}
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">
              {getGreeting()}, {artisan.name}!
            </h1>
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <Badge className="bg-pink-100 text-pink-700 border-pink-200">
                <Palette className="w-3 h-3 mr-1" />
                {artisan.craft_tradition.replace(/_/g, ' ')}
              </Badge>
              <Badge variant="outline" className="border-orange-200 text-orange-700">
                <MapPin className="w-3 h-3 mr-1" />
                {artisan.location}
              </Badge>
              {artisan.experience_years && (
                <Badge variant="outline" className="border-yellow-200 text-yellow-700">
                  <Clock className="w-3 h-3 mr-1" />
                  {artisan.experience_years} years
                </Badge>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex-1 lg:text-right">
          <p className="text-gray-600 text-lg italic">
            "Your craft tells a story that spans generations"
          </p>
        </div>
      </div>
    </motion.div>
  );
}