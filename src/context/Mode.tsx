import React, { useState } from "react";
import { ModeContext, Mode } from "./ModeType";

export const ThemeContext = React.createContext<ModeContext>(
    {} as ModeContext
);

export const ThemeProvider: React.FC = ({ children }) => {
    const [mode, setMode] = useState<Mode>("light");
    const toggleTheme = () => {
        setMode(mode === "light" ? "dark" : "light");
        console.log(mode);
    };
    const color = mode === "dark" ? "blue" : "red";
    const backgroundColor = mode === "dark" ? "black" : "white";

    document.body.style.color = color;
    document.body.style.backgroundColor = backgroundColor;

    return (
        <ThemeContext.Provider value={{mode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}


