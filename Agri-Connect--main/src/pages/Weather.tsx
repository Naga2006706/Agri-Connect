import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Cloud, CloudDrizzle, CloudLightning, CloudRain, CloudSun, Droplets, Sun, Wind } from "lucide-react";
import { useLanguage } from "@/src/contexts/LanguageContext";

const translations: Record<string, any> = {
  "en-US": {
    title: "Weather & Forecast",
    subtitle: "Real-time weather updates to plan your farming activities.",
    partlyCloudy: "Partly Cloudy",
    humidity: "Humidity",
    wind: "Wind",
    farmingAdvice: "Farming Advice",
    basedOnWeather: "Based on current weather",
    goodTimeFor: "Good time for:",
    goodTimeDesc: "Spraying pesticides (low wind, no immediate rain).",
    caution: "Caution:",
    cautionDesc: "Heavy rain expected on Wednesday. Delay harvesting if possible.",
    sevenDayForecast: "7-Day Forecast",
    days: ["Today", "Tomorrow", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    desc: ["Partly Cloudy", "Light Rain", "Thunderstorms", "Sunny", "Clear", "Cloudy", "Drizzle"]
  },
  "hi-IN": {
    title: "मौसम और पूर्वानुमान",
    subtitle: "अपनी खेती की गतिविधियों की योजना बनाने के लिए रीयल-टाइम मौसम अपडेट।",
    partlyCloudy: "आंशिक रूप से बादल",
    humidity: "आर्द्रता",
    wind: "हवा",
    farmingAdvice: "खेती की सलाह",
    basedOnWeather: "वर्तमान मौसम के आधार पर",
    goodTimeFor: "इसके लिए अच्छा समय:",
    goodTimeDesc: "कीटनाशकों का छिड़काव (कम हवा, तुरंत बारिश नहीं)।",
    caution: "सावधानी:",
    cautionDesc: "बुधवार को भारी बारिश की उम्मीद है। यदि संभव हो तो कटाई में देरी करें।",
    sevenDayForecast: "7-दिवसीय पूर्वानुमान",
    days: ["आज", "कल", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार", "रविवार"],
    desc: ["आंशिक रूप से बादल", "हल्की बारिश", "गरज के साथ छींटे", "धूप", "साफ", "बादल", "बूंदाबांदी"]
  },
  "te-IN": {
    title: "వాతావరణం & సూచన",
    subtitle: "మీ వ్యవసాయ కార్యకలాపాలను ప్లాన్ చేయడానికి రియల్ టైమ్ వాతావరణ నవీకరణలు.",
    partlyCloudy: "పాక్షికంగా మేఘావృతం",
    humidity: "తేమ",
    wind: "గాలి",
    farmingAdvice: "వ్యవసాయ సలహా",
    basedOnWeather: "ప్రస్తుత వాతావరణం ఆధారంగా",
    goodTimeFor: "దీనికి మంచి సమయం:",
    goodTimeDesc: "పురుగుమందులు పిచికారీ చేయడం (తక్కువ గాలి, తక్షణ వర్షం లేదు).",
    caution: "జాగ్రత్త:",
    cautionDesc: "బుధవారం భారీ వర్షం కురిసే అవకాశం ఉంది. వీలైతే కోతను వాయిదా వేయండి.",
    sevenDayForecast: "7-రోజుల సూచన",
    days: ["ఈ రోజు", "రేపు", "బుధవారం", "గురువారం", "శుక్రవారం", "శనివారం", "ఆదివారం"],
    desc: ["పాక్షికంగా మేఘావృతం", "తేలికపాటి వర్షం", "ఉరుములతో కూడిన వర్షం", "ఎండ", "స్పష్టమైన", "మేఘావృతం", "తుంపర"]
  },
  "ta-IN": {
    title: "வானிலை மற்றும் முன்னறிவிப்பு",
    subtitle: "உங்கள் விவசாய நடவடிக்கைகளைத் திட்டமிட நிகழ்நேர வானிலை புதுப்பிப்புகள்.",
    partlyCloudy: "பகுதி மேகமூட்டம்",
    humidity: "ஈரப்பதம்",
    wind: "காற்று",
    farmingAdvice: "விவசாய ஆலோசனை",
    basedOnWeather: "தற்போதைய வானிலையின் அடிப்படையில்",
    goodTimeFor: "இதற்கு நல்ல நேரம்:",
    goodTimeDesc: "பூச்சிக்கொல்லிகளை தெளித்தல் (குறைந்த காற்று, உடனடி மழை இல்லை).",
    caution: "எச்சரிக்கை:",
    cautionDesc: "புதன்கிழமை பலத்த மழை பெய்யும் என எதிர்பார்க்கப்படுகிறது. முடிந்தால் அறுவடையை தாமதப்படுத்துங்கள்.",
    sevenDayForecast: "7-நாள் முன்னறிவிப்பு",
    days: ["இன்று", "நாளை", "புதன்கிழமை", "வியாழக்கிழமை", "வெள்ளிக்கிழமை", "சனிக்கிழமை", "ஞாயிற்றுக்கிழமை"],
    desc: ["பகுதி மேகமூட்டம்", "லேசான மழை", "இடியுடன் கூடிய மழை", "வெயில்", "தெளிவான", "மேகமூட்டம்", "தூறல்"]
  },
  "mr-IN": {
    title: "हवामान आणि अंदाज",
    subtitle: "तुमच्या शेतीच्या कामांचे नियोजन करण्यासाठी रिअल-टाइम हवामान अद्यतने.",
    partlyCloudy: "अंशतः ढगाळ",
    humidity: "आर्द्रता",
    wind: "वारा",
    farmingAdvice: "शेतीचा सल्ला",
    basedOnWeather: "सध्याच्या हवामानावर आधारित",
    goodTimeFor: "यासाठी चांगली वेळ:",
    goodTimeDesc: "कीटकनाशकांची फवारणी (कमी वारा, लगेच पाऊस नाही).",
    caution: "सावधानता:",
    cautionDesc: "बुधवारी मुसळधार पावसाची शक्यता आहे. शक्य असल्यास कापणी पुढे ढकला.",
    sevenDayForecast: "7-दिवसांचा अंदाज",
    days: ["आज", "उद्या", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार", "रविवार"],
    desc: ["अंशतः ढगाळ", "हलका पाऊस", "वादळ", "सूर्यप्रकाश", "स्पष्ट", "ढगाळ", "रिमझिम"]
  },
  "kn-IN": {
    title: "ಹವಾಮಾನ ಮತ್ತು ಮುನ್ಸೂಚನೆ",
    subtitle: "ನಿಮ್ಮ ಕೃಷಿ ಚಟುವಟಿಕೆಗಳನ್ನು ಯೋಜಿಸಲು ನೈಜ-ಸಮಯದ ಹವಾಮಾನ ನವೀಕರಣಗಳು.",
    partlyCloudy: "ಭಾಗಶಃ ಮೋಡ",
    humidity: "ಆರ್ದ್ರತೆ",
    wind: "ಗಾಳಿ",
    farmingAdvice: "ಕೃಷಿ ಸಲಹೆ",
    basedOnWeather: "ಪ್ರಸ್ತುತ ಹವಾಮಾನದ ಆಧಾರದ ಮೇಲೆ",
    goodTimeFor: "ಇದಕ್ಕೆ ಉತ್ತಮ ಸಮಯ:",
    goodTimeDesc: "ಕೀಟನಾಶಕಗಳನ್ನು ಸಿಂಪಡಿಸುವುದು (ಕಡಿಮೆ ಗಾಳಿ, ತಕ್ಷಣದ ಮಳೆಯಿಲ್ಲ).",
    caution: "ಎಚ್ಚರಿಕೆ:",
    cautionDesc: "ಬುಧವಾರ ಭಾರಿ ಮಳೆಯಾಗುವ ನಿರೀಕ್ಷೆಯಿದೆ. ಸಾಧ್ಯವಾದರೆ ಕೊಯ್ಲು ವಿಳಂಬಗೊಳಿಸಿ.",
    sevenDayForecast: "7-ದಿನಗಳ ಮುನ್ಸೂಚನೆ",
    days: ["ಇಂದು", "ನಾಳೆ", "ಬುಧವಾರ", "ಗುರುವಾರ", "ಶುಕ್ರವಾರ", "ಶನಿವಾರ", "ಭಾನುವಾರ"],
    desc: ["ಭಾಗಶಃ ಮೋಡ", "ಹಗುರವಾದ ಮಳೆ", "ಗುಡುಗು ಸಹಿತ ಮಳೆ", "ಬಿಸಿಲು", "ಸ್ಪಷ್ಟ", "ಮೋಡ", "ತುಂತುರು ಮಳೆ"]
  }
};

export default function Weather() {
  const { language } = useLanguage();
  const t = translations[language] || translations["en-US"];

  const forecast = [
    { day: t.days[0], temp: "24°C", icon: CloudSun, desc: t.desc[0], humidity: "65%", wind: "12 km/h" },
    { day: t.days[1], temp: "22°C", icon: CloudRain, desc: t.desc[1], humidity: "75%", wind: "15 km/h" },
    { day: t.days[2], temp: "20°C", icon: CloudLightning, desc: t.desc[2], humidity: "80%", wind: "20 km/h" },
    { day: t.days[3], temp: "25°C", icon: Sun, desc: t.desc[3], humidity: "55%", wind: "10 km/h" },
    { day: t.days[4], temp: "26°C", icon: Sun, desc: t.desc[4], humidity: "50%", wind: "8 km/h" },
    { day: t.days[5], temp: "23°C", icon: Cloud, desc: t.desc[5], humidity: "60%", wind: "14 km/h" },
    { day: t.days[6], temp: "21°C", icon: CloudDrizzle, desc: t.desc[6], humidity: "70%", wind: "11 km/h" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">{t.title}</h1>
        <p className="text-gray-500 mt-2">{t.subtitle}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2 bg-gradient-to-br from-blue-500 to-blue-700 text-white border-none">
          <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-4xl font-bold">24°C</h2>
              <p className="text-xl font-medium opacity-90">{t.partlyCloudy}</p>
              <div className="flex items-center justify-center md:justify-start space-x-4 text-sm opacity-80 pt-4">
                <span className="flex items-center"><Droplets className="w-4 h-4 mr-1" /> 65% {t.humidity}</span>
                <span className="flex items-center"><Wind className="w-4 h-4 mr-1" /> 12 km/h {t.wind}</span>
              </div>
            </div>
            <CloudSun className="w-32 h-32 mt-6 md:mt-0 opacity-90" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.farmingAdvice}</CardTitle>
            <CardDescription>{t.basedOnWeather}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-green-50 text-green-800 rounded-lg text-sm">
              <strong>{t.goodTimeFor}</strong> {t.goodTimeDesc}
            </div>
            <div className="p-3 bg-yellow-50 text-yellow-800 rounded-lg text-sm">
              <strong>{t.caution}</strong> {t.cautionDesc}
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-4">{t.sevenDayForecast}</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
        {forecast.map((day, i) => (
          <Card key={i} className="text-center hover:bg-gray-50 transition-colors">
            <CardContent className="p-4 flex flex-col items-center space-y-3">
              <span className="font-medium text-sm text-gray-500">{day.day}</span>
              <day.icon className="w-10 h-10 text-blue-500" />
              <span className="text-2xl font-bold">{day.temp}</span>
              <span className="text-xs text-gray-500">{day.desc}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
