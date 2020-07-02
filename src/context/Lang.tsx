import React, { useState, useLayoutEffect } from "react";
import { LangContext } from "./LangType";

export function LangProvider({props} : {props: any}) {
    const [lang, setLang] = useState(
        window.localStorage.getItem('appUILang') ||
        window.navigator.language
    );

    useLayoutEffect(() => {
        const selectedLang = window.localStorage.getItem('appUILang');
        if (selectedLang) {
            setLang(selectedLang);
        }
    }, []);

    const toggleLang = ({ln} : {ln : any}) => {
        setLang(ln);
        window.localStorage.setItem('appUILang', ln);
    }

    return (
        <LangContext.Provider value={{
            lang, toggleLang, currentLangData: langData[lang]
        }}>
            {props.children}
        </LangContext.Provider>
    );
}

const langData = {
    'en-US': {
        card: {
            header: 'Header',
        }
    },
    'ru-RU': {
        card: {
            header: 'Заголовок',
        }
    },
}