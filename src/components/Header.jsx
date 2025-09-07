import { useState, useContext } from "react"
import { ThemeContext } from "../context/ThemeContext.jsx";
import { BotaoClaroEscuro } from "./BotaoClaroEscuro.jsx"
import { Link } from "react-router-dom";

import menu_claro from "../assets/menu_claro.svg"
import logo_claro from "../assets/logo_claro.png"
import jogo_claro from "../assets/jogo_claro.png"
import fecharmenu_claro from "../assets/fecharmenu_claro.png";

import menu_escuro from "../assets/menu_escuro.png"
import logo_escuro from "../assets/logo_escuro.png"
import jogo_escuro from "../assets/jogo_escuro.png"
import fecharmenu_escuro from "../assets/fecharmenu_escuro.png";

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false)
  const { theme } = useContext(ThemeContext)

  function toggleMenu() {
    setMenuAberto(!menuAberto)
  }

  return (
    <div className="">
      <div className="w-full bg-white relative font-redhat dark:bg-dark-mode">
        <div className="flex justify-between items-center p-2 z-10 relative">
          <img className="h-6 md:h-9 md:hidden cursor-pointer" src={theme === "dark" ? menu_escuro : menu_claro} alt="Menu" onClick={toggleMenu} />

          <Link to={"/jogo"} className="hidden md:block">
            <img className="h-6 md:h-9" src={theme === "dark" ? jogo_escuro : jogo_claro} alt="Jogo" />
          </Link>

          <Link to={"/"}>
            <img className="h-6 md:h-9" src={theme === "dark" ? logo_escuro : logo_claro} alt="Logo" />
          </Link>

          <div className="hidden md:flex">
            <BotaoClaroEscuro />
          </div>
          
          <div className="flex md:hidden">

          </div>
        </div>

        <div className="w-full h-1 bg-dark-green md:hidden"></div>


        {menuAberto && (
          <>
            <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleMenu}></div>

            <div className="fixed top-0 left-0 w-1/2 h-screen bg-white dark:bg-dark-mode text-black dark:text-white z-50 p-4 transition-all">
              <button onClick={toggleMenu} className="text-right w-full mb-4 text-xl" >
                <img src={theme === "dark" ? fecharmenu_escuro : fecharmenu_claro} alt="Fechar" />
              </button>
              <ul className="space-y-4 text-dark-green dark:text-white">
                <li className="cursor-pointer">
                  <Link to={"/instrucoes"}>Instruções</Link>
                </li>
                <li className="cursor-pointer">
                  <Link to={"/produtosutilizados"}>Produtos Utilizados</Link>
                </li>
                <li className="cursor-pointer">
                  <Link to={"/QuemSomos"}>Quem Somos</Link>
                </li>
                <li className="cursor-pointer">
                  <Link to={"/Referencias"}>Referências</Link>
                </li>
                <li>
                  <BotaoClaroEscuro />
                </li>
              </ul>
            </div>
          </>
        )}

        <div className="hidden md:block">
          <ul className="flex justify-around px-2 list-none w-full bg-dark-green text-white">
            <li className="cursor-pointer">
              <Link to={"/instrucoes"}>Instruções</Link>
            </li>
            <li className="cursor-pointer">
              <Link to={"/produtosutilizados"}>Produtos Utilizados</Link>
            </li>
            <li className="cursor-pointer">
              <Link to={"/QuemSomos"}>Quem Somos</Link>
            </li>
            <li className="cursor-pointer">
              <Link to={"/Referencias"}>Referências</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
