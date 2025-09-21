
import React, { createContext, useContext, useState, useEffect } from "react";
import { User } from "@/entities/User";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Navigation
    dashboard: "Dashboard",
    myCrafts: "My Crafts",
    myProfile: "My Profile",
    aiHelper: "AI Helper",
    explorer: "Explore Crafts",
    logout: "Logout",
    
    // Common
    welcome: "Welcome",
    save: "Save",
    cancel: "Cancel",
    edit: "Edit",
    delete: "Delete",
    loading: "Loading",
    search: "Search",
    filter: "Filter",
    viewAll: "View All",
    learnMore: "Learn More",
    
    // Dashboard
    welcomeMessage: "Welcome to Surabhi",
    tagline: "Heritage Marketplace",
    totalCrafts: "Total Crafts",
    availableCrafts: "Available",
    totalValue: "Total Value",
    avgPrice: "Avg. Price",
    recentCrafts: "Your Recent Crafts",
    aiInsights: "AI Insights",
    
    // Explorer
    discoverHeritage: "Discover India's Artistic Heritage",
    exploreDescription: "Explore thousands of authentic handmade crafts from master artisans across India's rich cultural landscape",
    featuredMasterpieces: "Featured Masterpieces",
    premiumCollection: "Premium Collection",
    craftTraditionsByRegion: "Craft Traditions by Region",
    regionalDescription: "Each region of India tells its own unique story through traditional craftsmanship, passed down through generations of master artisans",
    activeArtisans: "Active Artisans",
    indianStates: "Indian States", // Corrected 'availableCrafts' to 'indianStates' as per outline context
    craftTraditions: "Craft Traditions",
    supportCommunity: "Support India's Artisan Community",
    supportDescription: "Every purchase directly supports traditional artisans and helps preserve centuries-old craft techniques for future generations",
    shopWithPurpose: "Shop with Purpose",
    meetArtisans: "Meet the Artisans",
    
    // Crafts
    addNewCraft: "Add New Craft",
    craftTitle: "Craft Title",
    craftType: "Craft Type",
    description: "Description",
    culturalSignificance: "Cultural Significance",
    materialsUsed: "Materials & Techniques",
    price: "Price",
    available: "Available",
    sold: "Sold",
    dimensions: "Dimensions",
    timeToCreate: "Time to Create",
    regionStyle: "Regional Style",
    uploadImages: "Upload Images",
    availableForSale: "Available for Sale",
    madeToOrder: "Made to Order",
    
    // Profile
    personalInfo: "Personal Information",
    craftHeritage: "Craft Heritage",
    yourName: "Your Name",
    location: "Location",
    phoneNumber: "Phone Number",
    profilePhoto: "Profile Photo",
    workshopPhoto: "Workshop Photo",
    craftTradition: "Primary Craft Tradition",
    yearsExperience: "Years of Experience",
    specialty: "Your Speciality",
    story: "Your Story & Heritage",
    
    // AI Helper
    aiHelperTitle: "AI Craft Helper",
    aiHelperDesc: "Your intelligent assistant for showcasing traditional crafts online",
    chatWithAI: "Chat with AI Helper",
    quickTips: "Quick Tips",
    todaysFocus: "Today's Focus",
    helpWithDescription: "Help with Craft Description",
    photographyTips: "Photography Tips",
    pricingStrategy: "Pricing Strategy",
    storytelling: "Story Telling",
    
    // Welcome/Login
    welcomeUser: "Welcome",
    chooseRole: "Choose your role to start your journey in India's rich craft heritage marketplace",
    imArtisan: "I'm an Artisan",
    shareMycraft: "Share my craft with the world",
    imBuyer: "I'm a Buyer",
    discoverCrafts: "Discover authentic crafts",
    joinAsArtisan: "Join as Artisan",
    joinAsBuyer: "Join as Buyer",
    featuredCraftTraditions: "Featured Craft Traditions",
    
    // Categories
    pottery: "Pottery & Ceramics",
    textileWeaving: "Textile Weaving",
    jewelryMaking: "Jewelry Making",
    woodCarving: "Wood Carving",
    metalWork: "Metal Work",
    painting: "Traditional Painting",
    embroidery: "Embroidery",
    basketWeaving: "Basket Weaving",
    leatherWork: "Leather Work",
    stoneCarving: "Stone Carving",
    glassBlowing: "Glass Blowing",
    other: "Other"
  },
  hi: {
    // Navigation
    dashboard: "डैशबोर्ड",
    myCrafts: "मेरे शिल्प",
    myProfile: "मेरी प्रोफाइल",
    aiHelper: "AI सहायक",
    explorer: "शिल्प खोजें",
    logout: "लॉग आउट",
    
    // Common
    welcome: "स्वागत है",
    save: "सहेजें",
    cancel: "रद्द करें",
    edit: "संपादित करें",
    delete: "हटाएं",
    loading: "लोड हो रहा है",
    search: "खोजें",
    filter: "फिल्टर",
    viewAll: "सभी देखें",
    learnMore: "और जानें",
    
    // Dashboard
    welcomeMessage: "सुरभि में आपका स्वागत है",
    tagline: "विरासत बाजार",
    totalCrafts: "कुल शिल्प",
    availableCrafts: "उपलब्ध",
    totalValue: "कुल मूल्य",
    avgPrice: "औसत मूल्य",
    recentCrafts: "आपके हाल के शिल्प",
    aiInsights: "AI अंतर्दृष्टि",
    
    // Explorer
    discoverHeritage: "भारत की कलात्मक विरासत खोजें",
    exploreDescription: "भारत के समृद्ध सांस्कृतिक परिदृश्य में मास्टर कारीगरों से हजारों प्रामाणिक हस्तनिर्मित शिल्प खोजें",
    featuredMasterpieces: "विशेष कृतियां",
    premiumCollection: "प्रीमियम संग्रह",
    craftTraditionsByRegion: "क्षेत्र के अनुसार शिल्प परंपराएं",
    regionalDescription: "भारत का प्रत्येक क्षेत्र पारंपरिक शिल्पकारी के माध्यम से अपनी अनूठी कहानी कहता है",
    activeArtisans: "सक्रिय कारीगर",
    indianStates: "भारतीय राज्य",
    craftTraditions: "शिल्प परंपराएं",
    supportCommunity: "भारत के कारीगर समुदाय का समर्थन करें",
    supportDescription: "प्रत्येक खरीद पारंपरिक कारीगरों का प्रत्यक्ष समर्थन करती है और भविष्य की पीढ़ियों के लिए सदियों पुरानी शिल्प तकनीकों को संरक्षित करने में मदद करती है",
    shopWithPurpose: "उद्देश्य के साथ खरीदारी करें",
    meetArtisans: "कारीगरों से मिलें",
    
    // Crafts
    addNewCraft: "नया शिल्प जोड़ें",
    craftTitle: "शिल्प का नाम",
    craftType: "शिल्प का प्रकार",
    description: "विवरण",
    culturalSignificance: "सांस्कृतिक महत्व",
    materialsUsed: "सामग्री और तकनीक",
    price: "मूल्य",
    available: "उपलब्ध",
    sold: "बिक गया",
    dimensions: "आयाम",
    timeToCreate: "बनाने का समय",
    regionStyle: "क्षेत्रीय शैली",
    uploadImages: "चित्र अपलोड करें",
    availableForSale: "बिक्री के लिए उपलब्ध",
    madeToOrder: "ऑर्डर पर बनाया गया",
    
    // Profile
    personalInfo: "व्यक्तिगत जानकारी",
    craftHeritage: "शिल्प विरासत",
    yourName: "आपका नाम",
    location: "स्थान",
    phoneNumber: "फोन नंबर",
    profilePhoto: "प्रोफाइल फोटो",
    workshopPhoto: "कार्यशाला फोटो",
    craftTradition: "मुख्य शिल्प परंपरा",
    yearsExperience: "वर्षों का अनुभव",
    specialty: "आपकी विशेषता",
    story: "आपकी कहानी और विरासत",
    
    // AI Helper
    aiHelperTitle: "AI शिल्प सहायक",
    aiHelperDesc: "पारंपरिक शिल्प को ऑनलाइन प्रदर्शित करने के लिए आपका बुद्धिमान सहायक",
    chatWithAI: "AI सहायक से चैट करें",
    quickTips: "त्वरित सुझाव",
    todaysFocus: "आज का फोकस",
    helpWithDescription: "शिल्प विवरण में सहायता",
    photographyTips: "फोटोग्राफी टिप्स",
    pricingStrategy: "मूल्य निर्धारण रणनीति",
    storytelling: "कहानी कहना",
    
    // Welcome/Login
    welcomeUser: "स्वागत है",
    chooseRole: "भारत के समृद्ध शिल्प विरासत बाजार में अपनी यात्रा शुरू करने के लिए अपनी भूमिका चुनें",
    imArtisan: "मैं एक कारीगर हूं",
    shareMycraft: "अपने शिल्प को दुनिया के साथ साझा करें",
    imBuyer: "मैं एक खरीदार हूं",
    discoverCrafts: "प्रामाणिक शिल्प खोजें",
    joinAsArtisan: "कारीगर के रूप में जुड़ें",
    joinAsBuyer: "खरीददार के रूप में जुड़ें",
    featuredCraftTraditions: "विशेष शिल्प परंपराएं",
    
    // Categories
    pottery: "मिट्टी के बर्तन",
    textileWeaving: "वस्त्र बुनाई",
    jewelryMaking: "आभूषण निर्माण",
    woodCarving: "लकड़ी की नक्काशी",
    metalWork: "धातु का काम",
    painting: "पारंपरिक चित्रकारी",
    embroidery: "कढ़ाई",
    basketWeaving: "टोकरी बुनाई",
    leatherWork: "चमड़े का काम",
    stoneCarving: "पत्थर की नक्काशी",
    glassBlowing: "कांच बनाना",
    other: "अन्य"
  },
  bn: {
    // Navigation
    dashboard: "ড্যাশবোর্ড",
    myCrafts: "আমার কারুশিল্প",
    myProfile: "আমার প্রোফাইল",
    aiHelper: "AI সহায়ক",
    explorer: "কারুশিল্প অন্বেষণ",
    logout: "লগ আউট",
    
    // Common
    welcome: "স্বাগতম",
    save: "সংরক্ষণ করুন",
    cancel: "বাতিল",
    edit: "সম্পাদনা",
    delete: "মুছুন",
    loading: "লোড হচ্ছে",
    search: "অনুসন্ধান",
    filter: "ফিল্টার",
    viewAll: "সব দেখুন",
    learnMore: "আরও জানুন",
    
    // Dashboard
    welcomeMessage: "সুরভিতে স্বাগতম",
    tagline: "ঐতিহ্য বাজার",
    totalCrafts: "মোট কারুশিল্প",
    availableCrafts: "উপলব্ধ",
    totalValue: "মোট মূল্য",
    avgPrice: "গড় মূল্য",
    recentCrafts: "আপনার সাম্প্রতিক কারুশিল্প",
    aiInsights: "AI অন্তর্দৃষ্টি",

    // Explorer
    discoverHeritage: "ভারতের শিল্প ঐতিহ্য অন্বেষণ করুন",
    exploreDescription: "ভারতের সমৃদ্ধ সাংস্কৃতিক ল্যান্ডস্কেপের মাস্টার কারিগরদের থেকে হাজার হাজার খাঁটি হাতে তৈরি কারুশিল্প আবিষ্কার করুন",
    featuredMasterpieces: "বৈশিষ্ট্যযুক্ত শ্রেষ্ঠ কর্ম",
    premiumCollection: "প্রিমিয়াম সংগ্রহ",
    craftTraditionsByRegion: "অঞ্চল অনুসারে কারুশিল্প ঐতিহ্য",
    regionalDescription: "ভারতের প্রতিটি অঞ্চল ঐতিহ্যবাহী কারুশিল্পের মাধ্যমে তার নিজস্ব অনন্য গল্প বলে, যা প্রজন্মের পর প্রজন্ম ধরে মাস্টার কারিগরদের দ্বারা চলে আসছে",
    activeArtisans: "সক্রিয় কারিগর",
    indianStates: "ভারতীয় রাজ্য",
    craftTraditions: "কারুশিল্প ঐতিহ্য",
    supportCommunity: "ভারতের কারিগর সম্প্রদায়কে সমর্থন করুন",
    supportDescription: "প্রতিটি কেনাকাটা সরাসরি ঐতিহ্যবাহী কারিগরদের সমর্থন করে এবং ভবিষ্যৎ প্রজন্মের জন্য শত শত বছরের পুরনো কারুশিল্প কৌশল সংরক্ষণ করতে সাহায্য করে",
    shopWithPurpose: "উদ্দেশ্য সহ কেনাকাটা করুন",
    meetArtisans: "কারিগরদের সাথে দেখা করুন",
    
    // Crafts
    addNewCraft: "নতুন কারুশিল্প যোগ করুন",
    craftTitle: "কারুশিল্পের নাম",
    craftType: "কারুশিল্পের ধরন",
    description: "বিবরণ",
    culturalSignificance: "সাংস্কৃতিক গুরুত্ব",
    materialsUsed: "উপকরণ ও কৌশল",
    price: "মূল্য",
    available: "উপলব্ধ",
    sold: "বিক্রয়",
    dimensions: "মাত্রা",
    timeToCreate: "তৈরি করতে সময়",
    regionStyle: "আঞ্চলিক শৈলী",
    uploadImages: "ছবি আপলোড করুন",
    availableForSale: "বিক্রয়ের জন্য উপলব্ধ",
    madeToOrder: "অর্ডার অনুযায়ী তৈরি",
    
    // Profile
    personalInfo: "ব্যক্তিগত তথ্য",
    craftHeritage: "কারুশিল্প ঐতিহ্য",
    yourName: "আপনার নাম",
    location: "অবস্থান",
    phoneNumber: "ফোন নম্বর",
    profilePhoto: "প্রোফাইল ছবি",
    workshopPhoto: "কর্মশালার ছবি",
    craftTradition: "প্রধান কারুশিল্প ঐতিহ্য",
    yearsExperience: "অভিজ্ঞতার বছর",
    specialty: "আপনার বিশেষত্ব",
    story: "আপনার গল্প ও ঐতিহ্য",
    
    // AI Helper
    aiHelperTitle: "AI কারুশিল্প সহায়ক",
    aiHelperDesc: "ঐতিহ্যবাহী কারুশিল্প অনলাইনে প্রদর্শনের জন্য আপনার বুদ্ধিমান সহায়ক",
    chatWithAI: "AI সহায়কের সাথে চ্যাট করুন",
    quickTips: "দ্রুত পরামর্শ",
    todaysFocus: "আজকের ফোকাস",
    helpWithDescription: "বিবরণ সহ সাহায্য",
    photographyTips: "ফটোগ্রাফি টিপস",
    pricingStrategy: "মূল্য নির্ধারণের কৌশল",
    storytelling: "গল্প বলা",
    
    // Welcome/Login
    welcomeUser: "স্বাগতম",
    chooseRole: "ভারতের সমৃদ্ধ কারুশিল্প ঐতিহ্য বাজারে আপনার যাত্রা শুরু করতে আপনার ভূমিকা নির্বাচন করুন",
    imArtisan: "আমি একজন কারিগর",
    shareMycraft: "আমার কারুশিল্প বিশ্বজুড়ে শেয়ার করুন",
    imBuyer: "আমি একজন ক্রেতা",
    discoverCrafts: "খাঁটি কারুশিল্প আবিষ্কার করুন",
    joinAsArtisan: "কারিগর হিসাবে যোগ দিন",
    joinAsBuyer: "ক্রেতা হিসাবে যোগ দিন",
    featuredCraftTraditions: "বৈশিষ্ট্যযুক্ত কারুশিল্প ঐতিহ্য",
    
    // Categories
    pottery: "মাটির বাসন ও সিরামিকস",
    textileWeaving: "বস্ত্র বুনন",
    jewelryMaking: "গহনা তৈরি",
    woodCarving: "কাঠ খোদাই",
    metalWork: "ধাতুর কাজ",
    painting: "ঐতিহ্যবাহী চিত্রকর্ম",
    embroidery: "নকশীকাঁথা",
    basketWeaving: "ঝুড়ি বুনন",
    leatherWork: "চামড়ার কাজ",
    stoneCarving: "পাথর খোদাই",
    glassBlowing: "কাঁচ বুনন",
    other: "অন্যান্য"
  },
  ta: {
    // Navigation
    dashboard: "டாஷ்போர்டு",
    myCrafts: "என் கலைப்பொருள்கள்",
    myProfile: "என் சுயவிவரம்",
    aiHelper: "AI உதவியாளர்",
    explorer: "கலைப்பொருள்களை ஆராயுங்கள்",
    logout: "வெளியேறு",
    
    // Common
    welcome: "வரவேற்கிறோம்",
    save: "சேமிக்க",
    cancel: "ரத்து செய்",
    edit: "திருத்து",
    delete: "நீக்கு",
    loading: "ஏற்றுகிறது",
    search: "தேடு",
    filter: "வடிகட்டு",
    viewAll: "அனைத்தும் பார்க்க",
    learnMore: "மேலும் அறிக",
    
    // Dashboard
    welcomeMessage: "சுரபியில் வரவேற்கிறோம்",
    tagline: "பாரம்பரிய சந்தை",
    totalCrafts: "மொத்த கலைப்பொருள்கள்",
    availableCrafts: "கிடைக்கக்கூடியது",
    totalValue: "மொத்த மதிப்பு",
    avgPrice: "சராசரி விலை",
    recentCrafts: "உங்கள் சமீபத்திய கலைப்பொருள்கள்",
    aiInsights: "AI நுண்ணறிவு",

    // Explorer
    discoverHeritage: "இந்தியாவின் கலைப் பாரம்பரியத்தைக் கண்டறியுங்கள்",
    exploreDescription: "இந்தியாவின் வளமான கலாச்சார நிலப்பரப்பில் உள்ள கைவினைக் கலைஞர்களிடமிருந்து ஆயிரக்கணக்கான உண்மையான கையால் செய்யப்பட்ட கலைப்பொருட்களை ஆராயுங்கள்",
    featuredMasterpieces: "சிறப்பு கலைப் படைப்புகள்",
    premiumCollection: "பிரீமியம் தொகுப்பு",
    craftTraditionsByRegion: "பிராந்தியம் வாரியான கலைப் பாரம்பரியங்கள்",
    regionalDescription: "இந்தியாவின் ஒவ்வொரு பிராந்தியமும் பல தலைமுறை கைவினைக் கலைஞர்களால் கடத்தப்பட்ட பாரம்பரிய கைவினைத்திறன் மூலம் அதன் தனித்துவமான கதையைச் சொல்கிறது",
    activeArtisans: "செயலில் உள்ள கைவினைக் கலைஞர்கள்",
    indianStates: "இந்திய மாநிலங்கள்",
    craftTraditions: "கலைப் பாரம்பரியங்கள்",
    supportCommunity: "இந்தியாவின் கைவினைக் கலைஞர் சமூகத்தை ஆதரிக்கவும்",
    supportDescription: "ஒவ்வொரு கொள்முதலும் பாரம்பரிய கைவினைக் கலைஞர்களை நேரடியாக ஆதரிக்கிறது மற்றும் பல நூற்றாண்டுகள் பழமையான கைவினை நுட்பங்களை எதிர்கால சந்ததியினருக்காக பாதுகாக்க உதவுகிறது",
    shopWithPurpose: "நோக்கத்துடன் ஷாப்பிங் செய்யுங்கள்",
    meetArtisans: "கைவினைக் கலைஞர்களைச் சந்திக்கவும்",
    
    // Crafts
    addNewCraft: "புதிய கலைப்பொருளைச் சேர்க்க",
    craftTitle: "கலைப்பொருளின் பெயர்",
    craftType: "கலைப்பொருளின் வகை",
    description: "விளக்கம்",
    culturalSignificance: "கலாச்சார முக்கியத்துவம்",
    materialsUsed: "பொருள்கள் மற்றும் நுட்பங்கள்",
    price: "விலை",
    available: "கிடைக்கக்கூடியது",
    sold: "விற்றுப்போனது",
    dimensions: "பரிமாணங்கள்",
    timeToCreate: "உருவாக்க ஆகும் நேரம்",
    regionStyle: "பிராந்திய பாணி",
    uploadImages: "படங்களைப் பதிவேற்று",
    availableForSale: "விற்பனைக்கு உள்ளது",
    madeToOrder: "ஆர்டர் செய்ய தயாரிக்கப்பட்டது",
    
    // Profile
    personalInfo: "தனிப்பட்ட தகவல்",
    craftHeritage: "கலைப் பாரம்பரியம்",
    yourName: "உங்கள் பெயர்",
    location: "இடம்",
    phoneNumber: "தொலைபேசி எண்",
    profilePhoto: "சுயவிவரப் படம்",
    workshopPhoto: "பணியகப் படம்",
    craftTradition: "முதன்மைக் கலைப் பாரம்பரியம்",
    yearsExperience: "அனுபவ வருடங்கள்",
    specialty: "உங்கள் சிறப்பு",
    story: "உங்கள் கதை மற்றும் பாரம்பரியம்",
    
    // AI Helper
    aiHelperTitle: "AI கலை உதவியாளர்",
    aiHelperDesc: "பாரம்பரிய கலைகளை ஆன்லைனில் காண்பிப்பதற்கான உங்கள் அறிவுள்ள உதவியாளர்",
    chatWithAI: "AI உதவியாளருடன் அரட்டையடி",
    quickTips: "விரைவு குறிப்புகள்",
    todaysFocus: "இன்றைய கவனம்",
    helpWithDescription: "விளக்கத்தில் உதவுங்கள்",
    photographyTips: "புகைப்படம் எடுத்தல் குறிப்புகள்",
    pricingStrategy: "விலை நிர்ணய உத்தி",
    storytelling: "கதை சொல்லல்",
    
    // Welcome/Login
    welcomeUser: "வரவேற்கிறோம்",
    chooseRole: "இந்தியாவின் வளமான கைவினைப் பாரம்பரிய சந்தையில் உங்கள் பயணத்தைத் தொடங்க உங்கள் பங்கைத் தேர்வுசெய்யவும்",
    imArtisan: "நான் ஒரு கைவினைஞர்",
    shareMycraft: "என் கலைப்பொருளை உலகத்துடன் பகிர்கிறேன்",
    imBuyer: "நான் ஒரு வாங்குபவர்",
    discoverCrafts: "உண்மையான கலைப்பொருட்களைக் கண்டறியவும்",
    joinAsArtisan: "கைவினைஞராக சேரவும்",
    joinAsBuyer: "வாங்குபவராக சேரவும்",
    featuredCraftTraditions: "சிறப்பு கலைப் பாரம்பரியங்கள்",
    
    // Categories
    pottery: "மட்பாண்டங்கள் & செராமிக்ஸ்",
    textileWeaving: "ஜவுளி நெசவு",
    jewelryMaking: "நகை செய்தல்",
    woodCarving: "மரச் செதுக்குதல்",
    metalWork: "உலோக வேலை",
    painting: "பாரம்பரிய ஓவியம்",
    embroidery: "எம்பிராய்டரி",
    basketWeaving: "கூடை நெசவு",
    leatherWork: "தோல் வேலை",
    stoneCarving: "கல் செதுக்குதல்",
    glassBlowing: "கண்ணாடி ஊதுதல்",
    other: "மற்றவை"
  },
  gu: {
    // Navigation
    dashboard: "ડેશબોર્ડ",
    myCrafts: "મારા હસ્તકલા",
    myProfile: "મારી પ્રોફાઈલ",
    aiHelper: "AI સહાયક",
    explorer: "હસ્તકલા શોધો",
    logout: "લૉગ આઉટ",
    
    // Common
    welcome: "સ્વાગત છે",
    save: "સેવ કરો",
    cancel: "રદ કરો",
    edit: "સંપાદિત કરો",
    delete: "ડિલીટ કરો",
    loading: "લોડ થઈ રહ્યું છે",
    search: "શોધો",
    filter: "ફિલ્ટર",
    viewAll: "બધું જુઓ",
    learnMore: "વધુ જાણો",
    
    // Dashboard
    welcomeMessage: "સુરભિમાં સ્વાગત છે",
    tagline: "વારસા બજાર",
    totalCrafts: "કુલ હસ્તકલા",
    availableCrafts: "ઉપલબ્ધ",
    totalValue: "કુલ મૂલ્ય",
    avgPrice: "સરેરાશ કિંમત",
    recentCrafts: "તમારા તાજેતરના હસ્તકલા",
    aiInsights: "AI અંતર્દૃષ્ટિ",

    // Explorer
    discoverHeritage: "ભારતનો કલાત્મક વારસો શોધો",
    exploreDescription: "ભારતના સમૃદ્ધ સાંસ્કૃતિક લેન્ડસ્કેપમાંથી માસ્ટર કારીગરો પાસેથી હજારો અધિકૃત હાથથી બનાવેલી હસ્તકલાનું અન્વેષણ કરો",
    featuredMasterpieces: "ખાસ કૃતિઓ",
    premiumCollection: "પ્રીમિયમ સંગ્રહ",
    craftTraditionsByRegion: "પ્રદેશ દ્વારા હસ્તકલા પરંપરાઓ",
    regionalDescription: "ભારતનો દરેક પ્રદેશ માસ્ટર કારીગરોની પેઢીઓ દ્વારા પસાર થયેલી પરંપરાગત કારીગરી દ્વારા તેની પોતાની અનોખી વાર્તા કહે છે",
    activeArtisans: "સક્રિય કારીગરો",
    indianStates: "ભારતીય રાજ્યો",
    craftTraditions: "હસ્તકલા પરંપરાઓ",
    supportCommunity: "ભારતના કારીગર સમુદાયને ટેકો આપો",
    supportDescription: "દરેક ખરીદી પરંપરાગત કારીગરોને સીધો ટેકો આપે છે અને ભવિષ્યની પેઢીઓ માટે સદીઓ જૂની હસ્તકલા તકનીકોને સાચવવામાં મદદ કરે છે",
    shopWithPurpose: "હેતુ સાથે ખરીદી કરો",
    meetArtisans: "કારીગરોને મળો",
    
    // Crafts
    addNewCraft: "નવો હસ્તકલા ઉમેરો",
    craftTitle: "હસ્તકલાનું નામ",
    craftType: "હસ્તકલાનો પ્રકાર",
    description: "વર્ણન",
    culturalSignificance: "સાંસ્કૃતિક મહત્વ",
    materialsUsed: "સામગ્રી અને તકનીકો",
    price: "કિંમત",
    available: "ઉપલબ્ધ",
    sold: "વેચાઈ ગયું",
    dimensions: "પરિમાણો",
    timeToCreate: "બનાવવામાં લાગતો સમય",
    regionStyle: "પ્રાદેશિક શૈલી",
    uploadImages: "છબીઓ અપલોડ કરો",
    availableForSale: "વેચાણ માટે ઉપલબ્ધ",
    madeToOrder: "ઓર્ડર પર બનાવેલ",
    
    // Profile
    personalInfo: "વ્યક્તિગત માહિતી",
    craftHeritage: "હસ્તકલા વારસો",
    yourName: "તમારું નામ",
    location: "સ્થાન",
    phoneNumber: "ફોન નંબર",
    profilePhoto: "પ્રોફાઈલ ફોટો",
    workshopPhoto: "વર્કશોપ ફોટો",
    craftTradition: "પ્રાથમિક હસ્તકલા પરંપરા",
    yearsExperience: "અનુભવના વર્ષો",
    specialty: "તમારી વિશેષતા",
    story: "તમારી વાર્તા અને વારસો",
    
    // AI Helper
    aiHelperTitle: "AI હસ્તકલા સહાયક",
    aiHelperDesc: "પરંપરાગત હસ્તકલાને ઓનલાઈન બતાવવા માટે તમારો બુદ્ધિમાન સહાયક",
    chatWithAI: "AI સહાયક સાથે ચેટ કરો",
    quickTips: "ઝડપી સૂચનો",
    todaysFocus: "આજનું ધ્યાન",
    helpWithDescription: "વર્ણનમાં મદદ કરો",
    photographyTips: "ફોટોગ્રાફી ટિપ્સ",
    pricingStrategy: "ભાવ નિર્ધારણ વ્યૂહરચના",
    storytelling: "વાર્તા કહેવી",
    
    // Welcome/Login
    welcomeUser: "સ્વાગત છે",
    chooseRole: "ભારતના સમૃદ્ધ હસ્તકલા વારસાગત બજારમાં તમારી યાત્રા શરૂ કરવા માટે તમારી ભૂમિકા પસંદ કરો",
    imArtisan: "હું એક કારીગર છું",
    shareMycraft: "મારી હસ્તકલા દુનિયા સાથે શેર કરો",
    imBuyer: "હું એક ખરીદદાર છું",
    discoverCrafts: "અધિકૃત હસ્તકલા શોધો",
    joinAsArtisan: "કારીગર તરીકે જોડાઓ",
    joinAsBuyer: "ખરીદદાર તરીકે જોડાઓ",
    featuredCraftTraditions: "ખાસ હસ્તકલા પરંપરાઓ",
    
    // Categories
    pottery: "માટીકામ અને સિરામિક્સ",
    textileWeaving: "કાપડ વણાટ",
    jewelryMaking: "આભૂષણ બનાવવું",
    woodCarving: "લાકડાની કોતરણી",
    metalWork: "ધાતુકામ",
    painting: "પરંપરાગત ચિત્રકામ",
    embroidery: "ભરતકામ",
    basketWeaving: "બાસ્કેટ વણાટ",
    leatherWork: "ચામડાનું કામ",
    stoneCarving: "પથ્થરની કોતરણી",
    glassBlowing: "કાચ ફૂંકવું",
    other: "અન્ય"
  }
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadLanguagePreference();
  }, []);

  const loadLanguagePreference = async () => {
    try {
      const user = await User.me();
      const savedLanguage = user.preferred_language || 'en';
      setCurrentLanguage(savedLanguage);
    } catch (error) {
      // User not logged in or error occurred, use default
      const browserLang = navigator.language.split('-')[0];
      if (translations[browserLang]) {
        setCurrentLanguage(browserLang);
      } else {
        setCurrentLanguage('en'); // Fallback to English if browser language not supported
      }
    }
    setIsLoading(false);
  };

  const changeLanguage = async (language) => {
    setCurrentLanguage(language);
    try {
      await User.updateMyUserData({ preferred_language: language });
    } catch (error) {
      console.error('Failed to save language preference:', error);
    }
  };

  const t = (key) => {
    return translations[currentLanguage]?.[key] || translations['en'][key] || key;
  };

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    availableLanguages: [
      { code: 'en', name: 'English', nativeName: 'English' },
      { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
      { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
      { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
      { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' }
    ]
  };

  if (isLoading) return null;

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
