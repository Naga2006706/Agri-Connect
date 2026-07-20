import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Upload, Loader2, Bug, Image as ImageIcon, Volume2, Square, Mic, Send, User, Bot } from "lucide-react";
import { GoogleGenAI, Modality } from "@google/genai";
import { useLanguage } from "@/src/contexts/LanguageContext";

const translations: Record<string, any> = {
  "en-US": {
    title: "Crop Disease Detection",
    subtitle: "Upload a photo of your crop to identify diseases, pests, or deficiencies instantly.",
    uploadTitle: "Upload Image",
    uploadDesc: "Take a clear photo of the affected plant leaf or stem.",
    clickToUpload: "Click to upload or drag and drop",
    fileHint: "PNG, JPG or JPEG (max 5MB)",
    clearBtn: "Clear",
    analyzingBtn: "Analyzing...",
    analyzeBtn: "Analyze Crop",
    resultTitle: "Analysis Result",
    resultDesc: "AI-powered diagnosis and recommendations.",
    stopAudio: "Stop Audio",
    readAloud: "Read Aloud",
    loadingResult: "Our AI Agronomist is analyzing your image...",
    emptyResult: "Upload an image and click 'Analyze' to see results here."
  },
  "hi-IN": {
    title: "फसल रोग पहचान",
    subtitle: "बीमारियों और कीटों की तुरंत पहचान करने के लिए अपनी फसल की फोटो अपलोड करें।",
    uploadTitle: "फोटो अपलोड करें",
    uploadDesc: "प्रभावित पौधे की पत्ती या तने की साफ फोटो लें।",
    clickToUpload: "अपलोड करने के लिए क्लिक करें",
    fileHint: "PNG, JPG या JPEG (अधिकतम 5MB)",
    clearBtn: "हटाएं",
    analyzingBtn: "जांच हो रही है...",
    analyzeBtn: "फसल की जांच करें",
    resultTitle: "परिणाम",
    resultDesc: "AI द्वारा निदान और सुझाव।",
    stopAudio: "ऑडियो रोकें",
    readAloud: "पढ़कर सुनाएं",
    loadingResult: "हमारा AI आपकी फोटो की जांच कर रहा है...",
    emptyResult: "फोटो अपलोड करें और परिणाम देखने के लिए 'जांच करें' पर क्लिक करें।"
  },
  "te-IN": {
    title: "పంట వ్యాధి గుర్తింపు",
    subtitle: "మీ పంట ఫోటోను అప్‌లోడ్ చేసి, వ్యాధులు లేదా పురుగులను వెంటనే తెలుసుకోండి.",
    uploadTitle: "ఫోటో అప్‌లోడ్ చేయండి",
    uploadDesc: "వ్యాధి ఉన్న ఆకు లేదా కాండం ఫోటో తీయండి.",
    clickToUpload: "అప్‌లోడ్ చేయడానికి ఇక్కడ నొక్కండి",
    fileHint: "PNG, JPG లేదా JPEG (గరిష్టంగా 5MB)",
    clearBtn: "తొలగించు",
    analyzingBtn: "పరిశీలిస్తోంది...",
    analyzeBtn: "పంటను పరీక్షించు",
    resultTitle: "ఫలితం",
    resultDesc: "AI ద్వారా వ్యాధి గుర్తింపు మరియు సలహాలు.",
    stopAudio: "ఆడియో ఆపు",
    readAloud: "చదివి వినిపించు",
    loadingResult: "మా AI మీ ఫోటోను పరిశీలిస్తోంది...",
    emptyResult: "ఫోటో అప్‌లోడ్ చేసి 'పంటను పరీక్షించు' నొక్కండి."
  },
  "ta-IN": {
    title: "பயிர் நோய் கண்டறிதல்",
    subtitle: "நோய்கள் மற்றும் பூச்சிகளை உடனடியாக கண்டறிய உங்கள் பயிரின் புகைப்படத்தை பதிவேற்றவும்.",
    uploadTitle: "புகைப்படம் பதிவேற்று",
    uploadDesc: "பாதிக்கப்பட்ட இலை அல்லது தண்டின் தெளிவான புகைப்படத்தை எடுக்கவும்.",
    clickToUpload: "பதிவேற்ற கிளிக் செய்யவும்",
    fileHint: "PNG, JPG அல்லது JPEG (அதிகபட்சம் 5MB)",
    clearBtn: "அழி",
    analyzingBtn: "பகுப்பாய்வு செய்கிறது...",
    analyzeBtn: "பயிரை பகுப்பாய்வு செய்",
    resultTitle: "முடிவு",
    resultDesc: "AI மூலம் நோய் கண்டறிதல் மற்றும் பரிந்துரைகள்.",
    stopAudio: "ஆடியோவை நிறுத்து",
    readAloud: "படித்து காட்டு",
    loadingResult: "எங்கள் AI உங்கள் புகைப்படத்தை பகுப்பாய்வு செய்கிறது...",
    emptyResult: "புகைப்படத்தை பதிவேற்றி முடிவுகளைக் காண 'பகுப்பாய்வு செய்' என்பதைக் கிளிக் செய்யவும்."
  },
  "mr-IN": {
    title: "पीक रोग ओळख",
    subtitle: "रोग आणि कीड त्वरित ओळखण्यासाठी तुमच्या पिकाचा फोटो अपलोड करा.",
    uploadTitle: "फोटो अपलोड करा",
    uploadDesc: "बाधित पान किंवा खोडाचा स्पष्ट फोटो घ्या.",
    clickToUpload: "अपलोड करण्यासाठी क्लिक करा",
    fileHint: "PNG, JPG किंवा JPEG (कमाल 5MB)",
    clearBtn: "काढून टाका",
    analyzingBtn: "तपासणी करत आहे...",
    analyzeBtn: "पिकाची तपासणी करा",
    resultTitle: "निकाल",
    resultDesc: "AI द्वारे निदान आणि शिफारसी.",
    stopAudio: "ऑडिओ थांबवा",
    readAloud: "वाचून दाखवा",
    loadingResult: "आमचे AI तुमच्या फोटोची तपासणी करत आहे...",
    emptyResult: "फोटो अपलोड करा आणि निकाल पाहण्यासाठी 'तपासणी करा' वर क्लिक करा."
  },
  "kn-IN": {
    title: "ಬೆಳೆ ರೋಗ ಪತ್ತೆ",
    subtitle: "ರೋಗಗಳು ಮತ್ತು ಕೀಟಗಳನ್ನು ತಕ್ಷಣವೇ ಗುರುತಿಸಲು ನಿಮ್ಮ ಬೆಳೆಯ ಫೋಟೋವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
    uploadTitle: "ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
    uploadDesc: "ಬಾಧಿತ ಎಲೆ ಅಥವಾ ಕಾಂಡದ ಸ್ಪಷ್ಟ ಫೋಟೋ ತೆಗೆದುಕೊಳ್ಳಿ.",
    clickToUpload: "ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ",
    fileHint: "PNG, JPG ಅಥವಾ JPEG (ಗರಿಷ್ಠ 5MB)",
    clearBtn: "ಅಳಿಸು",
    analyzingBtn: "ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ...",
    analyzeBtn: "ಬೆಳೆಯನ್ನು ಪರಿಶೀಲಿಸಿ",
    resultTitle: "ಫಲಿತಾಂಶ",
    resultDesc: "AI ಮೂಲಕ ರೋಗ ಪತ್ತೆ ಮತ್ತು ಸಲಹೆಗಳು.",
    stopAudio: "ಆಡಿಯೋ ನಿಲ್ಲಿಸಿ",
    readAloud: "ಓದಿ ಹೇಳಿ",
    loadingResult: "ನಮ್ಮ AI ನಿಮ್ಮ ಫೋಟೋವನ್ನು ಪರಿಶೀಲಿಸುತ್ತಿದೆ...",
    emptyResult: "ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ಮತ್ತು ಫಲಿತಾಂಶಗಳನ್ನು ನೋಡಲು 'ಪರಿಶೀಲಿಸಿ' ಕ್ಲಿಕ್ ಮಾಡಿ."
  }
};

export default function DiseaseDetection() {
  const [image, setImage] = useState<string | null>(null);
  const [mimeType, setMimeType] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  const [followUps, setFollowUps] = useState<{role: "user" | "model", text: string}[]>([]);
  const [followUpInput, setFollowUpInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isFollowUpLoading, setIsFollowUpLoading] = useState(false);
  
  const { language } = useLanguage();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const languages = [
    { code: "en-US", name: "English", prompt: "English" },
    { code: "hi-IN", name: "Hindi (हिंदी)", prompt: "Hindi" },
    { code: "te-IN", name: "Telugu (తెలుగు)", prompt: "Telugu" },
    { code: "ta-IN", name: "Tamil (தமிழ்)", prompt: "Tamil" },
    { code: "mr-IN", name: "Marathi (मराठी)", prompt: "Marathi" },
    { code: "kn-IN", name: "Kannada (ಕನ್ನಡ)", prompt: "Kannada" },
  ];

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleSpeech = async () => {
    if (isSpeaking) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else if (result) {
      setIsSpeaking(true);
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        const cleanText = result.replace(/[*#_~`]/g, '');
        
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash-preview-tts",
          contents: [{ parts: [{ text: cleanText }] }],
          config: {
            responseModalities: [Modality.AUDIO],
            speechConfig: {
              voiceConfig: {
                prebuiltVoiceConfig: { voiceName: 'Kore' },
              }
            }
          }
        });
        
        const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
        if (base64Audio) {
          const audioUrl = `data:audio/wav;base64,${base64Audio}`;
          const audio = new Audio(audioUrl);
          audioRef.current = audio;
          audio.onended = () => setIsSpeaking(false);
          audio.onerror = () => setIsSpeaking(false);
          audio.play();
        } else {
          setIsSpeaking(false);
        }
      } catch (error) {
        console.error("TTS Error:", error);
        const utterance = new SpeechSynthesisUtterance(result.replace(/[*#_~`]/g, ''));
        utterance.onend = () => setIsSpeaking(false);
        window.speechSynthesis.speak(utterance);
      }
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setMimeType(file.type);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setResult(null);
        setFollowUps([]);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async () => {
    if (!image || !mimeType) return;
    setIsLoading(true);
    window.speechSynthesis.cancel();
    if (audioRef.current) audioRef.current.pause();
    setIsSpeaking(false);
    setFollowUps([]);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const base64Data = image.split(',')[1];

      const targetLang = languages.find(l => l.code === language)?.prompt || 'English';

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: {
          parts: [
            {
              inlineData: {
                mimeType: mimeType,
                data: base64Data
              }
            },
            {
              text: `You are an expert plant pathologist and agronomist. Analyze this image of a plant or crop. Identify any visible diseases, pests, or nutrient deficiencies. Provide the name of the issue, a brief description, recommended treatments, and specifically list recommended pesticides (both organic and chemical) with their common market names. CRITICAL: You must respond entirely in ${targetLang}. Use extremely basic, colloquial, and conversational ${targetLang} (like a local farmer talking to another farmer). Do not use fluent, formal, or complex vocabulary. Avoid all scientific terms. Keep sentences short and simple. If the plant looks healthy, state that it looks healthy in basic ${targetLang}. Format the response clearly.`
            }
          ]
        }
      });

      setResult(response.text || "Could not analyze the image.");
    } catch (error) {
      console.error("Error analyzing image:", error);
      setResult("Sorry, there was an error analyzing the image. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          audioChunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const reader = new FileReader();
        reader.readAsDataURL(audioBlob);
        reader.onloadend = () => {
          const base64data = (reader.result as string).split(',')[1];
          handleSendFollowUp(undefined, base64data, 'audio/webm');
        };
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
      alert("Microphone access is required to record audio.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleSendFollowUp = async (text?: string, base64Audio?: string, audioMimeType?: string) => {
    if (isFollowUpLoading) return;
    
    const userMessage = text || "🎤 Voice Message";
    setFollowUps(prev => [...prev, { role: "user", text: userMessage }]);
    setIsFollowUpLoading(true);
    setFollowUpInput("");

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const targetLang = languages.find(l => l.code === language)?.prompt || 'English';
      
      const historyText = followUps.map(m => `${m.role === 'user' ? 'Farmer' : 'Agronomist'}: ${m.text}`).join('\n');
      const prompt = `Original Diagnosis: ${result}\n\n${historyText}\nFarmer: ${text ? text : '[Voice Message]'}\nAgronomist:`;

      const parts: any[] = [];
      if (image && mimeType) {
        parts.push({ inlineData: { mimeType: mimeType, data: image.split(',')[1] } });
      }
      if (base64Audio && audioMimeType) {
        parts.push({ inlineData: { mimeType: audioMimeType, data: base64Audio } });
      }
      parts.push({ text: prompt });

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: { parts },
        config: {
          systemInstruction: `You are an expert plant pathologist and agronomist. Answer the farmer's follow-up questions about the crop diagnosis. CRITICAL: You must respond entirely in ${targetLang}. Use extremely basic, colloquial, and conversational ${targetLang}. Keep sentences short and simple.`
        }
      });

      if (response.text) {
        setFollowUps(prev => [...prev, { role: "model", text: response.text || "I'm sorry, I couldn't process that." }]);
      }
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      setFollowUps(prev => [...prev, { role: "model", text: "Sorry, there was an error processing your question." }]);
    } finally {
      setIsFollowUpLoading(false);
    }
  };

  const t = translations[language] || translations["en-US"];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">{t.title}</h1>
        <p className="text-gray-500 mt-2">{t.subtitle}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>{t.uploadTitle}</CardTitle>
                <CardDescription>{t.uploadDesc}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div 
              className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            >
              {image ? (
                <img src={image} alt="Crop preview" className="mx-auto max-h-64 object-contain rounded-md" />
              ) : (
                <div className="flex flex-col items-center space-y-2 text-gray-500">
                  <Upload className="w-10 h-10 text-gray-400" />
                  <p className="font-medium">{t.clickToUpload}</p>
                  <p className="text-xs">{t.fileHint}</p>
                </div>
              )}
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
            
            <div className="flex justify-end space-x-2">
              {image && (
                <Button variant="outline" onClick={() => { setImage(null); setResult(null); }}>
                  {t.clearBtn}
                </Button>
              )}
              <Button 
                onClick={analyzeImage} 
                disabled={!image || isLoading}
                className="bg-green-600 hover:bg-green-700"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {t.analyzingBtn}
                  </>
                ) : (
                  <>
                    <Bug className="w-4 h-4 mr-2" />
                    {t.analyzeBtn}
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-50">
          <CardHeader className="flex flex-row items-start justify-between pb-2 space-y-0">
            <div className="space-y-1">
              <CardTitle>{t.resultTitle}</CardTitle>
              <CardDescription>{t.resultDesc}</CardDescription>
            </div>
            {result && !isLoading && (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={toggleSpeech} 
                className="text-green-700 border-green-200 hover:bg-green-100 shrink-0"
              >
                {isSpeaking ? (
                  <><Square className="w-4 h-4 mr-2" /> {t.stopAudio}</>
                ) : (
                  <><Volume2 className="w-4 h-4 mr-2" /> {t.readAloud}</>
                )}
              </Button>
            )}
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex flex-col items-center justify-center h-64 space-y-4 text-gray-500">
                <Loader2 className="w-10 h-10 animate-spin text-green-600" />
                <p>{t.loadingResult}</p>
              </div>
            ) : result ? (
              <div className="flex flex-col h-full">
                <div className="prose prose-sm max-w-none whitespace-pre-wrap text-gray-800">
                  {result}
                </div>
                
                <div className="mt-6 border-t border-gray-200 pt-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Ask Follow-up Questions</h4>
                  
                  <div className="space-y-3 mb-4 max-h-60 overflow-y-auto pr-2">
                    {followUps.map((msg, index) => (
                      <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                        <div className={`flex max-w-[85%] rounded-2xl px-3 py-2 ${msg.role === "user" ? "bg-green-600 text-white rounded-tr-sm" : "bg-white border border-gray-200 text-gray-800 rounded-tl-sm shadow-sm"}`}>
                          <div className="whitespace-pre-wrap text-sm">{msg.text}</div>
                        </div>
                      </div>
                    ))}
                    {isFollowUpLoading && (
                      <div className="flex justify-start">
                        <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-sm px-3 py-2 flex items-center shadow-sm">
                          <Loader2 className="w-4 h-4 mr-2 animate-spin text-green-600" />
                          <span className="text-sm text-gray-500">Thinking...</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <form onSubmit={(e) => { e.preventDefault(); if(followUpInput.trim()) handleSendFollowUp(followUpInput); }} className="flex space-x-2">
                    <Input
                      value={isRecording ? "Recording audio..." : followUpInput}
                      onChange={(e) => setFollowUpInput(e.target.value)}
                      placeholder="Ask about the diagnosis..."
                      className={`flex-1 text-sm ${isRecording ? 'text-red-500 animate-pulse bg-red-50' : ''}`}
                      disabled={isFollowUpLoading || isRecording}
                    />
                    {isRecording ? (
                      <Button type="button" onClick={stopRecording} variant="destructive" size="icon" className="shrink-0">
                        <Square className="w-4 h-4" />
                      </Button>
                    ) : (
                      <Button type="button" onClick={startRecording} variant="outline" size="icon" disabled={isFollowUpLoading} className="shrink-0 text-green-600 border-green-200 hover:bg-green-50">
                        <Mic className="w-4 h-4" />
                      </Button>
                    )}
                    <Button type="submit" disabled={isFollowUpLoading || isRecording || !followUpInput.trim()} size="icon" className="bg-green-600 hover:bg-green-700 shrink-0">
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 space-y-4 text-gray-400">
                <ImageIcon className="w-12 h-12 opacity-20" />
                <p>{t.emptyResult}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
