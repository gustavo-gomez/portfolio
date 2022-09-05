import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"
import global_es from "./translations/es/global.json"
import global_en from "./translations/en/global.json"

const DETECTION_OPTIONS = {
  order: ['navigator']
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    detection: DETECTION_OPTIONS,
    debug: true,
    resources: {
      en: {
        global: global_en,
      },
      es: {
        global: global_es
      }
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });
