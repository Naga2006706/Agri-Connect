import { Link, Outlet, useLocation } from "react-router-dom";
import { CloudSun, TrendingUp, CalendarDays, Droplets, MessageSquare, Menu, X, Leaf, Bug, Globe, Lightbulb, Landmark, FlaskConical } from "lucide-react";
import { useState } from "react";
import { cn } from "@/src/lib/utils";
import { useLanguage, languages } from "@/src/contexts/LanguageContext";

const translations: Record<string, any> = {
  "en-US": {
    dashboard: "Dashboard",
    disease: "Disease Detection",
    weather: "Weather",
    market: "Market Prices",
    events: "Events",
    water: "Water Guide",
    challenges: "Challenges",
    schemes: "Govt Schemes",
    pesticides: "Pesticides",
    expert: "Expert Chat",
    slogan: "Empowering Farmers with Tech"
  },
  "hi-IN": {
    dashboard: "डैशबोर्ड",
    disease: "फसल रोग पहचान",
    weather: "मौसम",
    market: "बाजार भाव",
    events: "आयोजन",
    water: "जल मार्गदर्शिका",
    challenges: "चुनौतियां",
    schemes: "सरकारी योजनाएं",
    pesticides: "कीटनाशक",
    expert: "विशेषज्ञ चैट",
    slogan: "किसानों को तकनीक से सशक्त बनाना"
  },
  "te-IN": {
    dashboard: "డాష్‌బోర్డ్",
    disease: "పంట వ్యాధి గుర్తింపు",
    weather: "వాతావరణం",
    market: "మార్కెట్ ధరలు",
    events: "కార్యక్రమాలు",
    water: "నీటి మార్గదర్శి",
    challenges: "సమస్యలు",
    schemes: "ప్రభుత్వ పథకాలు",
    pesticides: "పురుగుమందులు",
    expert: "నిపుణుల చాట్",
    slogan: "రైతులను సాంకేతికతతో శక్తివంతం చేయడం"
  },
  "ta-IN": {
    dashboard: "டாஷ்போர்டு",
    disease: "பயிர் நோய் கண்டறிதல்",
    weather: "வானிலை",
    market: "சந்தை விலைகள்",
    events: "நிகழ்வுகள்",
    water: "நீர் வழிகாட்டி",
    challenges: "சவால்கள்",
    schemes: "அரசு திட்டங்கள்",
    pesticides: "பூச்சிக்கொல்லிகள்",
    expert: "நிபுணர் அரட்டை",
    slogan: "தொழில்நுட்பத்தால் விவசாயிகளை மேம்படுத்துதல்"
  },
  "mr-IN": {
    dashboard: "डॅशबोर्ड",
    disease: "पीक रोग ओळख",
    weather: "हवामान",
    market: "बाजार भाव",
    events: "कार्यक्रम",
    water: "पाणी मार्गदर्शक",
    challenges: "आव्हाने",
    schemes: "सरकारी योजना",
    pesticides: "कीटकनाशके",
    expert: "तज्ञ चॅट",
    slogan: "शेतकऱ्यांना तंत्रज्ञानाने सक्षम करणे"
  },
  "kn-IN": {
    dashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    disease: "ಬೆಳೆ ರೋಗ ಪತ್ತೆ",
    weather: "ಹವಾಮಾನ",
    market: "ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು",
    events: "ಕಾರ್ಯಕ್ರಮಗಳು",
    water: "ನೀರಿನ ಮಾರ್ಗದರ್ಶಿ",
    challenges: "ಸವಾಲುಗಳು",
    schemes: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
    pesticides: "ಕೀಟನಾಶಕಗಳು",
    expert: "ತಜ್ಞರ ಚಾಟ್",
    slogan: "ತಂತ್ರಜ್ಞಾನದೊಂದಿಗೆ ರೈತರನ್ನು ಸಬಲೀಕರಣಗೊಳಿಸುವುದು"
  }
};

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const t = translations[language] || translations["en-US"];

  const navItems = [
    { name: t.dashboard, href: "/", icon: Leaf },
    { name: t.disease, href: "/disease", icon: Bug },
    { name: t.weather, href: "/weather", icon: CloudSun },
    { name: t.market, href: "/market", icon: TrendingUp },
    { name: t.events, href: "/events", icon: CalendarDays },
    { name: t.water, href: "/water", icon: Droplets },
    { name: t.challenges, href: "/challenges", icon: Lightbulb },
    { name: t.schemes, href: "/schemes", icon: Landmark },
    { name: t.pesticides, href: "/pesticides", icon: FlaskConical },
    { name: t.expert, href: "/expert", icon: MessageSquare },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar for desktop */}
      <aside className="hidden md:flex w-64 flex-col bg-green-800 text-white">
        <div className="p-6 flex items-center space-x-3">
          <Leaf className="h-8 w-8 text-green-300" />
          <span className="text-2xl font-bold tracking-tight">AgriConnect</span>
        </div>
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors",
                  isActive
                    ? "bg-green-700 text-white font-medium shadow-sm"
                    : "text-green-100 hover:bg-green-700/50 hover:text-white"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-green-700">
          <p className="text-xs text-green-300 text-center">
            {t.slogan}
          </p>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="flex flex-col flex-1 w-full">
        <header className="md:hidden flex items-center justify-between p-4 bg-green-800 text-white shadow-md z-20">
          <div className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-green-300" />
            <span className="text-xl font-bold">AgriConnect</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1 text-green-300">
              <Globe className="h-4 w-4" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent text-white text-sm border-none focus:ring-0 cursor-pointer outline-none p-0"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code} className="bg-green-800 text-white">
                    {lang.code.split('-')[0].toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </header>

        {/* Desktop Header (Top Right) */}
        <header className="hidden md:flex items-center justify-end p-4 bg-white border-b border-gray-200 z-10">
          <div className="flex items-center space-x-2 bg-green-50 px-3 py-2 rounded-lg border border-green-100">
            <Globe className="h-4 w-4 text-green-600" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-transparent text-green-800 text-sm font-medium border-none focus:ring-0 cursor-pointer outline-none"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
        </header>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-green-800 text-white z-10 shadow-lg border-t border-green-700">
            <nav className="px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors",
                      isActive
                        ? "bg-green-700 text-white font-medium"
                        : "text-green-100 hover:bg-green-700/50"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
