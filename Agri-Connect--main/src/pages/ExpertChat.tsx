import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Send, Bot, User, Loader2 } from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { useLocation } from "react-router-dom";

interface Message {
  role: "user" | "model";
  text: string;
}

const translations: Record<string, any> = {
  "en-US": {
    title: "Expert Consultation",
    subtitle: "Chat directly with our AI Agronomist for instant farming advice.",
    aiName: "AI Agronomist",
    placeholder: "Ask about crops, weather, pests...",
    thinking: "Thinking...",
    send: "Send",
    initialMessage: "Hello! I am your AI Agronomist. How can I help you with your farming today?",
    errorMessage: "Sorry, I'm having trouble connecting right now. Please try again later.",
    systemInstruction: "You are an expert agronomist and agricultural advisor. Provide helpful, accurate, and practical advice to farmers regarding crops, weather, soil, pests, and market trends. Keep answers concise and easy to understand. Please respond in English."
  },
  "hi-IN": {
    title: "विशेषज्ञ परामर्श",
    subtitle: "त्वरित कृषि सलाह के लिए हमारे एआई कृषिविज्ञानी से सीधे चैट करें।",
    aiName: "एआई कृषिविज्ञानी",
    placeholder: "फसलों, मौसम, कीटों के बारे में पूछें...",
    thinking: "सोच रहा है...",
    send: "भेजें",
    initialMessage: "नमस्ते! मैं आपका एआई कृषिविज्ञानी हूँ। आज मैं आपकी खेती में कैसे मदद कर सकता हूँ?",
    errorMessage: "क्षमा करें, मुझे अभी कनेक्ट करने में समस्या हो रही है। कृपया बाद में पुनः प्रयास करें।",
    systemInstruction: "आप एक विशेषज्ञ कृषिविज्ञानी और कृषि सलाहकार हैं। किसानों को फसलों, मौसम, मिट्टी, कीटों और बाजार के रुझानों के बारे में उपयोगी, सटीक और व्यावहारिक सलाह प्रदान करें। उत्तर संक्षिप्त और समझने में आसान रखें। कृपया हिंदी में उत्तर दें।"
  },
  "te-IN": {
    title: "నిపుణుల సంప్రదింపులు",
    subtitle: "తక్షణ వ్యవసాయ సలహా కోసం మా AI వ్యవసాయ శాస్త్రవేత్తతో నేరుగా చాట్ చేయండి.",
    aiName: "AI వ్యవసాయ శాస్త్రవేత్త",
    placeholder: "పంటలు, వాతావరణం, తెగుళ్ల గురించి అడగండి...",
    thinking: "ఆలోచిస్తోంది...",
    send: "పంపండి",
    initialMessage: "నమస్కారం! నేను మీ AI వ్యవసాయ శాస్త్రవేత్తను. ఈ రోజు మీ వ్యవసాయంలో నేను మీకు ఎలా సహాయపడగలను?",
    errorMessage: "క్షమించండి, నాకు ఇప్పుడు కనెక్ట్ చేయడంలో సమస్య ఉంది. దయచేసి తర్వాత మళ్లీ ప్రయత్నించండి.",
    systemInstruction: "మీరు నిపుణుడైన వ్యవసాయ శాస్త్రవేత్త మరియు వ్యవసాయ సలహాదారు. పంటలు, వాతావరణం, నేల, తెగుళ్లు మరియు మార్కెట్ పోకడలకు సంబంధించి రైతులకు ఉపయోగకరమైన, ఖచ్చితమైన మరియు ఆచరణాత్మక సలహాలను అందించండి. సమాధానాలను సంక్షిప్తంగా మరియు అర్థం చేసుకోవడానికి సులభంగా ఉంచండి. దయచేసి తెలుగులో స్పందించండి."
  },
  "ta-IN": {
    title: "நிபுணர் ஆலோசனை",
    subtitle: "உடனடி விவசாய ஆலோசனைக்கு எங்கள் AI வேளாண் நிபுணருடன் நேரடியாக அரட்டையடிக்கவும்.",
    aiName: "AI வேளாண் நிபுணர்",
    placeholder: "பயிர்கள், வானிலை, பூச்சிகள் பற்றி கேளுங்கள்...",
    thinking: "சிந்திக்கிறது...",
    send: "அனுப்பு",
    initialMessage: "வணக்கம்! நான் உங்கள் AI வேளாண் நிபுணர். இன்று உங்கள் விவசாயத்திற்கு நான் எவ்வாறு உதவ முடியும்?",
    errorMessage: "மன்னிக்கவும், இப்போது இணைப்பதில் எனக்கு சிக்கல் உள்ளது. தயவுசெய்து பின்னர் மீண்டும் முயற்சிக்கவும்.",
    systemInstruction: "நீங்கள் ஒரு நிபுணத்துவ வேளாண் நிபுணர் மற்றும் விவசாய ஆலோசகர். பயிர்கள், வானிலை, மண், பூச்சிகள் மற்றும் சந்தை போக்குகள் குறித்து விவசாயிகளுக்கு பயனுள்ள, துல்லியமான மற்றும் நடைமுறை ஆலோசனைகளை வழங்கவும். பதில்களை சுருக்கமாகவும் புரிந்துகொள்ள எளிதாகவும் வைக்கவும். தயவுசெய்து தமிழில் பதிலளிக்கவும்."
  },
  "mr-IN": {
    title: "तज्ञ सल्लागार",
    subtitle: "त्वरित शेती सल्ल्यासाठी आमच्या एआय कृषीशास्त्रज्ञांशी थेट गप्पा मारा.",
    aiName: "एआय कृषीशास्त्रज्ञ",
    placeholder: "पिके, हवामान, कीटक याबद्दल विचारा...",
    thinking: "विचार करत आहे...",
    send: "पाठवा",
    initialMessage: "नमस्कार! मी तुमचा एआय कृषीशास्त्रज्ञ आहे. आज मी तुम्हाला तुमच्या शेतीत कशी मदत करू शकेन?",
    errorMessage: "क्षमस्व, मला आता कनेक्ट करण्यात अडचण येत आहे. कृपया नंतर पुन्हा प्रयत्न करा.",
    systemInstruction: "तुम्ही एक तज्ञ कृषीशास्त्रज्ञ आणि कृषी सल्लागार आहात. शेतकऱ्यांना पिके, हवामान, माती, कीटक आणि बाजारातील कल याबद्दल उपयुक्त, अचूक आणि व्यावहारिक सल्ला द्या. उत्तरे संक्षिप्त आणि समजण्यास सोपी ठेवा. कृपया मराठीत उत्तर द्या."
  },
  "kn-IN": {
    title: "ತಜ್ಞರ ಸಮಾಲೋಚನೆ",
    subtitle: "ತ್ವರಿತ ಕೃಷಿ ಸಲಹೆಗಾಗಿ ನಮ್ಮ AI ಕೃಷಿ ವಿಜ್ಞಾನಿಯೊಂದಿಗೆ ನೇರವಾಗಿ ಚಾಟ್ ಮಾಡಿ.",
    aiName: "AI ಕೃಷಿ ವಿಜ್ಞಾನಿ",
    placeholder: "ಬೆಳೆಗಳು, ಹವಾಮಾನ, ಕೀಟಗಳ ಬಗ್ಗೆ ಕೇಳಿ...",
    thinking: "ಯೋಚಿಸುತ್ತಿದೆ...",
    send: "ಕಳುಹಿಸಿ",
    initialMessage: "ನಮಸ್ಕಾರ! ನಾನು ನಿಮ್ಮ AI ಕೃಷಿ ವಿಜ್ಞಾನಿ. ಇಂದು ನಿಮ್ಮ ಕೃಷಿಯಲ್ಲಿ ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?",
    errorMessage: "ಕ್ಷಮಿಸಿ, ನನಗೆ ಈಗ ಸಂಪರ್ಕಿಸಲು ತೊಂದರೆಯಾಗುತ್ತಿದೆ. ದಯವಿಟ್ಟು ನಂತರ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
    systemInstruction: "ನೀವು ಪರಿಣಿತ ಕೃಷಿ ವಿಜ್ಞಾನಿ ಮತ್ತು ಕೃಷಿ ಸಲಹೆಗಾರರಾಗಿದ್ದೀರಿ. ಬೆಳೆಗಳು, ಹವಾಮಾನ, ಮಣ್ಣು, ಕೀಟಗಳು ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಪ್ರವೃತ್ತಿಗಳಿಗೆ ಸಂಬಂಧಿಸಿದಂತೆ ರೈತರಿಗೆ ಉಪಯುಕ್ತ, ನಿಖರ ಮತ್ತು ಪ್ರಾಯೋಗಿಕ ಸಲಹೆಗಳನ್ನು ಒದಗಿಸಿ. ಉತ್ತರಗಳನ್ನು ಸಂಕ್ಷಿಪ್ತವಾಗಿ ಮತ್ತು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಸುಲಭವಾಗಿ ಇರಿಸಿ. ದಯವಿಟ್ಟು ಕನ್ನಡದಲ್ಲಿ ಪ್ರತಿಕ್ರಿಯಿಸಿ."
  }
};

export default function ExpertChat() {
  const { language } = useLanguage();
  const t = translations[language] || translations["en-US"];
  const location = useLocation();

  const [messages, setMessages] = useState<Message[]>([
    { role: "model", text: t.initialMessage }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const topic = params.get("topic");
    if (topic) {
      setInput(`I need advice regarding: ${topic}`);
    }
  }, [location]);

  // Update initial message when language changes
  useEffect(() => {
    setMessages(prev => {
      if (prev.length === 1 && prev[0].role === "model") {
        return [{ role: "model", text: t.initialMessage }];
      }
      return prev;
    });
  }, [language, t.initialMessage]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      // Format previous messages for context
      const contents = messages.map(m => `${m.role === 'user' ? 'Farmer' : 'Agronomist'}: ${m.text}`).join('\n');
      const prompt = `${contents}\nFarmer: ${userMessage}\nAgronomist:`;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
          systemInstruction: t.systemInstruction,
        }
      });

      if (response.text) {
        setMessages((prev) => [...prev, { role: "model", text: response.text || "I'm sorry, I couldn't process that." }]);
      }
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      setMessages((prev) => [...prev, { role: "model", text: t.errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col space-y-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">{t.title}</h1>
        <p className="text-gray-500 mt-2">{t.subtitle}</p>
      </div>

      <Card className="flex-1 flex flex-col overflow-hidden shadow-md border-green-100">
        <CardHeader className="bg-green-50 border-b border-green-100 pb-4">
          <CardTitle className="flex items-center text-green-800">
            <Bot className="w-6 h-6 mr-2 text-green-600" />
            {t.aiName}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`flex max-w-[80%] rounded-2xl px-4 py-3 ${
                  msg.role === "user"
                    ? "bg-green-600 text-white rounded-tr-sm"
                    : "bg-white border border-gray-200 text-gray-800 rounded-tl-sm shadow-sm"
                }`}
              >
                {msg.role === "model" && <Bot className="w-5 h-5 mr-3 mt-0.5 text-green-600 shrink-0" />}
                <div className="whitespace-pre-wrap text-sm leading-relaxed">{msg.text}</div>
                {msg.role === "user" && <User className="w-5 h-5 ml-3 mt-0.5 text-green-200 shrink-0" />}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center shadow-sm">
                <Loader2 className="w-5 h-5 mr-2 animate-spin text-green-600" />
                <span className="text-sm text-gray-500">{t.thinking}</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </CardContent>

        <div className="p-4 bg-white border-t border-gray-100">
          <form onSubmit={handleSend} className="flex space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.placeholder}
              className="flex-1 focus-visible:ring-green-500"
              disabled={isLoading}
            />
            <Button type="submit" disabled={isLoading || !input.trim()} className="bg-green-600 hover:bg-green-700">
              <Send className="w-4 h-4" />
              <span className="sr-only">{t.send}</span>
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
}
