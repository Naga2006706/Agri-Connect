import { Landmark, ShieldCheck, CreditCard, Sprout, ShoppingCart, Leaf, ExternalLink } from "lucide-react";
import { useLanguage } from "@/src/contexts/LanguageContext";

const translations: Record<string, any> = {
  "en-US": {
    title: "Government Schemes",
    subtitle: "Explore financial and technical support schemes for farmers.",
    learnMore: "Learn More",
    schemes: [
      { 
        id: "pmkisan", 
        title: "PM-KISAN", 
        icon: Landmark, 
        desc: "Financial support of ₹6,000 per year to small and marginal farmers.",
        link: "https://pmkisan.gov.in/"
      },
      { 
        id: "pmfby", 
        title: "PM Fasal Bima Yojana (PMFBY)", 
        icon: ShieldCheck, 
        desc: "Crop insurance scheme to protect against non-preventable natural risks.",
        link: "https://pmfby.gov.in/"
      },
      { 
        id: "kcc", 
        title: "Kisan Credit Card (KCC)", 
        icon: CreditCard, 
        desc: "Provides farmers with timely access to credit for agricultural expenses.",
        link: "https://sbi.co.in/web/agri-rural/agriculture-banking/crop-loan/kisan-credit-card"
      },
      { 
        id: "shc", 
        title: "Soil Health Card Scheme", 
        icon: Sprout, 
        desc: "Provides information on soil nutrient status and fertilizer recommendations.",
        link: "https://soilhealth.dac.gov.in/"
      },
      { 
        id: "enam", 
        title: "e-NAM", 
        icon: ShoppingCart, 
        desc: "Pan-India electronic trading portal for agricultural commodities.",
        link: "https://enam.gov.in/"
      },
      { 
        id: "pkvy", 
        title: "Paramparagat Krishi Vikas Yojana", 
        icon: Leaf, 
        desc: "Promotes organic farming and sustainable agriculture practices.",
        link: "https://pgsindia-ncof.gov.in/pkvy/index.aspx"
      }
    ]
  },
  "hi-IN": {
    title: "सरकारी योजनाएं",
    subtitle: "किसानों के लिए वित्तीय और तकनीकी सहायता योजनाओं का अन्वेषण करें।",
    learnMore: "और जानें",
    schemes: [
      { id: "pmkisan", title: "पीएम-किसान (PM-KISAN)", icon: Landmark, desc: "छोटे और सीमांत किसानों को प्रति वर्ष ₹6,000 की वित्तीय सहायता।", link: "https://pmkisan.gov.in/" },
      { id: "pmfby", title: "पीएम फसल बीमा योजना (PMFBY)", icon: ShieldCheck, desc: "प्राकृतिक जोखिमों से बचाने के लिए फसल बीमा योजना।", link: "https://pmfby.gov.in/" },
      { id: "kcc", title: "किसान क्रेडिट कार्ड (KCC)", icon: CreditCard, desc: "कृषि खर्चों के लिए समय पर ऋण तक पहुंच।", link: "https://sbi.co.in/web/agri-rural/agriculture-banking/crop-loan/kisan-credit-card" },
      { id: "shc", title: "मृदा स्वास्थ्य कार्ड योजना", icon: Sprout, desc: "मिट्टी के पोषक तत्वों की स्थिति और उर्वरक सिफारिशें।", link: "https://soilhealth.dac.gov.in/" },
      { id: "enam", title: "ई-नाम (e-NAM)", icon: ShoppingCart, desc: "कृषि वस्तुओं के लिए अखिल भारतीय इलेक्ट्रॉनिक ट्रेडिंग पोर्टल।", link: "https://enam.gov.in/" },
      { id: "pkvy", title: "परंपरागत कृषि विकास योजना", icon: Leaf, desc: "जैविक खेती और टिकाऊ कृषि प्रथाओं को बढ़ावा देना।", link: "https://pgsindia-ncof.gov.in/pkvy/index.aspx" }
    ]
  },
  "te-IN": {
    title: "ప్రభుత్వ పథకాలు",
    subtitle: "రైతుల కోసం ఆర్థిక మరియు సాంకేతిక మద్దతు పథకాలను అన్వేషించండి.",
    learnMore: "మరింత తెలుసుకోండి",
    schemes: [
      { id: "pmkisan", title: "పీఎం-కిసాన్ (PM-KISAN)", icon: Landmark, desc: "చిన్న, సన్నకారు రైతులకు ఏడాదికి ₹6,000 ఆర్థిక సహాయం.", link: "https://pmkisan.gov.in/" },
      { id: "pmfby", title: "పీఎం ఫసల్ బీమా యోజన (PMFBY)", icon: ShieldCheck, desc: "ప్రకృతి వైపరీత్యాల నుండి రక్షించడానికి పంట బీమా పథకం.", link: "https://pmfby.gov.in/" },
      { id: "kcc", title: "కిసాన్ క్రెడిట్ కార్డ్ (KCC)", icon: CreditCard, desc: "వ్యవసాయ ఖర్చుల కోసం సకాలంలో రుణాలు.", link: "https://sbi.co.in/web/agri-rural/agriculture-banking/crop-loan/kisan-credit-card" },
      { id: "shc", title: "సాయిల్ హెల్త్ కార్డ్ పథకం", icon: Sprout, desc: "నేల పోషకాల స్థితి మరియు ఎరువుల సిఫార్సులు.", link: "https://soilhealth.dac.gov.in/" },
      { id: "enam", title: "ఈ-నామ్ (e-NAM)", icon: ShoppingCart, desc: "వ్యవసాయ ఉత్పత్తుల కోసం పాన్-ఇండియా ఎలక్ట్రానిక్ ట్రేడింగ్ పోర్టల్.", link: "https://enam.gov.in/" },
      { id: "pkvy", title: "పరంపరాగత్ కృషి వికాస్ యోజన", icon: Leaf, desc: "సేంద్రీయ వ్యవసాయం మరియు స్థిరమైన వ్యవసాయ పద్ధతులను ప్రోత్సహిస్తుంది.", link: "https://pgsindia-ncof.gov.in/pkvy/index.aspx" }
    ]
  },
  "ta-IN": {
    title: "அரசு திட்டங்கள்",
    subtitle: "விவசாயிகளுக்கான நிதி மற்றும் தொழில்நுட்ப ஆதரவு திட்டங்களை ஆராயுங்கள்.",
    learnMore: "மேலும் அறிய",
    schemes: [
      { id: "pmkisan", title: "பிஎம்-கிசான் (PM-KISAN)", icon: Landmark, desc: "சிறு மற்றும் குறு விவசாயிகளுக்கு ஆண்டுக்கு ₹6,000 நிதி உதவி.", link: "https://pmkisan.gov.in/" },
      { id: "pmfby", title: "பிஎம் பயிர் காப்பீட்டுத் திட்டம் (PMFBY)", icon: ShieldCheck, desc: "இயற்கை அபாயங்களிலிருந்து பாதுகாக்க பயிர் காப்பீட்டுத் திட்டம்.", link: "https://pmfby.gov.in/" },
      { id: "kcc", title: "கிசான் கிரெடிட் கார்டு (KCC)", icon: CreditCard, desc: "விவசாய செலவுகளுக்கு சரியான நேரத்தில் கடன்.", link: "https://sbi.co.in/web/agri-rural/agriculture-banking/crop-loan/kisan-credit-card" },
      { id: "shc", title: "மண் சுகாதார அட்டை திட்டம்", icon: Sprout, desc: "மண் ஊட்டச்சத்து நிலை மற்றும் உர பரிந்துரைகள்.", link: "https://soilhealth.dac.gov.in/" },
      { id: "enam", title: "இ-நாம் (e-NAM)", icon: ShoppingCart, desc: "விவசாய பொருட்களுக்கான அகில இந்திய மின்னணு வர்த்தக போர்டல்.", link: "https://enam.gov.in/" },
      { id: "pkvy", title: "பரம்பராகத் கிருஷி விகாஸ் யோஜனா", icon: Leaf, desc: "கரிம வேளாண்மை மற்றும் நிலையான விவசாய நடைமுறைகளை ஊக்குவிக்கிறது.", link: "https://pgsindia-ncof.gov.in/pkvy/index.aspx" }
    ]
  },
  "mr-IN": {
    title: "सरकारी योजना",
    subtitle: "शेतकऱ्यांसाठी आर्थिक आणि तांत्रिक मदत योजना एक्सप्लोर करा.",
    learnMore: "अधिक जाणून घ्या",
    schemes: [
      { id: "pmkisan", title: "पीएम-किसान (PM-KISAN)", icon: Landmark, desc: "लहान आणि सीमांत शेतकऱ्यांना प्रति वर्ष ₹6,000 ची आर्थिक मदत.", link: "https://pmkisan.gov.in/" },
      { id: "pmfby", title: "पीएम पीक विमा योजना (PMFBY)", icon: ShieldCheck, desc: "नैसर्गिक धोक्यांपासून संरक्षण करण्यासाठी पीक विमा योजना.", link: "https://pmfby.gov.in/" },
      { id: "kcc", title: "किसान क्रेडिट कार्ड (KCC)", icon: CreditCard, desc: "कृषी खर्चासाठी वेळेवर कर्ज.", link: "https://sbi.co.in/web/agri-rural/agriculture-banking/crop-loan/kisan-credit-card" },
      { id: "shc", title: "मृदा आरोग्य कार्ड योजना", icon: Sprout, desc: "मातीतील पोषक तत्वांची स्थिती आणि खतांच्या शिफारसी.", link: "https://soilhealth.dac.gov.in/" },
      { id: "enam", title: "ई-नाम (e-NAM)", icon: ShoppingCart, desc: "कृषी वस्तूंसाठी पॅन-इंडिया इलेक्ट्रॉनिक ट्रेडिंग पोर्टल.", link: "https://enam.gov.in/" },
      { id: "pkvy", title: "परंपरागत कृषी विकास योजना", icon: Leaf, desc: "सेंद्रिय शेती आणि शाश्वत कृषी पद्धतींना प्रोत्साहन देते.", link: "https://pgsindia-ncof.gov.in/pkvy/index.aspx" }
    ]
  },
  "kn-IN": {
    title: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
    subtitle: "ರೈತರಿಗೆ ಆರ್ಥಿಕ ಮತ್ತು ತಾಂತ್ರಿಕ ಬೆಂಬಲ ಯೋಜನೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.",
    learnMore: "ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ",
    schemes: [
      { id: "pmkisan", title: "ಪಿಎಂ-ಕಿಸಾನ್ (PM-KISAN)", icon: Landmark, desc: "ಸಣ್ಣ ಮತ್ತು ಅತಿ ಸಣ್ಣ ರೈತರಿಗೆ ವರ್ಷಕ್ಕೆ ₹6,000 ಆರ್ಥಿಕ ನೆರವು.", link: "https://pmkisan.gov.in/" },
      { id: "pmfby", title: "ಪಿಎಂ ಫಸಲ್ ಭೀಮಾ ಯೋಜನೆ (PMFBY)", icon: ShieldCheck, desc: "ನೈಸರ್ಗಿಕ ಅಪಾಯಗಳಿಂದ ರಕ್ಷಿಸಲು ಬೆಳೆ ವಿಮೆ ಯೋಜನೆ.", link: "https://pmfby.gov.in/" },
      { id: "kcc", title: "ಕಿಸಾನ್ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ (KCC)", icon: CreditCard, desc: "ಕೃಷಿ ವೆಚ್ಚಗಳಿಗಾಗಿ ಸಕಾಲಿಕ ಸಾಲ.", link: "https://sbi.co.in/web/agri-rural/agriculture-banking/crop-loan/kisan-credit-card" },
      { id: "shc", title: "ಮಣ್ಣಿನ ಆರೋಗ್ಯ ಕಾರ್ಡ್ ಯೋಜನೆ", icon: Sprout, desc: "ಮಣ್ಣಿನ ಪೋಷಕಾಂಶಗಳ ಸ್ಥಿತಿ ಮತ್ತು ರಸಗೊಬ್ಬರ ಶಿಫಾರಸುಗಳು.", link: "https://soilhealth.dac.gov.in/" },
      { id: "enam", title: "ಇ-ನ್ಯಾಮ್ (e-NAM)", icon: ShoppingCart, desc: "ಕೃಷಿ ಸರಕುಗಳಿಗಾಗಿ ಪ್ಯಾನ್-ಇಂಡಿಯಾ ಎಲೆಕ್ಟ್ರಾನಿಕ್ ಟ್ರೇಡಿಂಗ್ ಪೋರ್ಟಲ್.", link: "https://enam.gov.in/" },
      { id: "pkvy", title: "ಪರಂಪರಾಗತ್ ಕೃಷಿ ವಿಕಾಸ್ ಯೋಜನೆ", icon: Leaf, desc: "ಸಾವಯವ ಕೃಷಿ ಮತ್ತು ಸುಸ್ಥಿರ ಕೃಷಿ ಪದ್ಧತಿಗಳನ್ನು ಉತ್ತೇಜಿಸುತ್ತದೆ.", link: "https://pgsindia-ncof.gov.in/pkvy/index.aspx" }
    ]
  }
};

export default function GovernmentSchemes() {
  const { language } = useLanguage();
  const t = translations[language] || translations["en-US"];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-green-100">
        <h1 className="text-2xl font-bold text-gray-800">{t.title}</h1>
        <p className="text-gray-600 mt-2">{t.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {t.schemes.map((scheme: any) => {
          const Icon = scheme.icon;

          return (
            <div 
              key={scheme.id} 
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:border-green-300 hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col"
            >
              <div className="p-5 flex-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 rounded-xl bg-green-100 text-green-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 leading-tight">{scheme.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{scheme.desc}</p>
              </div>
              
              <div className="px-5 pb-5 pt-0 mt-auto">
                <a 
                  href={scheme.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-2.5 px-4 bg-green-50 hover:bg-green-100 text-green-700 text-sm font-medium rounded-lg transition-colors border border-green-200"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {t.learnMore}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
