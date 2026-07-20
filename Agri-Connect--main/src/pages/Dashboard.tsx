import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import { CloudSun, TrendingUp, CalendarDays, Droplets, MessageSquare, Bug } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/src/contexts/LanguageContext";

const translations: Record<string, any> = {
  "en-US": {
    title: "Dashboard",
    subtitle: "Welcome back to AgriConnect. Here's what's happening today.",
    weather: "Current Weather",
    weatherDesc: "Partly Cloudy • Humidity: 65%",
    weatherLink: "View full forecast",
    market: "Market Trends",
    marketPrice: "Wheat: ₹21,000/ton",
    marketDesc: "+2.5% from last week",
    marketLink: "View all prices",
    events: "Upcoming Events",
    eventsCount: "2 Events",
    eventsDesc: "Next: AgriTech Expo 2026 (Tomorrow)",
    eventsLink: "Register for events",
    water: "Water Management",
    waterStatus: "Optimal",
    waterDesc: "Soil moisture levels are good for current crops.",
    waterLink: "Check crop needs",
    expert: "Expert Consultation",
    expertName: "AI Agronomist",
    expertDesc: "Available 24/7 for your farming queries.",
    expertLink: "Start chat",
    disease: "Disease Detection",
    diseaseScanner: "AI Scanner",
    diseaseDesc: "Upload a photo to identify crop diseases.",
    diseaseLink: "Scan crop"
  },
  "hi-IN": {
    title: "डैशबोर्ड",
    subtitle: "एग्रीकनेक्ट में आपका स्वागत है। यहाँ आज की जानकारी है।",
    weather: "वर्तमान मौसम",
    weatherDesc: "आंशिक रूप से बादल • आर्द्रता: 65%",
    weatherLink: "पूरा पूर्वानुमान देखें",
    market: "बाजार के रुझान",
    marketPrice: "गेहूँ: ₹21,000/टन",
    marketDesc: "पिछले सप्ताह से +2.5%",
    marketLink: "सभी कीमतें देखें",
    events: "आगामी आयोजन",
    eventsCount: "2 आयोजन",
    eventsDesc: "अगला: एग्रीटेक एक्सपो 2026 (कल)",
    eventsLink: "आयोजनों के लिए पंजीकरण करें",
    water: "जल प्रबंधन",
    waterStatus: "इष्टतम",
    waterDesc: "वर्तमान फसलों के लिए मिट्टी की नमी का स्तर अच्छा है।",
    waterLink: "फसल की जरूरतें जांचें",
    expert: "विशेषज्ञ परामर्श",
    expertName: "AI कृषिविज्ञानी",
    expertDesc: "आपके खेती के सवालों के लिए 24/7 उपलब्ध।",
    expertLink: "चैट शुरू करें",
    disease: "फसल रोग पहचान",
    diseaseScanner: "AI स्कैनर",
    diseaseDesc: "फसल के रोगों की पहचान करने के लिए एक फोटो अपलोड करें।",
    diseaseLink: "फसल स्कैन करें"
  },
  "te-IN": {
    title: "డాష్‌బోర్డ్",
    subtitle: "అగ్రి కనెక్ట్‌కు స్వాగతం. ఈ రోజు విశేషాలు ఇక్కడ ఉన్నాయి.",
    weather: "ప్రస్తుత వాతావరణం",
    weatherDesc: "పాక్షికంగా మేఘావృతం • తేమ: 65%",
    weatherLink: "పూర్తి వాతావరణ సూచన చూడండి",
    market: "మార్కెట్ పోకడలు",
    marketPrice: "గోధుమ: ₹21,000/టన్ను",
    marketDesc: "గత వారం నుండి +2.5%",
    marketLink: "అన్ని ధరలను చూడండి",
    events: "రాబోయే కార్యక్రమాలు",
    eventsCount: "2 కార్యక్రమాలు",
    eventsDesc: "తదుపరి: అగ్రిటెక్ ఎక్స్‌పో 2026 (రేపు)",
    eventsLink: "కార్యక్రమాల కోసం నమోదు చేయండి",
    water: "నీటి నిర్వహణ",
    waterStatus: "అనుకూలం",
    waterDesc: "ప్రస్తుత పంటలకు నేల తేమ స్థాయిలు బాగున్నాయి.",
    waterLink: "పంట అవసరాలను తనిఖీ చేయండి",
    expert: "నిపుణుల సంప్రదింపులు",
    expertName: "AI వ్యవసాయ శాస్త్రవేత్త",
    expertDesc: "మీ వ్యవసాయ ప్రశ్నల కోసం 24/7 అందుబాటులో ఉంది.",
    expertLink: "చాట్ ప్రారంభించండి",
    disease: "పంట వ్యాధి గుర్తింపు",
    diseaseScanner: "AI స్కానర్",
    diseaseDesc: "పంట వ్యాధులను గుర్తించడానికి ఫోటోను అప్‌లోడ్ చేయండి.",
    diseaseLink: "పంటను స్కాన్ చేయండి"
  },
  "ta-IN": {
    title: "டாஷ்போர்டு",
    subtitle: "அக்ரிகனெக்ட்டுக்கு மீண்டும் வருக. இன்றைய நிகழ்வுகள் இங்கே.",
    weather: "தற்போதைய வானிலை",
    weatherDesc: "பகுதி மேகமூட்டம் • ஈரப்பதம்: 65%",
    weatherLink: "முழு வானிலை முன்னறிவிப்பைக் காண்க",
    market: "சந்தை போக்குகள்",
    marketPrice: "கோதுமை: ₹21,000/டன்",
    marketDesc: "கடந்த வாரத்திலிருந்து +2.5%",
    marketLink: "அனைத்து விலைகளையும் காண்க",
    events: "வரவிருக்கும் நிகழ்வுகள்",
    eventsCount: "2 நிகழ்வுகள்",
    eventsDesc: "அடுத்து: அக்ரிடெக் எக்ஸ்போ 2026 (நாளை)",
    eventsLink: "நிகழ்வுகளுக்கு பதிவு செய்க",
    water: "நீர் மேலாண்மை",
    waterStatus: "உகந்தது",
    waterDesc: "தற்போதைய பயிர்களுக்கு மண்ணின் ஈரப்பதம் நன்றாக உள்ளது.",
    waterLink: "பயிர் தேவைகளை சரிபார்க்கவும்",
    expert: "நிபுணர் ஆலோசனை",
    expertName: "AI வேளாண் நிபுணர்",
    expertDesc: "உங்கள் விவசாய கேள்விகளுக்கு 24/7 கிடைக்கும்.",
    expertLink: "அரட்டையைத் தொடங்கு",
    disease: "பயிர் நோய் கண்டறிதல்",
    diseaseScanner: "AI ஸ்கேனர்",
    diseaseDesc: "பயிர் நோய்களைக் கண்டறிய ஒரு புகைப்படத்தைப் பதிவேற்றவும்.",
    diseaseLink: "பயிரை ஸ்கேன் செய்"
  },
  "mr-IN": {
    title: "डॅशबोर्ड",
    subtitle: "अॅग्रीकनेक्टमध्ये आपले स्वागत आहे. आजच्या घडामोडी येथे आहेत.",
    weather: "सध्याचे हवामान",
    weatherDesc: "अंशतः ढगाळ • आर्द्रता: 65%",
    weatherLink: "संपूर्ण हवामान अंदाज पहा",
    market: "बाजार कल",
    marketPrice: "गहू: ₹21,000/टन",
    marketDesc: "गेल्या आठवड्यापासून +2.5%",
    marketLink: "सर्व किमती पहा",
    events: "आगामी कार्यक्रम",
    eventsCount: "2 कार्यक्रम",
    eventsDesc: "पुढील: अॅग्रीटेक एक्स्पो 2026 (उद्या)",
    eventsLink: "कार्यक्रमांसाठी नोंदणी करा",
    water: "पाणी व्यवस्थापन",
    waterStatus: "इष्टतम",
    waterDesc: "सध्याच्या पिकांसाठी जमिनीतील ओलावा पातळी चांगली आहे.",
    waterLink: "पिकांच्या गरजा तपासा",
    expert: "तज्ञ सल्ला",
    expertName: "AI कृषीशास्त्रज्ञ",
    expertDesc: "तुमच्या शेतीच्या प्रश्नांसाठी 24/7 उपलब्ध.",
    expertLink: "चॅट सुरू करा",
    disease: "पीक रोग ओळख",
    diseaseScanner: "AI स्कॅनर",
    diseaseDesc: "पीक रोग ओळखण्यासाठी फोटो अपलोड करा.",
    diseaseLink: "पीक स्कॅन करा"
  },
  "kn-IN": {
    title: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    subtitle: "ಅಗ್ರಿಕನೆಕ್ಟ್‌ಗೆ ಮರಳಿ ಸ್ವಾಗತ. ಇಂದಿನ ಮುಖ್ಯಾಂಶಗಳು ಇಲ್ಲಿವೆ.",
    weather: "ಪ್ರಸ್ತುತ ಹವಾಮಾನ",
    weatherDesc: "ಭಾಗಶಃ ಮೋಡ • ಆರ್ದ್ರತೆ: 65%",
    weatherLink: "ಪೂರ್ಣ ಹವಾಮಾನ ಮುನ್ಸೂಚನೆ ವೀಕ್ಷಿಸಿ",
    market: "ಮಾರುಕಟ್ಟೆ ಪ್ರವೃತ್ತಿಗಳು",
    marketPrice: "ಗೋಧಿ: ₹21,000/ಟನ್",
    marketDesc: "ಕಳೆದ ವಾರದಿಂದ +2.5%",
    marketLink: "ಎಲ್ಲಾ ಬೆಲೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
    events: "ಮುಂಬರುವ ಕಾರ್ಯಕ್ರಮಗಳು",
    eventsCount: "2 ಕಾರ್ಯಕ್ರಮಗಳು",
    eventsDesc: "ಮುಂದಿನದು: ಅಗ್ರಿಟೆಕ್ ಎಕ್ಸ್‌ಪೋ 2026 (ನಾಳೆ)",
    eventsLink: "ಕಾರ್ಯಕ್ರಮಗಳಿಗೆ ನೋಂದಾಯಿಸಿ",
    water: "ನೀರಿನ ನಿರ್ವಹಣೆ",
    waterStatus: "ಸೂಕ್ತ",
    waterDesc: "ಪ್ರಸ್ತುತ ಬೆಳೆಗಳಿಗೆ ಮಣ್ಣಿನ ತೇವಾಂಶದ ಮಟ್ಟವು ಉತ್ತಮವಾಗಿದೆ.",
    waterLink: "ಬೆಳೆ ಅಗತ್ಯಗಳನ್ನು ಪರಿಶೀಲಿಸಿ",
    expert: "ತಜ್ಞರ ಸಮಾಲೋಚನೆ",
    expertName: "AI ಕೃಷಿ ವಿಜ್ಞಾನಿ",
    expertDesc: "ನಿಮ್ಮ ಕೃಷಿ ಪ್ರಶ್ನೆಗಳಿಗೆ 24/7 ಲಭ್ಯವಿದೆ.",
    expertLink: "ಚಾಟ್ ಪ್ರಾರಂಭಿಸಿ",
    disease: "ಬೆಳೆ ರೋಗ ಪತ್ತೆ",
    diseaseScanner: "AI ಸ್ಕ್ಯಾನರ್",
    diseaseDesc: "ಬೆಳೆ ರೋಗಗಳನ್ನು ಗುರುತಿಸಲು ಫೋಟೋವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
    diseaseLink: "ಬೆಳೆಯನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ"
  }
};

export default function Dashboard() {
  const { language } = useLanguage();
  const t = translations[language] || translations["en-US"];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">{t.title}</h1>
        <p className="text-gray-500 mt-2">{t.subtitle}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Weather Quick View */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t.weather}</CardTitle>
            <CloudSun className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24°C</div>
            <p className="text-xs text-muted-foreground">{t.weatherDesc}</p>
            <Link to="/weather" className="text-sm text-green-600 hover:underline mt-4 inline-block">{t.weatherLink} &rarr;</Link>
          </CardContent>
        </Card>

        {/* Market Quick View */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t.market}</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{t.marketPrice}</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1" /> {t.marketDesc}
            </p>
            <Link to="/market" className="text-sm text-green-600 hover:underline mt-4 inline-block">{t.marketLink} &rarr;</Link>
          </CardContent>
        </Card>

        {/* Events Quick View */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t.events}</CardTitle>
            <CalendarDays className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{t.eventsCount}</div>
            <p className="text-xs text-muted-foreground">{t.eventsDesc}</p>
            <Link to="/events" className="text-sm text-green-600 hover:underline mt-4 inline-block">{t.eventsLink} &rarr;</Link>
          </CardContent>
        </Card>

        {/* Water Guide Quick View */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t.water}</CardTitle>
            <Droplets className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{t.waterStatus}</div>
            <p className="text-xs text-muted-foreground">{t.waterDesc}</p>
            <Link to="/water" className="text-sm text-green-600 hover:underline mt-4 inline-block">{t.waterLink} &rarr;</Link>
          </CardContent>
        </Card>

        {/* Expert Chat Quick View */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t.expert}</CardTitle>
            <MessageSquare className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{t.expertName}</div>
            <p className="text-xs text-muted-foreground">{t.expertDesc}</p>
            <Link to="/expert" className="text-sm text-green-600 hover:underline mt-4 inline-block">{t.expertLink} &rarr;</Link>
          </CardContent>
        </Card>

        {/* Disease Detection Quick View */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t.disease}</CardTitle>
            <Bug className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{t.diseaseScanner}</div>
            <p className="text-xs text-muted-foreground">{t.diseaseDesc}</p>
            <Link to="/disease" className="text-sm text-green-600 hover:underline mt-4 inline-block">{t.diseaseLink} &rarr;</Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
