import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { translations } from "./translations";

type Language =| "en"| "hi"|"bho"|"maith"| "bn"| "mr"| "te"| "ta"| "gu"| "ur"| "kn"| "or"| "ml"| "pa"| "as"| "mai"| "sat"| "ks"| "ne"| "kok"| "sd"| "doi"| "mni"| "zh"| "es"| "pt"| "ru"| "ja"| "fr"| "de"| "jv"| "ko";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Record<string, Record<string, string>>;
  t: (key: string) => string;
};



const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  translations: translations,
  t: () => "",
});

export const useLanguage = () => {
  return useContext(LanguageContext);
};

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Initialize from localStorage or default to 'en'
    const savedLanguage = localStorage.getItem("preferred-language");
    return (savedLanguage as Language) || "en";
  });
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("preferred-language", lang);
  };

  const t = (key: string) => {
    if (translations[language] && translations[language][key]) {
      return translations[language][key];
    }

    if (translations.en[key]) {
      return translations.en[key];
    }

    return key;
  };
  // Optional: Sync language with HTML lang attribute
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, translations, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};