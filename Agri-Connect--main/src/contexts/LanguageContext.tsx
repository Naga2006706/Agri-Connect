import React, { createContext, useContext, useState, ReactNode } from 'react';

export const languages = [
  { code: "en-US", name: "English", prompt: "English" },
  { code: "hi-IN", name: "Hindi (हिंदी)", prompt: "Hindi" },
  { code: "te-IN", name: "Telugu (తెలుగు)", prompt: "Telugu" },
  { code: "ta-IN", name: "Tamil (தமிழ்)", prompt: "Tamil" },
  { code: "mr-IN", name: "Marathi (मराठी)", prompt: "Marathi" },
  { code: "kn-IN", name: "Kannada (ಕನ್ನಡ)", prompt: "Kannada" },
];

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  targetLangPrompt: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState("en-US");
  
  const targetLangPrompt = languages.find(l => l.code === language)?.prompt || 'English';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, targetLangPrompt }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
