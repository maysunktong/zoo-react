import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationEN from "../locales/en/translation.json";
import translationSV from "../locales/sv/translation.json";
import translationTH from "../locales/th/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      sv: { translation: translationSV },
      en: { translation: translationEN },
      th: { translation: translationTH },
    },
    fallbackLng: "sv",
    detection: {
      // clean saved language
      caches: [],
      order: ["navigator"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
