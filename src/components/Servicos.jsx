import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

export function Servicos({ImagemEscuro, ImagemClaro, Titulo, Texto}){
    const tema = localStorage.getItem("tema");
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <div className="flex items-center justify-center gap-4">
            <img src={theme === "dark" ? ImagemEscuro : ImagemClaro} alt="Ícone" className="h-14" />

            <div className="text-center">
                <h3 className="font-strike md:text-xl md:font-gabarito">{Titulo}</h3>
                <p className="text-sm leading-snug w-50">{Texto}</p>
            </div>
        </div>
    )
}