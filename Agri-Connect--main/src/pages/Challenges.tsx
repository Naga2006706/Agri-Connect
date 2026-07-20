import { useState } from "react";
import { Sprout, Truck, Map, Zap, Bug, TrendingDown, Mountain, Droplets, ChevronDown, ChevronUp, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/src/contexts/LanguageContext";

const translations: Record<string, any> = {
  "en-US": {
    title: "Farming Challenges & Solutions",
    subtitle: "Explore common agricultural challenges and discover practical solutions.",
    askExpert: "Ask Expert",
    challenges: [
      {
        id: "seed",
        title: "Seed Quality & Genetic Limitations",
        icon: Sprout,
        description: "Poor seed quality and lack of access to high-yielding varieties limit crop potential.",
        solutions: [
          "Use certified seeds from reputable sources.",
          "Perform germination tests before mass sowing.",
          "Adopt climate-resilient and hybrid seed varieties.",
          "Participate in community seed banks."
        ]
      },
      {
        id: "supply",
        title: "Supply Chain Inefficiency",
        icon: Truck,
        description: "Post-harvest losses and poor market linkages reduce farmer income.",
        solutions: [
          "Form Farmer Producer Organizations (FPOs) for collective bargaining.",
          "Utilize cold storage and proper packaging techniques.",
          "Use digital platforms to connect directly with buyers.",
          "Plan harvesting according to market demand."
        ]
      },
      {
        id: "land",
        title: "Land Fragmentation & Small Holdings",
        icon: Map,
        description: "Small, scattered land parcels make mechanization and economies of scale difficult.",
        solutions: [
          "Adopt cooperative farming models.",
          "Use custom hiring centers for agricultural machinery.",
          "Focus on high-value crops (horticulture, floriculture).",
          "Implement vertical farming or multi-tier cropping."
        ]
      },
      {
        id: "energy",
        title: "Energy & Power Issues",
        icon: Zap,
        description: "Unreliable electricity supply affects irrigation and processing.",
        solutions: [
          "Install solar-powered irrigation pumps.",
          "Utilize biogas plants for local energy generation.",
          "Adopt energy-efficient farm equipment.",
          "Schedule heavy power usage during off-peak hours."
        ]
      },
      {
        id: "pest",
        title: "Pest & Disease Management Failure",
        icon: Bug,
        description: "Over-reliance on chemicals and lack of early detection lead to crop failure.",
        solutions: [
          "Implement Integrated Pest Management (IPM).",
          "Use our AI Disease Detection tool for early diagnosis.",
          "Encourage natural predators and beneficial insects.",
          "Practice crop rotation and intercropping."
        ]
      },
      {
        id: "productivity",
        title: "Low Productivity & Outdated Practices",
        icon: TrendingDown,
        description: "Traditional farming methods often yield less compared to modern agronomic practices.",
        solutions: [
          "Adopt precision agriculture techniques.",
          "Attend local Krishi Vigyan Kendra (KVK) training.",
          "Use data-driven insights for sowing and harvesting.",
          "Implement mechanized weed and nutrient management.",
          "Leverage Data Visualization for better crop monitoring.",
          "Utilize Government Schemes for financial and technical support.",
          "Manage Agricultural Waste & Pesticides used in growing plants effectively."
        ]
      },
      {
        id: "soil",
        title: "Soil Degradation & Fertility Loss",
        icon: Mountain,
        description: "Continuous cropping and chemical overuse deplete soil nutrients.",
        solutions: [
          "Conduct regular soil testing.",
          "Use organic manure, compost, and bio-fertilizers.",
          "Plant cover crops to prevent erosion.",
          "Practice conservation tillage."
        ]
      },
      {
        id: "water",
        title: "Water Scarcity & Mismanagement",
        icon: Droplets,
        description: "Depleting groundwater and inefficient irrigation waste precious resources.",
        solutions: [
          "Adopt micro-irrigation (drip and sprinkler systems).",
          "Build rainwater harvesting structures.",
          "Select drought-tolerant crop varieties.",
          "Mulch soil to retain moisture."
        ]
      }
    ]
  },
  "hi-IN": {
    title: "कृषि चुनौतियां और समाधान",
    subtitle: "सामान्य कृषि चुनौतियों का अन्वेषण करें और व्यावहारिक समाधान खोजें।",
    askExpert: "विशेषज्ञ से पूछें",
    challenges: [
      {
        id: "seed",
        title: "बीज की गुणवत्ता और आनुवंशिक सीमाएं",
        icon: Sprout,
        description: "खराब बीज गुणवत्ता और उच्च उपज वाली किस्मों तक पहुंच की कमी।",
        solutions: ["प्रमाणित बीजों का उपयोग करें।", "अंकुरण परीक्षण करें।", "जलवायु-अनुकूल किस्मों को अपनाएं।"]
      },
      {
        id: "supply",
        title: "आपूर्ति श्रृंखला की अक्षमता",
        icon: Truck,
        description: "फसल के बाद का नुकसान और खराब बाजार संपर्क।",
        solutions: ["किसान उत्पादक संगठन (FPO) बनाएं।", "कोल्ड स्टोरेज का उपयोग करें।", "डिजिटल प्लेटफॉर्म का उपयोग करें।"]
      },
      {
        id: "land",
        title: "भूमि विखंडन और छोटी जोत",
        icon: Map,
        description: "छोटे, बिखरे हुए भूमि पार्सल मशीनीकरण को कठिन बनाते हैं।",
        solutions: ["सहकारी खेती अपनाएं।", "किराये की मशीनरी का उपयोग करें।", "उच्च मूल्य वाली फसलों पर ध्यान दें।"]
      },
      {
        id: "energy",
        title: "ऊर्जा और बिजली के मुद्दे",
        icon: Zap,
        description: "अविश्वसनीय बिजली आपूर्ति सिंचाई को प्रभावित करती है।",
        solutions: ["सौर पंप स्थापित करें।", "बायोगैस का उपयोग करें।", "ऊर्जा-कुशल उपकरण अपनाएं।"]
      },
      {
        id: "pest",
        title: "कीट और रोग प्रबंधन विफलता",
        icon: Bug,
        description: "रसायनों पर अत्यधिक निर्भरता और शीघ्र पहचान की कमी।",
        solutions: ["एकीकृत कीट प्रबंधन (IPM) लागू करें।", "हमारे AI टूल का उपयोग करें।", "फसल चक्रण का अभ्यास करें।"]
      },
      {
        id: "productivity",
        title: "कम उत्पादकता और पुरानी प्रथाएं",
        icon: TrendingDown,
        description: "पारंपरिक खेती के तरीके अक्सर कम उपज देते हैं।",
        solutions: [
          "सटीक कृषि तकनीक अपनाएं।", 
          "कृषि विज्ञान केंद्र (KVK) प्रशिक्षण में भाग लें।", 
          "डेटा-संचालित अंतर्दृष्टि का उपयोग करें।",
          "बेहतर फसल निगरानी के लिए डेटा विज़ुअलाइज़ेशन का लाभ उठाएं।",
          "वित्तीय और तकनीकी सहायता के लिए सरकारी योजनाओं का उपयोग करें।",
          "पौधों को उगाने में प्रयुक्त कृषि अपशिष्ट और कीटनाशकों का प्रभावी ढंग से प्रबंधन करें।"
        ]
      },
      {
        id: "soil",
        title: "मिट्टी का क्षरण और उर्वरता का नुकसान",
        icon: Mountain,
        description: "लगातार खेती और रसायनों के अत्यधिक उपयोग से पोषक तत्व कम होते हैं।",
        solutions: ["नियमित मिट्टी परीक्षण कराएं।", "जैविक खाद का उपयोग करें।", "कवर फसलें लगाएं।"]
      },
      {
        id: "water",
        title: "पानी की कमी और कुप्रबंधन",
        icon: Droplets,
        description: "भूजल की कमी और अकुशल सिंचाई।",
        solutions: ["ड्रिप सिंचाई अपनाएं।", "वर्षा जल संचयन संरचनाएं बनाएं।", "सूखा सहिष्णु फसलें चुनें।"]
      }
    ]
  },
  "te-IN": {
    title: "వ్యవసాయ సవాళ్లు & పరిష్కారాలు",
    subtitle: "సాధారణ వ్యవసాయ సవాళ్లను అన్వేషించండి మరియు ఆచరణాత్మక పరిష్కారాలను కనుగొనండి.",
    askExpert: "నిపుణుడిని అడగండి",
    challenges: [
      {
        id: "seed",
        title: "విత్తన నాణ్యత & జన్యు పరిమితులు",
        icon: Sprout,
        description: "నాణ్యత లేని విత్తనాలు మరియు అధిక దిగుబడినిచ్చే రకాల కొరత.",
        solutions: ["ధృవీకరించబడిన విత్తనాలను ఉపయోగించండి.", "మొలక శాతం పరీక్షించండి.", "వాతావరణ-అనుకూల రకాలను ఎంచుకోండి."]
      },
      {
        id: "supply",
        title: "సరఫరా గొలుసు అసమర్థత",
        icon: Truck,
        description: "కోత తర్వాత నష్టాలు మరియు సరైన మార్కెట్ అనుసంధానం లేకపోవడం.",
        solutions: ["రైతు ఉత్పత్తిదారుల సంఘాలను (FPO) ఏర్పాటు చేయండి.", "కోల్డ్ స్టోరేజీని ఉపయోగించండి.", "డిజిటల్ ప్లాట్‌ఫారమ్‌లను వాడండి."]
      },
      {
        id: "land",
        title: "భూమి విభజన & చిన్న కమతాలు",
        icon: Map,
        description: "చిన్న, చెల్లాచెదురుగా ఉన్న భూములు యాంత్రీకరణను కష్టతరం చేస్తాయి.",
        solutions: ["సహకార వ్యవసాయాన్ని అనుసరించండి.", "అద్దె యంత్రాలను ఉపయోగించండి.", "అధిక విలువ కలిగిన పంటలపై దృష్టి పెట్టండి."]
      },
      {
        id: "energy",
        title: "శక్తి & విద్యుత్ సమస్యలు",
        icon: Zap,
        description: "అస్థిరమైన విద్యుత్ సరఫరా నీటిపారుదలని ప్రభావితం చేస్తుంది.",
        solutions: ["సౌర పంపులను ఏర్పాటు చేయండి.", "బయోగ్యాస్ ఉపయోగించండి.", "శక్తి-సమర్థవంతమైన పరికరాలను వాడండి."]
      },
      {
        id: "pest",
        title: "తెగులు & వ్యాధి నిర్వహణ వైఫల్యం",
        icon: Bug,
        description: "రసాయనాలపై అధిక ఆధారపడటం మరియు ముందస్తు గుర్తింపు లేకపోవడం.",
        solutions: ["సమగ్ర తెగులు నిర్వహణ (IPM) అమలు చేయండి.", "మా AI సాధనాన్ని ఉపయోగించండి.", "పంట మార్పిడిని పాటించండి."]
      },
      {
        id: "productivity",
        title: "తక్కువ ఉత్పాదకత & పాత పద్ధతులు",
        icon: TrendingDown,
        description: "సాంప్రదాయ వ్యవసాయ పద్ధతులు తరచుగా తక్కువ దిగుబడిని ఇస్తాయి.",
        solutions: [
          "ఖచ్చితమైన వ్యవసాయ పద్ధతులను అనుసరించండి.", 
          "KVK శిక్షణకు హాజరుకండి.", 
          "డేటా ఆధారిత నిర్ణయాలు తీసుకోండి.",
          "మెరుగైన పంట పర్యవేక్షణ కోసం డేటా విజువలైజేషన్‌ను ఉపయోగించండి.",
          "ఆర్థిక మరియు సాంకేతిక మద్దతు కోసం ప్రభుత్వ పథకాలను ఉపయోగించుకోండి.",
          "మొక్కల పెంపకంలో ఉపయోగించే వ్యవసాయ వ్యర్థాలు & పురుగుమందులను సమర్థవంతంగా నిర్వహించండి."
        ]
      },
      {
        id: "soil",
        title: "నేల క్షీణత & సారాంశం కోల్పోవడం",
        icon: Mountain,
        description: "నిరంతర పంటలు మరియు రసాయనాల అధిక వాడకం నేల పోషకాలను తగ్గిస్తాయి.",
        solutions: ["క్రమం తప్పకుండా నేల పరీక్షలు చేయించండి.", "సేంద్రీయ ఎరువులను వాడండి.", "కవర్ పంటలను నాటండి."]
      },
      {
        id: "water",
        title: "నీటి కొరత & దుర్వినియోగం",
        icon: Droplets,
        description: "భూగర్భ జలాలు తగ్గడం మరియు అసమర్థ నీటిపారుదల.",
        solutions: ["బిందు సేద్యం అనుసరించండి.", "వర్షపు నీటి నిల్వ నిర్మాణాలను నిర్మించండి.", "కరువును తట్టుకునే పంటలను ఎంచుకోండి."]
      }
    ]
  },
  "ta-IN": {
    title: "விவசாய சவால்கள் & தீர்வுகள்",
    subtitle: "பொதுவான விவசாய சவால்களை ஆராய்ந்து நடைமுறை தீர்வுகளைக் கண்டறியவும்.",
    askExpert: "நிபுணரிடம் கேளுங்கள்",
    challenges: [
      {
        id: "seed",
        title: "விதை தரம் & மரபணு வரம்புகள்",
        icon: Sprout,
        description: "மோசமான விதை தரம் மற்றும் அதிக மகசூல் தரும் ரகங்கள் இல்லாமை.",
        solutions: ["சான்றளிக்கப்பட்ட விதைகளைப் பயன்படுத்தவும்.", "முளைப்புத் திறனை சோதிக்கவும்.", "காலநிலைக்கேற்ற ரகங்களை ஏற்கவும்."]
      },
      {
        id: "supply",
        title: "விநியோகச் சங்கிலி திறமையின்மை",
        icon: Truck,
        description: "அறுவடைக்குப் பிந்தைய இழப்புகள் மற்றும் மோசமான சந்தை இணைப்புகள்.",
        solutions: ["உழவர் உற்பத்தியாளர் அமைப்புகளை (FPO) உருவாக்கவும்.", "குளிர்பதனக் கிடங்கைப் பயன்படுத்தவும்.", "டிஜிட்டல் தளங்களைப் பயன்படுத்தவும்."]
      },
      {
        id: "land",
        title: "நிலத் துண்டாக்கம் & சிறு நிலவுடைமைகள்",
        icon: Map,
        description: "சிறிய, சிதறிய நிலங்கள் இயந்திரமயமாக்கலை கடினமாக்குகின்றன.",
        solutions: ["கூட்டுறவு விவசாயத்தை ஏற்கவும்.", "வாடகை இயந்திரங்களைப் பயன்படுத்தவும்.", "அதிக மதிப்புள்ள பயிர்களில் கவனம் செலுத்தவும்."]
      },
      {
        id: "energy",
        title: "ஆற்றல் & மின்சார சிக்கல்கள்",
        icon: Zap,
        description: "நம்பகமற்ற மின்சாரம் நீர்ப்பாசனத்தை பாதிக்கிறது.",
        solutions: ["சூரிய சக்தி பம்புகளை நிறுவவும்.", "உயிரிவாயுவைப் பயன்படுத்தவும்.", "ஆற்றல்-திறனுள்ள உபகரணங்களை ஏற்கவும்."]
      },
      {
        id: "pest",
        title: "பூச்சி & நோய் மேலாண்மை தோல்வி",
        icon: Bug,
        description: "இரசாயனங்களை அதிகம் நம்பியிருத்தல் மற்றும் முன்கூட்டியே கண்டறியாமை.",
        solutions: ["ஒருங்கிணைந்த பூச்சி மேலாண்மையை (IPM) செயல்படுத்தவும்.", "எங்கள் AI கருவியைப் பயன்படுத்தவும்.", "பயிர் சுழற்சியைப் பயிற்சி செய்யவும்."]
      },
      {
        id: "productivity",
        title: "குறைந்த உற்பத்தித்திறன் & பழைய நடைமுறைகள்",
        icon: TrendingDown,
        description: "பாரம்பரிய விவசாய முறைகள் பெரும்பாலும் குறைந்த மகசூலையே தருகின்றன.",
        solutions: [
          "துல்லியமான விவசாய நுட்பங்களை ஏற்கவும்.", 
          "KVK பயிற்சியில் கலந்து கொள்ளவும்.", 
          "தரவு சார்ந்த முடிவுகளை எடுக்கவும்.",
          "சிறந்த பயிர் கண்காணிப்புக்கு தரவு காட்சிப்படுத்தலைப் பயன்படுத்தவும்.",
          "நிதி மற்றும் தொழில்நுட்ப ஆதரவுக்கு அரசு திட்டங்களைப் பயன்படுத்தவும்.",
          "தாவரங்களை வளர்ப்பதில் பயன்படுத்தப்படும் விவசாய கழிவுகள் மற்றும் பூச்சிக்கொல்லிகளை திறம்பட நிர்வகிக்கவும்."
        ]
      },
      {
        id: "soil",
        title: "மண் சீரழிவு & வளம் இழப்பு",
        icon: Mountain,
        description: "தொடர்ச்சியான பயிரிடுதல் மற்றும் இரசாயனங்களின் அதிகப்படியான பயன்பாடு மண் ஊட்டச்சத்துக்களைக் குறைக்கிறது.",
        solutions: ["வழக்கமான மண் பரிசோதனை செய்யவும்.", "இயற்கை உரங்களைப் பயன்படுத்தவும்.", "மூடு பயிர்களை நடவும்."]
      },
      {
        id: "water",
        title: "நீர் பற்றாக்குறை & தவறான மேலாண்மை",
        icon: Droplets,
        description: "நிலத்தடி நீர் குறைதல் மற்றும் திறமையற்ற நீர்ப்பாசனம்.",
        solutions: ["சொட்டு நீர்ப்பாசனத்தை ஏற்கவும்.", "மழைநீர் சேகரிப்பு அமைப்புகளை உருவாக்கவும்.", "வறட்சியைத் தாங்கும் பயிர்களைத் தேர்ந்தெடுக்கவும்."]
      }
    ]
  },
  "mr-IN": {
    title: "कृषी आव्हाने आणि उपाय",
    subtitle: "सामान्य कृषी आव्हाने एक्सप्लोर करा आणि व्यावहारिक उपाय शोधा.",
    askExpert: "तज्ञांना विचारा",
    challenges: [
      {
        id: "seed",
        title: "बियाणे गुणवत्ता आणि अनुवांशिक मर्यादा",
        icon: Sprout,
        description: "खराब बियाणे गुणवत्ता आणि उच्च उत्पन्न देणाऱ्या जातींचा अभाव.",
        solutions: ["प्रमाणित बियाणे वापरा.", "उगवण चाचणी करा.", "हवामान-अनुकूल जातींचा अवलंब करा."]
      },
      {
        id: "supply",
        title: "पुरवठा साखळीतील अकार्यक्षमता",
        icon: Truck,
        description: "कापणीनंतरचे नुकसान आणि खराब बाजार जोडणी.",
        solutions: ["शेतकरी उत्पादक संस्था (FPO) स्थापन करा.", "कोल्ड स्टोरेज वापरा.", "डिजिटल प्लॅटफॉर्मचा वापर करा."]
      },
      {
        id: "land",
        title: "जमिनीचे तुकडे आणि लहान धारणा",
        icon: Map,
        description: "लहान, विखुरलेले जमिनीचे तुकडे यांत्रिकीकरण कठीण करतात.",
        solutions: ["सहकारी शेतीचा अवलंब करा.", "भाड्याची यंत्रसामग्री वापरा.", "उच्च मूल्याच्या पिकांवर लक्ष केंद्रित करा."]
      },
      {
        id: "energy",
        title: "ऊर्जा आणि वीज समस्या",
        icon: Zap,
        description: "अविश्वसनीय वीज पुरवठा सिंचनावर परिणाम करतो.",
        solutions: ["सौर पंप स्थापित करा.", "बायोगॅस वापरा.", "ऊर्जा-कार्यक्षम उपकरणे स्वीकारा."]
      },
      {
        id: "pest",
        title: "कीड आणि रोग व्यवस्थापन अपयश",
        icon: Bug,
        description: "रसायनांवर अतिअवलंबित्व आणि लवकर ओळख न होणे.",
        solutions: ["एकात्मिक कीड व्यवस्थापन (IPM) लागू करा.", "आमचे AI टूल वापरा.", "पीक रोटेशनचा सराव करा."]
      },
      {
        id: "productivity",
        title: "कमी उत्पादकता आणि जुन्या पद्धती",
        icon: TrendingDown,
        description: "पारंपारिक शेती पद्धतींमुळे अनेकदा कमी उत्पन्न मिळते.",
        solutions: [
          "अचूक शेती तंत्रज्ञानाचा अवलंब करा.", 
          "KVK प्रशिक्षणात सहभागी व्हा.", 
          "डेटा-आधारित निर्णय घ्या.",
          "उत्तम पीक निरीक्षणासाठी डेटा व्हिज्युअलायझेशनचा लाभ घ्या.",
          "आर्थिक आणि तांत्रिक मदतीसाठी सरकारी योजनांचा वापर करा.",
          "वनस्पती वाढवण्यासाठी वापरला जाणारा कृषी कचरा आणि कीटकनाशके प्रभावीपणे व्यवस्थापित करा."
        ]
      },
      {
        id: "soil",
        title: "मातीची धूप आणि सुपीकता कमी होणे",
        icon: Mountain,
        description: "सतत पीक घेणे आणि रसायनांचा अतिवापर यामुळे मातीतील पोषक तत्वे कमी होतात.",
        solutions: ["नियमित माती परीक्षण करा.", "सेंद्रिय खतांचा वापर करा.", "कव्हर पिके लावा."]
      },
      {
        id: "water",
        title: "पाण्याची टंचाई आणि गैरव्यवस्थापन",
        icon: Droplets,
        description: "भूजल पातळी कमी होणे आणि अकार्यक्षम सिंचन.",
        solutions: ["ठिबक सिंचनाचा अवलंब करा.", "पावसाचे पाणी साठवण्याच्या रचना तयार करा.", "दुष्काळ सहन करणारी पिके निवडा."]
      }
    ]
  },
  "kn-IN": {
    title: "ಕೃಷಿ ಸವಾಲುಗಳು ಮತ್ತು ಪರಿಹಾರಗಳು",
    subtitle: "ಸಾಮಾನ್ಯ ಕೃಷಿ ಸವಾಲುಗಳನ್ನು ಅನ್ವೇಷಿಸಿ ಮತ್ತು ಪ್ರಾಯೋಗಿಕ ಪರಿಹಾರಗಳನ್ನು ಕಂಡುಕೊಳ್ಳಿ.",
    askExpert: "ತಜ್ಞರನ್ನು ಕೇಳಿ",
    challenges: [
      {
        id: "seed",
        title: "ಬೀಜದ ಗುಣಮಟ್ಟ ಮತ್ತು ಆನುವಂಶಿಕ ಮಿತಿಗಳು",
        icon: Sprout,
        description: "ಕಳಪೆ ಬೀಜದ ಗುಣಮಟ್ಟ ಮತ್ತು ಅಧಿಕ ಇಳುವರಿ ನೀಡುವ ತಳಿಗಳ ಕೊರತೆ.",
        solutions: ["ಪ್ರಮಾಣೀಕೃತ ಬೀಜಗಳನ್ನು ಬಳಸಿ.", "ಮೊಳಕೆಯೊಡೆಯುವಿಕೆ ಪರೀಕ್ಷೆ ಮಾಡಿ.", "ಹವಾಮಾನ-ಸ್ಥಿತಿಸ್ಥಾಪಕ ತಳಿಗಳನ್ನು ಅಳವಡಿಸಿಕೊಳ್ಳಿ."]
      },
      {
        id: "supply",
        title: "ಪೂರೈಕೆ ಸರಪಳಿ ಅಸಮರ್ಥತೆ",
        icon: Truck,
        description: "ಕೊಯ್ಲಿನ ನಂತರದ ನಷ್ಟಗಳು ಮತ್ತು ಕಳಪೆ ಮಾರುಕಟ್ಟೆ ಸಂಪರ್ಕಗಳು.",
        solutions: ["ರೈತ ಉತ್ಪಾದಕ ಸಂಸ್ಥೆಗಳನ್ನು (FPO) ರಚಿಸಿ.", "ಶೀತಲ ಶೇಖರಣೆಯನ್ನು ಬಳಸಿ.", "ಡಿಜಿಟಲ್ ವೇದಿಕೆಗಳನ್ನು ಬಳಸಿ."]
      },
      {
        id: "land",
        title: "ಭೂಮಿ ವಿಘಟನೆ ಮತ್ತು ಸಣ್ಣ ಹಿಡುವಳಿಗಳು",
        icon: Map,
        description: "ಸಣ್ಣ, ಚದುರಿದ ಭೂಮಿಗಳು ಯಾಂತ್ರೀಕರಣವನ್ನು ಕಷ್ಟಕರವಾಗಿಸುತ್ತವೆ.",
        solutions: ["ಸಹಕಾರಿ ಕೃಷಿಯನ್ನು ಅಳವಡಿಸಿಕೊಳ್ಳಿ.", "ಬಾಡಿಗೆ ಯಂತ್ರೋಪಕರಣಗಳನ್ನು ಬಳಸಿ.", "ಹೆಚ್ಚಿನ ಮೌಲ್ಯದ ಬೆಳೆಗಳ ಮೇಲೆ ಕೇಂದ್ರೀಕರಿಸಿ."]
      },
      {
        id: "energy",
        title: "ಶಕ್ತಿ ಮತ್ತು ವಿದ್ಯುತ್ ಸಮಸ್ಯೆಗಳು",
        icon: Zap,
        description: "ಅವಿಶ್ವಾಸಾರ್ಹ ವಿದ್ಯುತ್ ಪೂರೈಕೆಯು ನೀರಾವರಿಯ ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುತ್ತದೆ.",
        solutions: ["ಸೌರ ಪಂಪ್‌ಗಳನ್ನು ಸ್ಥಾಪಿಸಿ.", "ಬಯೋಗ್ಯಾಸ್ ಬಳಸಿ.", "ಶಕ್ತಿ-ಸಮರ್ಥ ಉಪಕರಣಗಳನ್ನು ಅಳವಡಿಸಿಕೊಳ್ಳಿ."]
      },
      {
        id: "pest",
        title: "ಕೀಟ ಮತ್ತು ರೋಗ ನಿರ್ವಹಣೆ ವೈಫಲ್ಯ",
        icon: Bug,
        description: "ರಾಸಾಯನಿಕಗಳ ಮೇಲಿನ ಅತಿಯಾದ ಅವಲಂಬನೆ ಮತ್ತು ಮುಂಚಿನ ಪತ್ತೆಯ ಕೊರತೆ.",
        solutions: ["ಸಮಗ್ರ ಕೀಟ ನಿರ್ವಹಣೆ (IPM) ಜಾರಿಗೊಳಿಸಿ.", "ನಮ್ಮ AI ಸಾಧನವನ್ನು ಬಳಸಿ.", "ಬೆಳೆ ತಿರುಗುವಿಕೆಯನ್ನು ಅಭ್ಯಾಸ ಮಾಡಿ."]
      },
      {
        id: "productivity",
        title: "ಕಡಿಮೆ ಉತ್ಪಾದಕತೆ ಮತ್ತು ಹಳೆಯ ಅಭ್ಯಾಸಗಳು",
        icon: TrendingDown,
        description: "ಸಾಂಪ್ರದಾಯಿಕ ಕೃಷಿ ವಿಧಾನಗಳು ಹೆಚ್ಚಾಗಿ ಕಡಿಮೆ ಇಳುವರಿಯನ್ನು ನೀಡುತ್ತವೆ.",
        solutions: [
          "ನಿಖರ ಕೃಷಿ ತಂತ್ರಗಳನ್ನು ಅಳವಡಿಸಿಕೊಳ್ಳಿ.", 
          "KVK ತರಬೇತಿಯಲ್ಲಿ ಭಾಗವಹಿಸಿ.", 
          "ಡೇಟಾ-ಚಾಲಿತ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಿ.",
          "ಉತ್ತಮ ಬೆಳೆ ಮೇಲ್ವಿಚಾರಣೆಗಾಗಿ ಡೇಟಾ ದೃಶ್ಯೀಕರಣವನ್ನು ಬಳಸಿ.",
          "ಹಣಕಾಸು ಮತ್ತು ತಾಂತ್ರಿಕ ಬೆಂಬಲಕ್ಕಾಗಿ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳನ್ನು ಬಳಸಿ.",
          "ಸಸ್ಯಗಳನ್ನು ಬೆಳೆಸುವಲ್ಲಿ ಬಳಸುವ ಕೃಷಿ ತ್ಯಾಜ್ಯ ಮತ್ತು ಕೀಟನಾಶಕಗಳನ್ನು ಪರಿಣಾಮಕಾರಿಯಾಗಿ ನಿರ್ವಹಿಸಿ."
        ]
      },
      {
        id: "soil",
        title: "ಮಣ್ಣಿನ ಅವನತಿ ಮತ್ತು ಫಲವತ್ತತೆ ನಷ್ಟ",
        icon: Mountain,
        description: "ನಿರಂತರ ಬೆಳೆ ಮತ್ತು ರಾಸಾಯನಿಕಗಳ ಅತಿಯಾದ ಬಳಕೆಯು ಮಣ್ಣಿನ ಪೋಷಕಾಂಶಗಳನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.",
        solutions: ["ನಿಯಮಿತ ಮಣ್ಣು ಪರೀಕ್ಷೆ ಮಾಡಿಸಿ.", "ಸಾವಯವ ಗೊಬ್ಬರವನ್ನು ಬಳಸಿ.", "ಕವರ್ ಬೆಳೆಗಳನ್ನು ನೆಡಿ."]
      },
      {
        id: "water",
        title: "ನೀರಿನ ಕೊರತೆ ಮತ್ತು ದುರ್ವ್ಯವಸ್ಥೆ",
        icon: Droplets,
        description: "ಅಂತರ್ಜಲ ಕುಸಿತ ಮತ್ತು ಅಸಮರ್ಥ ನೀರಾವರಿ.",
        solutions: ["ಹನಿ ನೀರಾವರಿಯನ್ನು ಅಳವಡಿಸಿಕೊಳ್ಳಿ.", "ಮಳೆನೀರು ಕೊಯ್ಲು ರಚನೆಗಳನ್ನು ನಿರ್ಮಿಸಿ.", "ಬರ-ಸಹಿಷ್ಣು ಬೆಳೆಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ."]
      }
    ]
  }
};

export default function Challenges() {
  const { language } = useLanguage();
  const t = translations[language] || translations["en-US"];
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-green-100">
        <h1 className="text-2xl font-bold text-gray-800">{t.title}</h1>
        <p className="text-gray-600 mt-2">{t.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {t.challenges.map((challenge: any) => {
          const Icon = challenge.icon;
          const isExpanded = expandedId === challenge.id;

          return (
            <div 
              key={challenge.id} 
              className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                isExpanded ? 'border-green-500 shadow-md ring-1 ring-green-500' : 'border-gray-200 shadow-sm hover:border-green-300'
              }`}
            >
              <button 
                onClick={() => toggleExpand(challenge.id)}
                className="w-full text-left p-5 flex items-start justify-between focus:outline-none"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl ${isExpanded ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{challenge.title}</h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{challenge.description}</p>
                  </div>
                </div>
                <div className="ml-4 mt-1 text-gray-400">
                  {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </div>
              </button>

              {isExpanded && (
                <div className="px-5 pb-5 pt-2 border-t border-gray-100 bg-green-50/30">
                  <h4 className="font-medium text-gray-800 mb-3">Key Solutions:</h4>
                  <ul className="space-y-2 mb-6">
                    {challenge.solutions.map((solution: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0"></span>
                        <span className="text-gray-700 text-sm">{solution}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to={`/expert?topic=${encodeURIComponent(challenge.title)}`}
                    className="inline-flex items-center justify-center w-full py-2.5 px-4 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    {t.askExpert}
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
