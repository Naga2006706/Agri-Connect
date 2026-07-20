import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Calendar, MapPin, Users } from "lucide-react";
import React, { useState } from "react";
import { useLanguage } from "@/src/contexts/LanguageContext";

const translations: Record<string, any> = {
  "en-US": {
    title: "Agricultural Events",
    subtitle: "Discover and register for upcoming farming events and workshops.",
    expected: "expected",
    registered: "Registered",
    fullName: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    confirm: "Confirm",
    cancel: "Cancel",
    registerNow: "Register Now",
    registrationSuccess: "Registration successful!",
    events: {
      "AgriTech Expo 2026": {
        title: "AgriTech Expo 2026",
        date: "Tomorrow, 9:00 AM",
        location: "Convention Center, Cityville",
        description: "Annual exhibition of the latest agricultural technologies, machinery, and software."
      },
      "Sustainable Farming Workshop": {
        title: "Sustainable Farming Workshop",
        date: "April 15, 2026, 10:00 AM",
        location: "Green Acres Farm",
        description: "Hands-on workshop on organic farming practices and soil health management."
      },
      "Crop Market Outlook Seminar": {
        title: "Crop Market Outlook Seminar",
        date: "May 2, 2026, 2:00 PM",
        location: "Online Webinar",
        description: "Expert analysis on global crop market trends and pricing forecasts for the upcoming season."
      }
    }
  },
  "hi-IN": {
    title: "कृषि कार्यक्रम",
    subtitle: "आगामी कृषि कार्यक्रमों और कार्यशालाओं की खोज करें और पंजीकरण करें।",
    expected: "अपेक्षित",
    registered: "पंजीकृत",
    fullName: "पूरा नाम",
    email: "ईमेल पता",
    phone: "फोन नंबर",
    confirm: "पुष्टि करें",
    cancel: "रद्द करें",
    registerNow: "अभी पंजीकरण करें",
    registrationSuccess: "पंजीकरण सफल!",
    events: {
      "AgriTech Expo 2026": {
        title: "एग्रीटेक एक्सपो 2026",
        date: "कल, सुबह 9:00 बजे",
        location: "कन्वेंशन सेंटर, सिटीविले",
        description: "नवीनतम कृषि प्रौद्योगिकियों, मशीनरी और सॉफ्टवेयर की वार्षिक प्रदर्शनी।"
      },
      "Sustainable Farming Workshop": {
        title: "सतत खेती कार्यशाला",
        date: "15 अप्रैल, 2026, सुबह 10:00 बजे",
        location: "ग्रीन एकर्स फार्म",
        description: "जैविक खेती प्रथाओं और मिट्टी के स्वास्थ्य प्रबंधन पर व्यावहारिक कार्यशाला।"
      },
      "Crop Market Outlook Seminar": {
        title: "फसल बाजार आउटलुक संगोष्ठी",
        date: "2 मई, 2026, दोपहर 2:00 बजे",
        location: "ऑनलाइन वेबिनार",
        description: "आगामी सीज़न के लिए वैश्विक फसल बाजार के रुझान और मूल्य निर्धारण पूर्वानुमानों पर विशेषज्ञ विश्लेषण।"
      }
    }
  },
  "te-IN": {
    title: "వ్యవసాయ కార్యక్రమాలు",
    subtitle: "రాబోయే వ్యవసాయ కార్యక్రమాలు మరియు వర్క్‌షాప్‌లను కనుగొనండి మరియు నమోదు చేసుకోండి.",
    expected: "ఆశించిన",
    registered: "నమోదైంది",
    fullName: "పూర్తి పేరు",
    email: "ఇమెయిల్ చిరునామా",
    phone: "ఫోన్ నంబర్",
    confirm: "నిర్ధారించండి",
    cancel: "రద్దు చేయండి",
    registerNow: "ఇప్పుడే నమోదు చేసుకోండి",
    registrationSuccess: "నమోదు విజయవంతమైంది!",
    events: {
      "AgriTech Expo 2026": {
        title: "అగ్రిటెక్ ఎక్స్‌పో 2026",
        date: "రేపు, ఉదయం 9:00",
        location: "కన్వెన్షన్ సెంటర్, సిటీవిల్లే",
        description: "సరికొత్త వ్యవసాయ సాంకేతికతలు, యంత్రాలు మరియు సాఫ్ట్‌వేర్ యొక్క వార్షిక ప్రదర్శన."
      },
      "Sustainable Farming Workshop": {
        title: "స్థిరమైన వ్యవసాయ వర్క్‌షాప్",
        date: "ఏప్రిల్ 15, 2026, ఉదయం 10:00",
        location: "గ్రీన్ ఎకర్స్ ఫామ్",
        description: "సేంద్రీయ వ్యవసాయ పద్ధతులు మరియు నేల ఆరోగ్య నిర్వహణపై ప్రయోగాత్మక వర్క్‌షాప్."
      },
      "Crop Market Outlook Seminar": {
        title: "క్రాప్ మార్కెట్ ఔట్‌లుక్ సెమినార్",
        date: "మే 2, 2026, మధ్యాహ్నం 2:00",
        location: "ఆన్‌లైన్ వెబ్‌నార్",
        description: "రాబోయే సీజన్ కోసం ప్రపంచ పంట మార్కెట్ పోకడలు మరియు ధరల అంచనాలపై నిపుణుల విశ్లేషణ."
      }
    }
  },
  "ta-IN": {
    title: "விவசாய நிகழ்வுகள்",
    subtitle: "வரவிருக்கும் விவசாய நிகழ்வுகள் மற்றும் பட்டறைகளைக் கண்டறிந்து பதிவு செய்யவும்.",
    expected: "எதிர்பார்க்கப்படுகிறது",
    registered: "பதிவு செய்யப்பட்டது",
    fullName: "முழு பெயர்",
    email: "மின்னஞ்சல் முகவரி",
    phone: "தொலைபேசி எண்",
    confirm: "உறுதிப்படுத்து",
    cancel: "ரத்துசெய்",
    registerNow: "இப்போது பதிவு செய்",
    registrationSuccess: "பதிவு வெற்றிகரமானது!",
    events: {
      "AgriTech Expo 2026": {
        title: "அக்ரிடெக் எக்ஸ்போ 2026",
        date: "நாளை, காலை 9:00 மணி",
        location: "மாநாட்டு மையம், சிட்டிவில்லே",
        description: "சமீபத்திய விவசாய தொழில்நுட்பங்கள், இயந்திரங்கள் மற்றும் மென்பொருளின் வருடாந்திர கண்காட்சி."
      },
      "Sustainable Farming Workshop": {
        title: "நிலையான விவசாய பட்டறை",
        date: "ஏப்ரல் 15, 2026, காலை 10:00 மணி",
        location: "கிரீன் ஏக்கர்ஸ் பண்ணை",
        description: "கரிம வேளாண்மை நடைமுறைகள் மற்றும் மண் சுகாதார மேலாண்மை குறித்த நேரடி பட்டறை."
      },
      "Crop Market Outlook Seminar": {
        title: "பயிர் சந்தை அவுட்லுக் கருத்தரங்கு",
        date: "மே 2, 2026, மதியம் 2:00 மணி",
        location: "ஆன்லைன் வெபினார்",
        description: "வரவிருக்கும் பருவத்திற்கான உலகளாவிய பயிர் சந்தை போக்குகள் மற்றும் விலை கணிப்புகள் குறித்த நிபுணர் பகுப்பாய்வு."
      }
    }
  },
  "mr-IN": {
    title: "कृषी कार्यक्रम",
    subtitle: "आगामी कृषी कार्यक्रम आणि कार्यशाळा शोधा आणि नोंदणी करा.",
    expected: "अपेक्षित",
    registered: "नोंदणीकृत",
    fullName: "पूर्ण नाव",
    email: "ईमेल पत्ता",
    phone: "फोन नंबर",
    confirm: "पुष्टी करा",
    cancel: "रद्द करा",
    registerNow: "आता नोंदणी करा",
    registrationSuccess: "नोंदणी यशस्वी!",
    events: {
      "AgriTech Expo 2026": {
        title: "अॅग्रीटेक एक्स्पो 2026",
        date: "उद्या, सकाळी 9:00",
        location: "कन्व्हेन्शन सेंटर, सिटीव्हिल",
        description: "नवीनतम कृषी तंत्रज्ञान, यंत्रसामग्री आणि सॉफ्टवेअरचे वार्षिक प्रदर्शन."
      },
      "Sustainable Farming Workshop": {
        title: "शाश्वत शेती कार्यशाळा",
        date: "15 एप्रिल, 2026, सकाळी 10:00",
        location: "ग्रीन एकर्स फार्म",
        description: "सेंद्रिय शेती पद्धती आणि माती आरोग्य व्यवस्थापनावर प्रात्यक्षिक कार्यशाळा."
      },
      "Crop Market Outlook Seminar": {
        title: "पीक बाजार आउटलुक सेमिनार",
        date: "2 मे, 2026, दुपारी 2:00",
        location: "ऑनलाइन वेबिनार",
        description: "आगामी हंगामासाठी जागतिक पीक बाजारातील कल आणि किंमतीच्या अंदाजांवर तज्ञांचे विश्लेषण."
      }
    }
  },
  "kn-IN": {
    title: "ಕೃಷಿ ಘಟನೆಗಳು",
    subtitle: "ಮುಂಬರುವ ಕೃಷಿ ಘಟನೆಗಳು ಮತ್ತು ಕಾರ್ಯಾಗಾರಗಳನ್ನು ಅನ್ವೇಷಿಸಿ ಮತ್ತು ನೋಂದಾಯಿಸಿ.",
    expected: "ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ",
    registered: "ನೋಂದಾಯಿಸಲಾಗಿದೆ",
    fullName: "ಪೂರ್ಣ ಹೆಸರು",
    email: "ಇಮೇಲ್ ವಿಳಾಸ",
    phone: "ಫೋನ್ ಸಂಖ್ಯೆ",
    confirm: "ಖಚಿತಪಡಿಸಿ",
    cancel: "ರದ್ದುಗೊಳಿಸಿ",
    registerNow: "ಈಗ ನೋಂದಾಯಿಸಿ",
    registrationSuccess: "ನೋಂದಣಿ ಯಶಸ್ವಿಯಾಗಿದೆ!",
    events: {
      "AgriTech Expo 2026": {
        title: "ಅಗ್ರಿಟೆಕ್ ಎಕ್ಸ್‌ಪೋ 2026",
        date: "ನಾಳೆ, ಬೆಳಿಗ್ಗೆ 9:00",
        location: "ಕನ್ವೆನ್ಷನ್ ಸೆಂಟರ್, ಸಿಟಿವಿಲ್ಲೆ",
        description: "ಇತ್ತೀಚಿನ ಕೃಷಿ ತಂತ್ರಜ್ಞಾನಗಳು, ಯಂತ್ರೋಪಕರಣಗಳು ಮತ್ತು ಸಾಫ್ಟ್‌ವೇರ್‌ಗಳ ವಾರ್ಷಿಕ ಪ್ರದರ್ಶನ."
      },
      "Sustainable Farming Workshop": {
        title: "ಸುಸ್ಥಿರ ಕೃಷಿ ಕಾರ್ಯಾಗಾರ",
        date: "ಏಪ್ರಿಲ್ 15, 2026, ಬೆಳಿಗ್ಗೆ 10:00",
        location: "ಗ್ರೀನ್ ಎಕರ್ಸ್ ಫಾರ್ಮ್",
        description: "ಸಾವಯವ ಕೃಷಿ ಪದ್ಧತಿಗಳು ಮತ್ತು ಮಣ್ಣಿನ ಆರೋಗ್ಯ ನಿರ್ವಹಣೆಯ ಕುರಿತು ಪ್ರಾಯೋಗಿಕ ಕಾರ್ಯಾಗಾರ."
      },
      "Crop Market Outlook Seminar": {
        title: "ಬೆಳೆ ಮಾರುಕಟ್ಟೆ ಔಟ್ಲುಕ್ ಸೆಮಿನಾರ್",
        date: "ಮೇ 2, 2026, ಮಧ್ಯಾಹ್ನ 2:00",
        location: "ಆನ್‌ಲೈನ್ ವೆಬಿನಾರ್",
        description: "ಮುಂಬರುವ ಋತುವಿನ ಜಾಗತಿಕ ಬೆಳೆ ಮಾರುಕಟ್ಟೆ ಪ್ರವೃತ್ತಿಗಳು ಮತ್ತು ಬೆಲೆ ಮುನ್ಸೂಚನೆಗಳ ಕುರಿತು ತಜ್ಞರ ವಿಶ್ಲೇಷಣೆ."
      }
    }
  }
};

export default function Events() {
  const [registeredEvents, setRegisteredEvents] = useState<number[]>([]);
  const [showForm, setShowForm] = useState<number | null>(null);
  const { language } = useLanguage();
  const t = translations[language] || translations["en-US"];

  const events = [
    {
      id: 1,
      title: "AgriTech Expo 2026",
      date: "Tomorrow, 9:00 AM",
      location: "Convention Center, Cityville",
      attendees: 1200,
      description: "Annual exhibition of the latest agricultural technologies, machinery, and software.",
    },
    {
      id: 2,
      title: "Sustainable Farming Workshop",
      date: "April 15, 2026, 10:00 AM",
      location: "Green Acres Farm",
      attendees: 50,
      description: "Hands-on workshop on organic farming practices and soil health management.",
    },
    {
      id: 3,
      title: "Crop Market Outlook Seminar",
      date: "May 2, 2026, 2:00 PM",
      location: "Online Webinar",
      attendees: 300,
      description: "Expert analysis on global crop market trends and pricing forecasts for the upcoming season.",
    },
  ];

  const handleRegister = (e: React.FormEvent, eventId: number) => {
    e.preventDefault();
    setRegisteredEvents([...registeredEvents, eventId]);
    setShowForm(null);
    alert(t.registrationSuccess);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">{t.title}</h1>
        <p className="text-gray-500 mt-2">{t.subtitle}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => {
          const eventData = t.events[event.title] || event;
          return (
          <Card key={event.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{eventData.title}</CardTitle>
              <CardDescription className="flex flex-col space-y-1 mt-2">
                <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {eventData.date}</span>
                <span className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> {eventData.location}</span>
                <span className="flex items-center"><Users className="w-4 h-4 mr-2" /> {event.attendees} {t.expected}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-gray-700">{eventData.description}</p>
            </CardContent>
            <CardFooter>
              {registeredEvents.includes(event.id) ? (
                <Button variant="secondary" className="w-full" disabled>{t.registered}</Button>
              ) : showForm === event.id ? (
                <form onSubmit={(e) => handleRegister(e, event.id)} className="w-full space-y-3">
                  <Input required placeholder={t.fullName} />
                  <Input required type="email" placeholder={t.email} />
                  <Input required placeholder={t.phone} />
                  <div className="flex space-x-2">
                    <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700">{t.confirm}</Button>
                    <Button type="button" variant="outline" onClick={() => setShowForm(null)}>{t.cancel}</Button>
                  </div>
                </form>
              ) : (
                <Button onClick={() => setShowForm(event.id)} className="w-full bg-green-600 hover:bg-green-700">{t.registerNow}</Button>
              )}
            </CardFooter>
          </Card>
        )})}
      </div>
    </div>
  );
}
