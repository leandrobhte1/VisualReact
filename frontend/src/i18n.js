import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          fist: "To get started, edit <1>src/App.js</1> and save to reload.",
          "Welcome to React": "Welcome to React and react-i18next",
          welcome: "Hello <br/> <strong>World</strong>",
          people: "People",
          inclusion: "Inclusion",
          about: "about",
          actions: "Actions",
          test: "Test",
          history: "Our history",
          mission: "Mission",
          vision: "Vision"
        }
      },
      pt: {
        translations: {
          first: "Para começar, edite <1>src/App.js</1> e salve para recarregar.",
          "Welcome to React": "Bem vindo ao React e react-i18next",
          welcome: "Olá <br/> <strong>Mundo</strong>",
          people: "Pessoas",
          inclusion: "Inclusão",
          about: "Sobre",
          actions: "Ações",
          test: "Teste",
          history: "Nossa história",
          mission: "Missão",
          vision: "Visão"
        }
      }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
