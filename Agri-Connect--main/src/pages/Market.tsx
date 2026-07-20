import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Search, TrendingDown, TrendingUp, LineChart as LineChartIcon } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const translations: Record<string, any> = {
  "en-US": {
    title: "Current Market Prices",
    subtitle: "Stay updated with the latest agricultural commodity prices.",
    searchPlaceholder: "Search crops...",
    updated: "Updated",
    fromLastWeek: "from last week",
    noCropsFound: "No crops found matching",
    crops: {
      Wheat: "Wheat",
      Corn: "Corn",
      Soybeans: "Soybeans",
      Rice: "Rice",
      Cotton: "Cotton",
      Coffee: "Coffee",
      Sugar: "Sugar",
      Cocoa: "Cocoa"
    },
    units: {
      "per ton": "per ton",
      "per cwt": "per cwt",
      "per lb": "per lb"
    },
    dates: {
      Today: "Today",
      Yesterday: "Yesterday"
    },
    priceTrend: "Price Trend (6 Months)",
    selectCropToView: "Select a crop card below to view its price trend",
    price: "Price"
  },
  "hi-IN": {
    title: "वर्तमान बाजार भाव",
    subtitle: "नवीनतम कृषि वस्तुओं की कीमतों के साथ अपडेट रहें।",
    searchPlaceholder: "फसलें खोजें...",
    updated: "अपडेट किया गया",
    fromLastWeek: "पिछले सप्ताह से",
    noCropsFound: "खोज से मेल खाने वाली कोई फसल नहीं मिली",
    crops: {
      Wheat: "गेहूँ",
      Corn: "मक्का",
      Soybeans: "सोयाबीन",
      Rice: "चावल",
      Cotton: "कपास",
      Coffee: "कॉफी",
      Sugar: "चीनी",
      Cocoa: "कोको"
    },
    units: {
      "per ton": "प्रति टन",
      "per cwt": "प्रति क्विंटल",
      "per lb": "प्रति पाउंड"
    },
    dates: {
      Today: "आज",
      Yesterday: "कल"
    },
    priceTrend: "मूल्य प्रवृत्ति (6 महीने)",
    selectCropToView: "इसकी मूल्य प्रवृत्ति देखने के लिए नीचे एक फसल कार्ड चुनें",
    price: "मूल्य"
  },
  "te-IN": {
    title: "ప్రస్తుత మార్కెట్ ధరలు",
    subtitle: "తాజా వ్యవసాయ వస్తువుల ధరలతో అప్‌డేట్‌గా ఉండండి.",
    searchPlaceholder: "పంటలను శోధించండి...",
    updated: "నవీకరించబడింది",
    fromLastWeek: "గత వారం నుండి",
    noCropsFound: "శోధనకు సరిపోలే పంటలు ఏవీ కనుగొనబడలేదు",
    crops: {
      Wheat: "గోధుమ",
      Corn: "మొక్కజొన్న",
      Soybeans: "సోయాబీన్స్",
      Rice: "బియ్యం",
      Cotton: "పత్తి",
      Coffee: "కాఫీ",
      Sugar: "చక్కెర",
      Cocoa: "కోకో"
    },
    units: {
      "per ton": "టన్నుకు",
      "per cwt": "క్వింటాల్‌కు",
      "per lb": "పౌండ్‌కు"
    },
    dates: {
      Today: "ఈ రోజు",
      Yesterday: "నిన్న"
    },
    priceTrend: "ధర ట్రెండ్ (6 నెలలు)",
    selectCropToView: "దాని ధర ట్రెండ్‌ను వీక్షించడానికి దిగువన ఉన్న పంట కార్డును ఎంచుకోండి",
    price: "ధర"
  },
  "ta-IN": {
    title: "தற்போதைய சந்தை விலைகள்",
    subtitle: "சமீபத்திய விவசாய பொருட்களின் விலைகளுடன் புதுப்பித்த நிலையில் இருங்கள்.",
    searchPlaceholder: "பயிர்களைத் தேடுங்கள்...",
    updated: "புதுப்பிக்கப்பட்டது",
    fromLastWeek: "கடந்த வாரத்திலிருந்து",
    noCropsFound: "தேடலுக்குப் பொருந்தும் பயிர்கள் எதுவும் காணப்படவில்லை",
    crops: {
      Wheat: "கோதுமை",
      Corn: "சோளம்",
      Soybeans: "சோயாபீன்ஸ்",
      Rice: "அரிசி",
      Cotton: "பருத்தி",
      Coffee: "காபி",
      Sugar: "சர்க்கரை",
      Cocoa: "கோகோ"
    },
    units: {
      "per ton": "டன்னுக்கு",
      "per cwt": "குவிண்டாலுக்கு",
      "per lb": "பவுண்டுக்கு"
    },
    dates: {
      Today: "இன்று",
      Yesterday: "நேற்று"
    },
    priceTrend: "விலை போக்கு (6 மாதங்கள்)",
    selectCropToView: "அதன் விலை போக்கைக் காண கீழே உள்ள பயிர் அட்டையைத் தேர்ந்தெடுக்கவும்",
    price: "விலை"
  },
  "mr-IN": {
    title: "सध्याचे बाजार भाव",
    subtitle: "नवीनतम कृषी वस्तूंच्या किमतींसह अद्ययावित रहा.",
    searchPlaceholder: "पिके शोधा...",
    updated: "अद्यतनित केले",
    fromLastWeek: "गेल्या आठवड्यापासून",
    noCropsFound: "शोधाशी जुळणारे कोणतेही पीक आढळले नाही",
    crops: {
      Wheat: "गहू",
      Corn: "मका",
      Soybeans: "सोयाबीन",
      Rice: "तांदूळ",
      Cotton: "कापूस",
      Coffee: "कॉफी",
      Sugar: "साखर",
      Cocoa: "कोको"
    },
    units: {
      "per ton": "प्रति टन",
      "per cwt": "प्रति क्विंटल",
      "per lb": "प्रति पौंड"
    },
    dates: {
      Today: "आज",
      Yesterday: "काल"
    },
    priceTrend: "किंमत कल (6 महिने)",
    selectCropToView: "त्याची किंमत कल पाहण्यासाठी खालील पीक कार्ड निवडा",
    price: "किंमत"
  },
  "kn-IN": {
    title: "ಪ್ರಸ್ತುತ ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು",
    subtitle: "ಇತ್ತೀಚಿನ ಕೃಷಿ ಸರಕುಗಳ ಬೆಲೆಗಳೊಂದಿಗೆ ನವೀಕೃತವಾಗಿರಿ.",
    searchPlaceholder: "ಬೆಳೆಗಳನ್ನು ಹುಡುಕಿ...",
    updated: "ನವೀಕರಿಸಲಾಗಿದೆ",
    fromLastWeek: "ಕಳೆದ ವಾರದಿಂದ",
    noCropsFound: "ಹುಡುಕಾಟಕ್ಕೆ ಹೊಂದಿಕೆಯಾಗುವ ಯಾವುದೇ ಬೆಳೆಗಳು ಕಂಡುಬಂದಿಲ್ಲ",
    crops: {
      Wheat: "ಗೋಧಿ",
      Corn: "ಜೋಳ",
      Soybeans: "ಸೋಯಾಬೀನ್",
      Rice: "ಅಕ್ಕಿ",
      Cotton: "ಹತ್ತಿ",
      Coffee: "ಕಾಫಿ",
      Sugar: "ಸಕ್ಕರೆ",
      Cocoa: "ಕೊಕೊ"
    },
    units: {
      "per ton": "ಟನ್‌ಗೆ",
      "per cwt": "ಕ್ವಿಂಟಾಲ್‌ಗೆ",
      "per lb": "ಪೌಂಡ್‌ಗೆ"
    },
    dates: {
      Today: "ಇಂದು",
      Yesterday: "ನಿನ್ನೆ"
    },
    priceTrend: "ಬೆಲೆ ಪ್ರವೃತ್ತಿ (6 ತಿಂಗಳುಗಳು)",
    selectCropToView: "ಅದರ ಬೆಲೆ ಪ್ರವೃತ್ತಿಯನ್ನು ವೀಕ್ಷಿಸಲು ಕೆಳಗಿನ ಬೆಳೆ ಕಾರ್ಡ್ ಆಯ್ಕೆಮಾಡಿ",
    price: "ಬೆಲೆ"
  }
};

export default function Market() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCropId, setSelectedCropId] = useState<number>(1);
  const { language } = useLanguage();
  const t = translations[language] || translations["en-US"];

  const marketData = [
    { id: 1, crop: "Wheat", price: "₹21,000", numericPrice: 21000, unit: "per ton", trend: "up", change: "+2.5%", date: "Today", history: [{ month: "Jan", price: 19000 }, { month: "Feb", price: 19500 }, { month: "Mar", price: 19200 }, { month: "Apr", price: 20000 }, { month: "May", price: 20500 }, { month: "Jun", price: 21000 }] },
    { id: 2, crop: "Corn", price: "₹15,000", numericPrice: 15000, unit: "per ton", trend: "down", change: "-1.2%", date: "Today", history: [{ month: "Jan", price: 16000 }, { month: "Feb", price: 16200 }, { month: "Mar", price: 15800 }, { month: "Apr", price: 15500 }, { month: "May", price: 15200 }, { month: "Jun", price: 15000 }] },
    { id: 3, crop: "Soybeans", price: "₹35,000", numericPrice: 35000, unit: "per ton", trend: "up", change: "+0.8%", date: "Today", history: [{ month: "Jan", price: 32000 }, { month: "Feb", price: 33000 }, { month: "Mar", price: 32500 }, { month: "Apr", price: 34000 }, { month: "May", price: 34500 }, { month: "Jun", price: 35000 }] },
    { id: 4, crop: "Rice", price: "₹26,000", numericPrice: 26000, unit: "per ton", trend: "up", change: "+1.5%", date: "Yesterday", history: [{ month: "Jan", price: 24000 }, { month: "Feb", price: 24500 }, { month: "Mar", price: 25000 }, { month: "Apr", price: 24800 }, { month: "May", price: 25500 }, { month: "Jun", price: 26000 }] },
    { id: 5, crop: "Cotton", price: "₹7,000", numericPrice: 7000, unit: "per cwt", trend: "down", change: "-0.5%", date: "Today", history: [{ month: "Jan", price: 7500 }, { month: "Feb", price: 7400 }, { month: "Mar", price: 7600 }, { month: "Apr", price: 7200 }, { month: "May", price: 7100 }, { month: "Jun", price: 7000 }] },
    { id: 6, crop: "Coffee", price: "₹12,500", numericPrice: 12500, unit: "per lb", trend: "up", change: "+3.2%", date: "Yesterday", history: [{ month: "Jan", price: 10000 }, { month: "Feb", price: 10500 }, { month: "Mar", price: 11000 }, { month: "Apr", price: 11500 }, { month: "May", price: 12000 }, { month: "Jun", price: 12500 }] },
    { id: 7, crop: "Sugar", price: "₹1,800", numericPrice: 1800, unit: "per lb", trend: "up", change: "+0.1%", date: "Today", history: [{ month: "Jan", price: 1700 }, { month: "Feb", price: 1720 }, { month: "Mar", price: 1750 }, { month: "Apr", price: 1780 }, { month: "May", price: 1790 }, { month: "Jun", price: 1800 }] },
    { id: 8, crop: "Cocoa", price: "₹230,000", numericPrice: 230000, unit: "per ton", trend: "down", change: "-2.1%", date: "Today", history: [{ month: "Jan", price: 250000 }, { month: "Feb", price: 245000 }, { month: "Mar", price: 240000 }, { month: "Apr", price: 238000 }, { month: "May", price: 235000 }, { month: "Jun", price: 230000 }] },
  ];

  const filteredData = marketData.filter((item) => {
    const cropName = t.crops[item.crop] || item.crop;
    return cropName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const selectedCropData = marketData.find(c => c.id === selectedCropId) || marketData[0];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">{t.title}</h1>
        <p className="text-gray-500 mt-2">{t.subtitle}</p>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder={t.searchPlaceholder}
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Chart Section */}
      <Card className="border-green-100 shadow-sm">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl flex items-center text-gray-800">
                <LineChartIcon className="w-5 h-5 mr-2 text-green-600" />
                {t.priceTrend}: {t.crops[selectedCropData.crop] || selectedCropData.crop}
              </CardTitle>
              <CardDescription className="mt-1">{t.selectCropToView}</CardDescription>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">{selectedCropData.price}</div>
              <div className={`text-sm font-medium ${selectedCropData.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                {selectedCropData.change} {t.fromLastWeek}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={selectedCropData.history} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis 
                  dataKey="month" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#6b7280', fontSize: 12 }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#6b7280', fontSize: 12 }}
                  tickFormatter={(value) => `₹${value.toLocaleString()}`}
                  width={80}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  formatter={(value: number) => [`₹${value.toLocaleString()}`, t.price]}
                  labelStyle={{ color: '#374151', fontWeight: 'bold', marginBottom: '4px' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="price" 
                  stroke="#16a34a" 
                  strokeWidth={3}
                  dot={{ r: 4, fill: '#16a34a', strokeWidth: 2, stroke: '#fff' }}
                  activeDot={{ r: 6, fill: '#16a34a', strokeWidth: 0 }}
                  animationDuration={1000}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredData.map((item) => (
          <Card 
            key={item.id} 
            className={`hover:shadow-md transition-all cursor-pointer ${selectedCropId === item.id ? 'ring-2 ring-green-500 border-green-500' : ''}`}
            onClick={() => setSelectedCropId(item.id)}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex justify-between items-center">
                {t.crops[item.crop] || item.crop}
                {item.trend === "up" ? (
                  <TrendingUp className="h-5 w-5 text-green-500" />
                ) : (
                  <TrendingDown className="h-5 w-5 text-red-500" />
                )}
              </CardTitle>
              <CardDescription>{t.updated}: {t.dates[item.date] || item.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold text-gray-900">{item.price}</span>
                <span className="text-sm text-gray-500">{t.units[item.unit] || item.unit}</span>
              </div>
              <p
                className={`text-sm mt-2 font-medium ${
                  item.trend === "up" ? "text-green-600" : "text-red-600"
                }`}
              >
                {item.change} {t.fromLastWeek}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredData.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          {t.noCropsFound} "{searchTerm}".
        </div>
      )}
    </div>
  );
}
