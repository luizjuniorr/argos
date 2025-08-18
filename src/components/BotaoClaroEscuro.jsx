import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

import icon_modoclaro_claro from "../assets/icon_modoclaro_claro.png"
import icon_modoescuro_claro from "../assets/icon_modoescuro_claro.png"

import icon_modoclaro_escuro from "../assets/icon_modoclaro_escuro.png"
import icon_modoescuro_escuro from "../assets/icon_modoescuro_escuro.png"

export function BotaoClaroEscuro() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const isDark = theme === "dark";

    return (
        <div className="flex items-center gap-2">
            <img className="h-4" src={theme === "dark" ? icon_modoclaro_escuro : icon_modoclaro_claro} alt="Jogo" />
            <div onClick={toggleTheme} className={`dark:bg-white bg-dark-mode w-15 h-5 rounded-full flex items-center cursor-pointer ${isDark ? "justify-end" : "justify-start"}`}>
                <div className="dark:bg-dark-mode bg-white w-4 h-4 rounded-full ml-1"></div>
            </div>
            <img className="h-4" src={theme === "dark" ? icon_modoescuro_escuro : icon_modoescuro_claro} alt="Jogo" />
        </div>
    );
}
