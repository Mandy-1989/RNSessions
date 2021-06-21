import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { TRANSLATIONS_ES } from "./es/translation";
import { TRANSLATIONS_EN } from "./en/translation";

// the translations
const resources = {
  en: {
    translation: TRANSLATIONS_EN
  },
  es: {
    translation: TRANSLATIONS_ES
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    lng: "es",
    fallbackLng: "en", // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;