import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector/index";
import {initReactI18next} from "react-i18next/initReactI18next";

const CustomI18n = ()=> {
    i18n
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            debug: true,
            fallbackLng: 'en',
            returnObjects: true,
            resources: {
                en: {
                    translation: {
                        allCat: 'All Categories'
                    }
                },
                ar: {
                    translation: {
                        allCat: 'كل التصنيفات'
                    }
                },
            }
        })
}

export default CustomI18n;