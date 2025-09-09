import { Header } from "../components/Header";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

import icon_jogo from "../assets/icon_jogo.png";
import icon_jogo_escuro from "../assets/icon_jogo_escuro.png"
import areareservada from "../assets/areareservada.png";

export function Jogo() {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <div className="dark:text-white">
            <Header />

            <div className="flex flex-col md:flex-row h-screen justify-center items-center gap-16 max-w-6xl mx-auto py-16 px-4 ">
                <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-3 mb-6">
                        <h1 className="font-strike text-dark-green text-6xl text-center md:text-left dark:text-white">Argos Game</h1>
                        <img src={theme === "dark" ? icon_jogo_escuro : icon_jogo} alt="" className="w-12" />
                    </div>

                    <p className="text-sm font-redhat text-dark-green text-center md:text-left mb-6 dark:text-white">
                        Em um futuro próximo, as plantações estão ameaçadas por uma infestação crescente de pragas mutantes que surgiram após desequilíbrios ambientais. Para proteger as lavouras e garantir a produção de alimentos, uma nova geração de fazendeiros se une com tecnologia de ponta e personagens especializados no combate às pragas.
                    </p>

                    <img src={areareservada} alt="" className="w-full max-w-md mb-4 md:hidden border" />

                    <button className="bg-dark-green w-3/5 md:w-full rounded-xl text-white font-strike cursor-pointer">Jogar</button>
                </div>

                <div className="w-full md:w-1/2 justify-center hidden md:flex">
                    <img src={areareservada} alt="" className="w-full max-w-md border" />
                </div>
            </div>
        </div>
    );
}
