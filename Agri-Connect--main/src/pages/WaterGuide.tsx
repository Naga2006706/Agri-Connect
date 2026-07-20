import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Droplets, Info } from "lucide-react";
import { useLanguage } from "@/src/contexts/LanguageContext";

const translations: Record<string, any> = {
  "en-US": {
    title: "Crop Water Consumption Guide",
    subtitle: "Understand the water requirements for different crops to optimize irrigation.",
    whyImportant: "Why is this important?",
    whyImportantText: "Proper water management prevents waterlogging, reduces water waste, and ensures optimal crop yield. Always adjust watering based on local soil type and current weather conditions.",
    requirement: "Requirement",
    totalAmount: "Total Amount",
    criticalStage: "Critical Stage",
    levels: {
      High: "High",
      Medium: "Medium",
      Low: "Low"
    },
    crops: {
      "Rice": { name: "Rice", stage: "Flooded during vegetative stage" },
      "Sugarcane": { name: "Sugarcane", stage: "Continuous moisture needed" },
      "Cotton": { name: "Cotton", stage: "Crucial during flowering" },
      "Wheat": { name: "Wheat", stage: "Critical at crown root initiation" },
      "Maize (Corn)": { name: "Maize (Corn)", stage: "High demand during silking" },
      "Sorghum": { name: "Sorghum", stage: "Drought tolerant" },
      "Millet": { name: "Millet", stage: "Highly drought tolerant" }
    }
  },
  "hi-IN": {
    title: "फसल जल खपत गाइड",
    subtitle: "सिंचाई को अनुकूलित करने के लिए विभिन्न फसलों की पानी की आवश्यकताओं को समझें।",
    whyImportant: "यह क्यों महत्वपूर्ण है?",
    whyImportantText: "उचित जल प्रबंधन जलभराव को रोकता है, पानी की बर्बादी को कम करता है, और इष्टतम फसल उपज सुनिश्चित करता है। हमेशा स्थानीय मिट्टी के प्रकार और वर्तमान मौसम की स्थिति के आधार पर पानी देने को समायोजित करें।",
    requirement: "आवश्यकता",
    totalAmount: "कुल मात्रा",
    criticalStage: "महत्वपूर्ण चरण",
    levels: {
      High: "उच्च",
      Medium: "मध्यम",
      Low: "कम"
    },
    crops: {
      "Rice": { name: "चावल", stage: "वानस्पतिक अवस्था के दौरान बाढ़" },
      "Sugarcane": { name: "गन्ना", stage: "निरंतर नमी की आवश्यकता" },
      "Cotton": { name: "कपास", stage: "फूल आने के दौरान महत्वपूर्ण" },
      "Wheat": { name: "गेहूँ", stage: "क्राउन रूट दीक्षा पर महत्वपूर्ण" },
      "Maize (Corn)": { name: "मक्का", stage: "सिल्किंग के दौरान उच्च मांग" },
      "Sorghum": { name: "ज्वार", stage: "सूखा सहिष्णु" },
      "Millet": { name: "बाजरा", stage: "अत्यधिक सूखा सहिष्णु" }
    }
  },
  "te-IN": {
    title: "పంట నీటి వినియోగ మార్గదర్శి",
    subtitle: "నీటిపారుదలని ఆప్టిమైజ్ చేయడానికి వివిధ పంటల నీటి అవసరాలను అర్థం చేసుకోండి.",
    whyImportant: "ఇది ఎందుకు ముఖ్యం?",
    whyImportantText: "సరైన నీటి నిర్వహణ నీరు నిలిచిపోవడాన్ని నిరోధిస్తుంది, నీటి వృధాను తగ్గిస్తుంది మరియు సరైన పంట దిగుబడిని నిర్ధారిస్తుంది. స్థానిక నేల రకం మరియు ప్రస్తుత వాతావరణ పరిస్థితుల ఆధారంగా ఎల్లప్పుడూ నీరు త్రాగుట సర్దుబాటు చేయండి.",
    requirement: "అవసరం",
    totalAmount: "మొత్తం పరిమాణం",
    criticalStage: "క్లిష్టమైన దశ",
    levels: {
      High: "అధిక",
      Medium: "మధ్యస్థ",
      Low: "తక్కువ"
    },
    crops: {
      "Rice": { name: "వరి", stage: "ఏపుగా ఉండే దశలో వరదలు" },
      "Sugarcane": { name: "చెరకు", stage: "నిరంతర తేమ అవసరం" },
      "Cotton": { name: "పత్తి", stage: "పూత సమయంలో కీలకం" },
      "Wheat": { name: "గోధుమ", stage: "క్రౌన్ రూట్ ప్రారంభంలో కీలకం" },
      "Maize (Corn)": { name: "మొక్కజొన్న", stage: "సిల్కింగ్ సమయంలో అధిక డిమాండ్" },
      "Sorghum": { name: "జొన్న", stage: "కరువును తట్టుకోగలదు" },
      "Millet": { name: "సజ్జలు", stage: "అత్యంత కరువును తట్టుకోగలదు" }
    }
  },
  "ta-IN": {
    title: "பயிர் நீர் நுகர்வு வழிகாட்டி",
    subtitle: "நீர்ப்பாசனத்தை மேம்படுத்த பல்வேறு பயிர்களுக்கான நீர் தேவைகளைப் புரிந்து கொள்ளுங்கள்.",
    whyImportant: "இது ஏன் முக்கியமானது?",
    whyImportantText: "சரியான நீர் மேலாண்மை நீர் தேங்குவதைத் தடுக்கிறது, நீர் விரயத்தைக் குறைக்கிறது மற்றும் உகந்த பயிர் விளைச்சலை உறுதி செய்கிறது. உள்ளூர் மண் வகை மற்றும் தற்போதைய வானிலை நிலைமைகளின் அடிப்படையில் எப்போதும் நீர்ப்பாசனத்தை சரிசெய்யவும்.",
    requirement: "தேவை",
    totalAmount: "மொத்த அளவு",
    criticalStage: "முக்கியமான கட்டம்",
    levels: {
      High: "அதிக",
      Medium: "நடுத்தர",
      Low: "குறைந்த"
    },
    crops: {
      "Rice": { name: "அரிசி", stage: "தாவர வளர்ச்சியின் போது வெள்ளம்" },
      "Sugarcane": { name: "கரும்பு", stage: "தொடர்ச்சியான ஈரப்பதம் தேவை" },
      "Cotton": { name: "பருத்தி", stage: "பூக்கும் போது முக்கியமானது" },
      "Wheat": { name: "கோதுமை", stage: "கிரீடம் வேர் தொடக்கத்தில் முக்கியமானது" },
      "Maize (Corn)": { name: "மக்காச்சோளம்", stage: "சில்க்கிங் போது அதிக தேவை" },
      "Sorghum": { name: "சோளம்", stage: "வறட்சியைத் தாங்கும்" },
      "Millet": { name: "தினை", stage: "அதிக வறட்சியைத் தாங்கும்" }
    }
  },
  "mr-IN": {
    title: "पीक पाणी वापर मार्गदर्शक",
    subtitle: "सिंचन अनुकूल करण्यासाठी विविध पिकांच्या पाण्याचे प्रमाण समजून घ्या.",
    whyImportant: "हे का महत्त्वाचे आहे?",
    whyImportantText: "पाण्याचे योग्य व्यवस्थापन पाणी साचणे टाळते, पाण्याचा अपव्यय कमी करते आणि पिकाचे इष्टतम उत्पादन सुनिश्चित करते. स्थानिक मातीचा प्रकार आणि सध्याच्या हवामानाच्या परिस्थितीनुसार नेहमी पाणी देणे समायोजित करा.",
    requirement: "आवश्यकता",
    totalAmount: "एकूण रक्कम",
    criticalStage: "गंभीर टप्पा",
    levels: {
      High: "उच्च",
      Medium: "मध्यम",
      Low: "कमी"
    },
    crops: {
      "Rice": { name: "तांदूळ", stage: "वनस्पति अवस्थेत पूर" },
      "Sugarcane": { name: "ऊस", stage: "सतत ओलावा आवश्यक" },
      "Cotton": { name: "कापूस", stage: "फुलांच्या वेळी महत्त्वपूर्ण" },
      "Wheat": { name: "गहू", stage: "क्राउन रूट सुरू झाल्यावर गंभीर" },
      "Maize (Corn)": { name: "मका", stage: "सिल्किंग दरम्यान उच्च मागणी" },
      "Sorghum": { name: "ज्वारी", stage: "दुष्काळ सहनशील" },
      "Millet": { name: "बाजरी", stage: "अत्यंत दुष्काळ सहनशील" }
    }
  },
  "kn-IN": {
    title: "ಬೆಳೆ ನೀರಿನ ಬಳಕೆ ಮಾರ್ಗದರ್ಶಿ",
    subtitle: "ನೀರಾವರಿಯನ್ನು ಅತ್ಯುತ್ತಮವಾಗಿಸಲು ವಿವಿಧ ಬೆಳೆಗಳ ನೀರಿನ ಅವಶ್ಯಕತೆಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.",
    whyImportant: "ಇದು ಏಕೆ ಮುಖ್ಯ?",
    whyImportantText: "ಸರಿಯಾದ ನೀರಿನ ನಿರ್ವಹಣೆಯು ನೀರು ನಿಲ್ಲುವುದನ್ನು ತಡೆಯುತ್ತದೆ, ನೀರಿನ ವ್ಯರ್ಥವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ ಮತ್ತು ಅತ್ಯುತ್ತಮ ಬೆಳೆ ಇಳುವರಿಯನ್ನು ಖಾತ್ರಿಗೊಳಿಸುತ್ತದೆ. ಸ್ಥಳೀಯ ಮಣ್ಣಿನ ಪ್ರಕಾರ ಮತ್ತು ಪ್ರಸ್ತುತ ಹವಾಮಾನ ಪರಿಸ್ಥಿತಿಗಳ ಆಧಾರದ ಮೇಲೆ ಯಾವಾಗಲೂ ನೀರುಹಾಕುವುದನ್ನು ಹೊಂದಿಸಿ.",
    requirement: "ಅವಶ್ಯಕತೆ",
    totalAmount: "ಒಟ್ಟು ಮೊತ್ತ",
    criticalStage: "ನಿರ್ಣಾಯಕ ಹಂತ",
    levels: {
      High: "ಹೆಚ್ಚು",
      Medium: "ಮಧ್ಯಮ",
      Low: "ಕಡಿಮೆ"
    },
    crops: {
      "Rice": { name: "ಅಕ್ಕಿ", stage: "ಸಸ್ಯಕ ಹಂತದಲ್ಲಿ ಪ್ರವಾಹ" },
      "Sugarcane": { name: "ಕಬ್ಬು", stage: "ನಿರಂತರ ತೇವಾಂಶದ ಅಗತ್ಯವಿದೆ" },
      "Cotton": { name: "ಹತ್ತಿ", stage: "ಹೂಬಿಡುವ ಸಮಯದಲ್ಲಿ ನಿರ್ಣಾಯಕ" },
      "Wheat": { name: "ಗೋಧಿ", stage: "ಕ್ರೌನ್ ರೂಟ್ ಪ್ರಾರಂಭದಲ್ಲಿ ನಿರ್ಣಾಯಕ" },
      "Maize (Corn)": { name: "ಮೆಕ್ಕೆಜೋಳ", stage: "ಸಿಲ್ಕಿಂಗ್ ಸಮಯದಲ್ಲಿ ಹೆಚ್ಚಿನ ಬೇಡಿಕೆ" },
      "Sorghum": { name: "ಜೋಳ", stage: "ಬರ ಸಹಿಷ್ಣು" },
      "Millet": { name: "ರಾಗಿ", stage: "ಹೆಚ್ಚು ಬರ ಸಹಿಷ್ಣು" }
    }
  }
};

export default function WaterGuide() {
  const { language } = useLanguage();
  const t = translations[language] || translations["en-US"];
  const cropWaterNeeds = [
    { crop: "Rice", requirement: "High", amount: "900-2500 mm", stage: "Flooded during vegetative stage" },
    { crop: "Sugarcane", requirement: "High", amount: "1500-2500 mm", stage: "Continuous moisture needed" },
    { crop: "Cotton", requirement: "Medium", amount: "700-1300 mm", stage: "Crucial during flowering" },
    { crop: "Wheat", requirement: "Medium", amount: "450-650 mm", stage: "Critical at crown root initiation" },
    { crop: "Maize (Corn)", requirement: "Medium", amount: "500-800 mm", stage: "High demand during silking" },
    { crop: "Sorghum", requirement: "Low", amount: "450-650 mm", stage: "Drought tolerant" },
    { crop: "Millet", requirement: "Low", amount: "300-500 mm", stage: "Highly drought tolerant" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">{t.title}</h1>
        <p className="text-gray-500 mt-2">{t.subtitle}</p>
      </div>

      <Card className="bg-blue-50 border-blue-200">
        <CardHeader className="pb-2">
          <CardTitle className="text-blue-800 flex items-center">
            <Info className="w-5 h-5 mr-2" />
            {t.whyImportant}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-blue-900 text-sm">
          {t.whyImportantText}
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cropWaterNeeds.map((item, index) => {
          const cropData = t.crops[item.crop] || { name: item.crop, stage: item.stage };
          return (
          <Card key={index} className="overflow-hidden">
            <div className={`h-2 w-full ${
              item.requirement === 'High' ? 'bg-blue-600' : 
              item.requirement === 'Medium' ? 'bg-blue-400' : 'bg-blue-200'
            }`} />
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {cropData.name}
                <Droplets className={`w-5 h-5 ${
                  item.requirement === 'High' ? 'text-blue-600' : 
                  item.requirement === 'Medium' ? 'text-blue-400' : 'text-blue-200'
                }`} />
              </CardTitle>
              <CardDescription>{t.requirement}: {t.levels[item.requirement] || item.requirement}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">{t.totalAmount}:</span>
                <span className="font-medium">{item.amount}</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-500 block mb-1">{t.criticalStage}:</span>
                <span className="font-medium text-gray-800">{cropData.stage}</span>
              </div>
            </CardContent>
          </Card>
        )})}
      </div>
    </div>
  );
}
