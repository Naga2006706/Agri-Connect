import { useState } from "react";
import { Card, CardContent } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Search, Shield, Leaf, FlaskConical } from "lucide-react";
import { useLanguage } from "@/src/contexts/LanguageContext";

const translations: Record<string, any> = {
  "en-US": {
    title: "Recommended Pesticides",
    subtitle: "Find effective chemical and organic treatments for common crop pests and diseases.",
    searchPlaceholder: "Search by crop or pest...",
    chemical: "Chemical Pesticides",
    organic: "Organic Alternatives",
    usage: "Usage Instructions",
    noResults: "No recommendations found for",
    data: [
      { crop: "Cotton", pest: "Bollworm", chemical: "Spinosad, Chlorantraniliprole", organic: "Neem Oil, Bacillus thuringiensis (Bt)", usage: "Spray at early stage of infestation. Repeat after 10-15 days if needed." },
      { crop: "Rice", pest: "Stem Borer", chemical: "Cartap Hydrochloride, Chlorpyrifos", organic: "Trichogramma japonicum (Biocontrol), Neem Seed Kernel Extract", usage: "Apply when dead hearts are noticed. Maintain proper water level." },
      { crop: "Wheat", pest: "Aphids", chemical: "Imidacloprid, Thiamethoxam", organic: "Garlic extract, Ladybird beetles (natural predators)", usage: "Spray when pest population crosses economic threshold level." },
      { crop: "Tomato", pest: "Fruit Borer", chemical: "Indoxacarb, Flubendiamide", organic: "Neem Oil, Marigold as trap crop", usage: "Apply at flowering and fruit setting stage." },
      { crop: "Potato", pest: "Late Blight", chemical: "Mancozeb, Metalaxyl", organic: "Copper-based fungicides, Trichoderma viride", usage: "Preventive spray before disease appearance, especially during cloudy weather." },
      { crop: "Soybean", pest: "Whitefly", chemical: "Triazophos, Acetamiprid", organic: "Yellow sticky traps, Neem oil spray", usage: "Spray early morning or late evening." },
    ]
  },
  "hi-IN": {
    title: "अनुशंसित कीटनाशक",
    subtitle: "सामान्य फसल कीटों और बीमारियों के लिए प्रभावी रासायनिक और जैविक उपचार खोजें।",
    searchPlaceholder: "फसल या कीट से खोजें...",
    chemical: "रासायनिक कीटनाशक",
    organic: "जैविक विकल्प",
    usage: "उपयोग के निर्देश",
    noResults: "इसके लिए कोई सुझाव नहीं मिला",
    data: [
      { crop: "कपास", pest: "बोलवर्म (सुंडी)", chemical: "स्पिनोसैड, क्लोरेंट्रानिलिप्रोल", organic: "नीम का तेल, बैसिलस थुरिंजिएन्सिस (Bt)", usage: "संक्रमण के शुरुआती चरण में स्प्रे करें। आवश्यकता होने पर 10-15 दिनों के बाद दोहराएं।" },
      { crop: "चावल", pest: "तना छेदक", chemical: "कार्टाप हाइड्रोक्लोराइड, क्लोरपाइरीफोस", organic: "ट्राइकोग्रामा जपोनिकम, नीम के बीज का अर्क", usage: "जब मृत तने दिखाई दें तब प्रयोग करें। उचित जल स्तर बनाए रखें।" },
      { crop: "गेहूँ", pest: "एफिड्स (माहू)", chemical: "इमिडाक्लोप्रिड, थियामेथोक्साम", organic: "लहसुन का अर्क, लेडीबर्ड बीटल", usage: "जब कीटों की संख्या आर्थिक सीमा पार कर जाए तब स्प्रे करें।" },
      { crop: "टमाटर", pest: "फल छेदक", chemical: "इंडोक्साकार्ब, फ्लुबेंडियामाइड", organic: "नीम का तेल, गेंदा (ट्रैप फसल के रूप में)", usage: "फूल और फल लगने के चरण में प्रयोग करें।" },
      { crop: "आलू", pest: "लेट ब्लाइट (पछेती झुलसा)", chemical: "मैनकोज़ेब, मेटलैक्सिल", organic: "तांबा आधारित कवकनाशी, ट्राइकोडर्मा विरिडी", usage: "बीमारी दिखने से पहले निवारक स्प्रे, खासकर बादलों वाले मौसम में।" },
      { crop: "सोयाबीन", pest: "सफेद मक्खी", chemical: "ट्रायज़ोफोस, एसिटामिप्रिड", organic: "पीले चिपचिपे जाल, नीम के तेल का स्प्रे", usage: "सुबह जल्दी या देर शाम को स्प्रे करें।" },
    ]
  },
  "te-IN": {
    title: "సిఫార్సు చేయబడిన పురుగుమందులు",
    subtitle: "సాధారణ పంట తెగుళ్లు మరియు వ్యాధులకు సమర్థవంతమైన రసాయన మరియు సేంద్రీయ చికిత్సలను కనుగొనండి.",
    searchPlaceholder: "పంట లేదా తెగులు ద్వారా శోధించండి...",
    chemical: "రసాయన పురుగుమందులు",
    organic: "సేంద్రీయ ప్రత్యామ్నాయాలు",
    usage: "వాడుక సూచనలు",
    noResults: "దీనికి ఎలాంటి సిఫార్సులు కనుగొనబడలేదు",
    data: [
      { crop: "పత్తి", pest: "కాయతొలుచు పురుగు", chemical: "స్వినోసాడ్, క్లోరాంట్రానిలిప్రోల్", organic: "వేప నూనె, బాసిల్లస్ తురింజియెన్సిస్ (Bt)", usage: "తెగులు ప్రారంభ దశలో పిచికారీ చేయండి. అవసరమైతే 10-15 రోజుల తర్వాత పునరావృతం చేయండి." },
      { crop: "వరి", pest: "కాండం తొలిచే పురుగు", chemical: "కార్టాప్ హైడ్రోక్లోరైడ్, క్లోరిపైరిఫాస్", organic: "ట్రైకోగ్రామా జపోనికం, వేప గింజల సారం", usage: "చనిపోయిన కాండాలు గమనించినప్పుడు వర్తించండి. సరైన నీటి మట్టాన్ని నిర్వహించండి." },
      { crop: "గోధుమ", pest: "పేనుబంక", chemical: "ఇమిడాక్లోప్రిడ్, థియామెథోక్సామ్", organic: "వెల్లుల్లి సారం, లేడీబర్డ్ బీటిల్స్", usage: "తెగులు జనాభా ఆర్థిక పరిమితి స్థాయిని దాటినప్పుడు పిచికారీ చేయండి." },
      { crop: "టమోటా", pest: "పండు తొలిచే పురుగు", chemical: "ఇండోక్సాకార్బ్, ఫ్లూబెండియామైಡ್", organic: "వేప నూనె, బంతి పువ్వు (ఎర పంటగా)", usage: "పూత మరియు పండ్లు ఏర్పడే దశలో వర్తించండి." },
      { crop: "బంగాళాదుంప", pest: "లేట్ బ్లైట్", chemical: "మాంకోజెబ్, మెటలాక్సిల్", organic: "రాగి ఆధారిత శిలీంద్రనాశకాలు, ట్రైకోడెర్మా విరిడే", usage: "వ్యాధి కనిపించడానికి ముందు నివారణ పిచికారీ, ముఖ్యంగా మేఘావృతమైన వాతావరణంలో." },
      { crop: "సోయాబీన్", pest: "తెల్లదోమ", chemical: "ట్రైజోఫోస్, ఎసిటామిప్రిడ్", organic: "పసుపు అంటుకునే ఉచ్చులు, వేప నూనె పిచికారీ", usage: "ఉదయం లేదా సాయంత్రం పిచికారీ చేయండి." },
    ]
  },
  "ta-IN": {
    title: "பரிந்துரைக்கப்பட்ட பூச்சிக்கொல்லிகள்",
    subtitle: "பொதுவான பயிர் பூச்சிகள் மற்றும் நோய்களுக்கான பயனுள்ள இரசாயன மற்றும் கரிம சிகிச்சைகளைக் கண்டறியவும்.",
    searchPlaceholder: "பயிர் அல்லது பூச்சி மூலம் தேடுங்கள்...",
    chemical: "இரசாயன பூச்சிக்கொல்லிகள்",
    organic: "கரிம மாற்றுக்கள்",
    usage: "பயன்பாட்டு வழிமுறைகள்",
    noResults: "பரிந்துரைகள் எதுவும் காணப்படவில்லை",
    data: [
      { crop: "பருத்தி", pest: "காய்ப்புழு", chemical: "ஸ்பினோசாட், குளோரான்ட்ரனிலிப்ரோல்", organic: "வேப்ப எண்ணெய், பேசிலஸ் துரிஞ்சியென்சிஸ் (Bt)", usage: "தொற்று ஆரம்ப கட்டத்தில் தெளிக்கவும். தேவைப்பட்டால் 10-15 நாட்களுக்குப் பிறகு மீண்டும் செய்யவும்." },
      { crop: "அரிசி", pest: "தண்டு துளைப்பான்", chemical: "கார்டாப் ஹைட்ரோகுளோரைடு, குளோர்பைரிஃபோஸ்", organic: "ட்ரைக்கோகிராமா ஜபோனிகம், வேப்ப விதை சாறு", usage: "இறந்த தண்டுகள் காணப்படும் போது பயன்படுத்தவும். சரியான நீர் மட்டத்தை பராமரிக்கவும்." },
      { crop: "கோதுமை", pest: "அசுவினி", chemical: "இமிடாக்ளோபிரிட், தியாமெதோக்சாம்", organic: "பூண்டு சாறு, லேடிபேர்ட் வண்டுகள்", usage: "பூச்சிகளின் எண்ணிக்கை பொருளாதார வரம்பு அளவை தாண்டும் போது தெளிக்கவும்." },
      { crop: "தக்காளி", pest: "பழம் துளைப்பான்", chemical: "இந்தோக்சாகார்ப், புளூபென்டியமைடு", organic: "வேப்ப எண்ணெய், சாமந்தி (பொறி பயிராக)", usage: "பூக்கும் மற்றும் பழம் அமைக்கும் கட்டத்தில் பயன்படுத்தவும்." },
      { crop: "உருளைக்கிழங்கு", pest: "பிற்பகுதி கருகல் நோய்", chemical: "மான்கோசெப், மெட்டாலாக்சில்", organic: "தாமிர அடிப்படையிலான பூஞ்சைக் கொல்லிகள், ட்ரைக்கோடெர்மா விரிடே", usage: "நோய் தோன்றுவதற்கு முன் தடுப்பு தெளிப்பு, குறிப்பாக மேகமூட்டமான காலநிலையில்." },
      { crop: "சோயாபீன்", pest: "வெள்ளை ஈ", chemical: "ட்ரையசோபோஸ், அசிடாமிப்ரிட்", organic: "மஞ்சள் ஒட்டும் பொறிகள், வேப்ப எண்ணெய் தெளிப்பு", usage: "அதிகாலை அல்லது மாலை நேரங்களில் தெளிக்கவும்." },
    ]
  },
  "mr-IN": {
    title: "शिफारस केलेली कीटकनाशके",
    subtitle: "सामान्य पीक कीड आणि रोगांसाठी प्रभावी रासायनिक आणि सेंद्रिय उपचार शोधा.",
    searchPlaceholder: "पीक किंवा कीड द्वारे शोधा...",
    chemical: "रासायनिक कीटकनाशके",
    organic: "सेंद्रिय पर्याय",
    usage: "वापरण्याच्या सूचना",
    noResults: "यासाठी कोणत्याही शिफारसी आढळल्या नाहीत",
    data: [
      { crop: "कापूस", pest: "बोंडअळी", chemical: "स्पिनोसॅड, क्लोरँट्रानिलिप्रोल", organic: "कडुनिंबाचे तेल, बॅसिलस थुरिंजिएन्सिस (Bt)", usage: "प्रादुर्भावाच्या सुरुवातीच्या टप्प्यात फवारणी करा. आवश्यक असल्यास 10-15 दिवसांनंतर पुन्हा करा." },
      { crop: "तांदूळ", pest: "खोडकिडा", chemical: "कार्टाप हायड्रोक्लोराईड, क्लोरपायरीफॉस", organic: "ट्रायकोग्रामा जपोनिकम, निंबोळी अर्क", usage: "मेलेले कोंब दिसल्यावर वापर करा. पाण्याची योग्य पातळी राखा." },
      { crop: "गहू", pest: "मावा", chemical: "इमिडाक्लोप्रिड, थियामेथोक्साम", organic: "लसणाचा अर्क, लेडीबर्ड बीटल", usage: "जेव्हा कीटकांची संख्या आर्थिक उंबरठा ओलांडते तेव्हा फवारणी करा." },
      { crop: "टोमॅटो", pest: "फळ पोखरणारी अळी", chemical: "इंडोक्साकार्ब, फ्लुबेंडियामाइड", organic: "कडुनिंबाचे तेल, झेंडू (सापळा पीक म्हणून)", usage: "फुले आणि फळे लागण्याच्या टप्प्यात वापरा." },
      { crop: "बटाटा", pest: "करपा", chemical: "मॅनकोझेब, मेटॅलॅक्सिल", organic: "तांबे आधारित बुरशीनाशके, ट्रायकोडर्मा विरिडी", usage: "रोग दिसण्यापूर्वी प्रतिबंधात्मक फवारणी, विशेषतः ढगाळ वातावरणात." },
      { crop: "सोयाबीन", pest: "पांढरी माशी", chemical: "ट्रायझोफॉस, एसिटामिप्रिड", organic: "पिवळे चिकट सापळे, कडुनिंबाच्या तेलाची फवारणी", usage: "सकाळी लवकर किंवा संध्याकाळी उशिरा फवारणी करा." },
    ]
  },
  "kn-IN": {
    title: "ಶಿಫಾರಸು ಮಾಡಿದ ಕೀಟನಾಶಕಗಳು",
    subtitle: "ಸಾಮಾನ್ಯ ಬೆಳೆ ಕೀಟಗಳು ಮತ್ತು ರೋಗಗಳಿಗೆ ಪರಿಣಾಮಕಾರಿ ರಾಸಾಯನಿಕ ಮತ್ತು ಸಾವಯವ ಚಿಕಿತ್ಸೆಗಳನ್ನು ಹುಡುಕಿ.",
    searchPlaceholder: "ಬೆಳೆ ಅಥವಾ ಕೀಟದಿಂದ ಹುಡುಕಿ...",
    chemical: "ರಾಸಾಯನಿಕ ಕೀಟನಾಶಕಗಳು",
    organic: "ಸಾವಯವ ಪರ್ಯಾಯಗಳು",
    usage: "ಬಳಕೆಯ ಸೂಚನೆಗಳು",
    noResults: "ಯಾವುದೇ ಶಿಫಾರಸುಗಳು ಕಂಡುಬಂದಿಲ್ಲ",
    data: [
      { crop: "ಹತ್ತಿ", pest: "ಕಾಯಿಕೊರಕ", chemical: "ಸ್ಪಿನೋಸಾಡ್, ಕ್ಲೋರಾಂಟ್ರಾನಿಲಿಪ್ರೋಲ್", organic: "ಬೇವಿನ ಎಣ್ಣೆ, ಬ್ಯಾಸಿಲಸ್ ತುರಿಂಜಿಯೆನ್ಸಿಸ್ (Bt)", usage: "ಸೋಂಕಿನ ಆರಂಭಿಕ ಹಂತದಲ್ಲಿ ಸಿಂಪಡಿಸಿ. ಅಗತ್ಯವಿದ್ದರೆ 10-15 ದಿನಗಳ ನಂತರ ಪುನರಾವರ್ತಿಸಿ." },
      { crop: "ಅಕ್ಕಿ", pest: "ಕಾಂಡ ಕೊರಕ", chemical: "ಕಾರ್ಟಾಪ್ ಹೈಡ್ರೋಕ್ಲೋರೈಡ್, ಕ್ಲೋರ್ಪೈರಿಫಾಸ್", organic: "ಟ್ರೈಕೋಗ್ರಾಮಾ ಜಪೋನಿಕಮ್, ಬೇವಿನ ಬೀಜದ ಸಾರ", usage: "ಸತ್ತ ಕಾಂಡಗಳು ಕಂಡುಬಂದಾಗ ಅನ್ವಯಿಸಿ. ಸರಿಯಾದ ನೀರಿನ ಮಟ್ಟವನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಿ." },
      { crop: "ಗೋಧಿ", pest: "ಗಿಡಹೇನುಗಳು", chemical: "ಇಮಿಡಾಕ್ಲೋಪ್ರಿಡ್, ಥಿಯಾಮೆಥೋಕ್ಸಾಮ್", organic: "ಬೆಳ್ಳುಳ್ಳಿ ಸಾರ, ಲೇಡಿಬರ್ಡ್ ಜೀರುಂಡೆಗಳು", usage: "ಕೀಟಗಳ ಸಂಖ್ಯೆಯು ಆರ್ಥಿಕ ಮಿತಿಯನ್ನು ದಾಟಿದಾಗ ಸಿಂಪಡಿಸಿ." },
      { crop: "ಟೊಮೆಟೊ", pest: "ಹಣ್ಣು ಕೊರಕ", chemical: "ಇಂಡೋಕ್ಸಾಕಾರ್ಬ್, ಫ್ಲುಬೆಂಡಿಯಾಮೈಡ್", organic: "ಬೇವಿನ ಎಣ್ಣೆ, ಚೆಂಡುಹೂವು (ಬಲೆ ಬೆಳೆಯಾಗಿ)", usage: "ಹೂಬಿಡುವ ಮತ್ತು ಹಣ್ಣು ಕಚ್ಚುವ ಹಂತದಲ್ಲಿ ಅನ್ವಯಿಸಿ." },
      { crop: "ಆಲೂಗಡ್ಡೆ", pest: "ಲೇಟ್ ಬ್ಲೈಟ್", chemical: "ಮ್ಯಾಂಕೋಜೆಬ್, ಮೆಟಲಾಕ್ಸಿಲ್", organic: "ತಾಮ್ರ ಆಧಾರಿತ ಶಿಲೀಂಧ್ರನಾಶಕಗಳು, ಟ್ರೈಕೋಡರ್ಮಾ ವಿರಿಡೆ", usage: "ರೋಗ ಕಾಣಿಸಿಕೊಳ್ಳುವ ಮೊದಲು ತಡೆಗಟ್ಟುವ ಸಿಂಪರಣೆ, ವಿಶೇಷವಾಗಿ ಮೋಡ ಕವಿದ ವಾತಾವರಣದಲ್ಲಿ." },
      { crop: "ಸೋಯಾಬೀನ್", pest: "ಬಿಳಿ ನೊಣ", chemical: "ಟ್ರೈಜೋಫಾಸ್, ಅಸಿಟಾಮಿಪ್ರಿಡ್", organic: "ಹಳದಿ ಅಂಟುವ ಬಲೆಗಳು, ಬೇವಿನ ಎಣ್ಣೆ ಸಿಂಪರಣೆ", usage: "ಮುಂಜಾನೆ ಅಥವಾ ಸಂಜೆ ಸಿಂಪಡಿಸಿ." },
    ]
  }
};

export default function Pesticides() {
  const [searchTerm, setSearchTerm] = useState("");
  const { language } = useLanguage();
  const t = translations[language] || translations["en-US"];
  const data = t.data || translations["en-US"].data;

  const filteredData = data.filter((item: any) => 
    item.crop.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.pest.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredData.map((item: any, index: number) => (
          <Card key={index} className="hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-green-50 px-6 py-4 border-b border-green-100 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg text-green-900">{item.crop}</h3>
                <p className="text-sm text-green-700 font-medium">{item.pest}</p>
              </div>
              <Shield className="h-8 w-8 text-green-600 opacity-50" />
            </div>
            <CardContent className="p-6 space-y-4">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <FlaskConical className="h-4 w-4 text-blue-600" />
                  <h4 className="font-semibold text-sm text-gray-900">{t.chemical}</h4>
                </div>
                <p className="text-sm text-gray-600 pl-6">{item.chemical}</p>
              </div>
              
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <Leaf className="h-4 w-4 text-green-600" />
                  <h4 className="font-semibold text-sm text-gray-900">{t.organic}</h4>
                </div>
                <p className="text-sm text-gray-600 pl-6">{item.organic}</p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <h4 className="font-semibold text-xs text-gray-500 uppercase tracking-wider mb-1">{t.usage}</h4>
                <p className="text-sm text-gray-700">{item.usage}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredData.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          {t.noResults} "{searchTerm}".
        </div>
      )}
    </div>
  );
}
