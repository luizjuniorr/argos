import { useEffect, useState } from "react"
import { BotaoClaroEscuro } from "./BotaoClaroEscuro.jsx"
import { Link } from "react-router-dom";

import menu_claro from "../assets/menu_claro.svg"
import logo_claro from "../assets/logo_claro.svg"
import usuario_claro from "../assets/usuario_claro.svg"
import jogo_claro from "../assets/jogo_claro.png"
import fecharmenu_claro from "../assets/fecharmenu_claro.png";

import menu_escuro from "../assets/menu_escuro.png"
import logo_escuro from "../assets/logo_escuro.png"
import usuario_escuro from "../assets/usuario_escuro.png"
import jogo_escuro from "../assets/jogo_escuro.png"
import fecharmenu_escuro from "../assets/fecharmenu_escuro.png";

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [situacaoBotao, setSituacaoBotao] = useState(true)
  const [tema, setTema] = useState("")

  useEffect(() => {
    if (tema === "dark") {
      document.body.classList.add("dark")
      document.body.classList.add("bg-dark-mode")
    } else {
      document.body.classList.remove("dark")
      document.body.classList.remove("bg-dark-mode")
    }
  }, [tema])

  function toggleMenu() {
    setMenuAberto(!menuAberto)
  }

  return (
    <>
      <div className="w-full bg-white relative font-redhat dark:bg-dark-mode">
          <div className="flex justify-between p-2 z-10 relative">
            <img className="h-6 md:h-9 md:hidden cursor-pointer" src={tema === "dark" ? menu_escuro : menu_claro} alt="Menu" onClick={toggleMenu}/>
            <Link to={"/jogo"}><img className="h-6 md:h-9 hidden md:block" src={tema === "dark" ? jogo_escuro : jogo_claro} alt="Jogo" /></Link>
            <img className="h-6 md:h-9" src={tema === "dark" ? logo_escuro : logo_claro} alt="Logo" />
            <img className="h-6 md:h-9" src={tema === "dark" ? usuario_escuro : usuario_claro} alt="Usuário" />
          </div>
          <div className="w-full h-1 bg-dark-green md:hidden"></div>
          
          { menuAberto && (
            <>
              <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleMenu}></div>

              <div className="fixed top-0 left-0 w-1/2 h-screen bg-white dark:bg-dark-mode text-black dark:text-white z-50 p-4 transition-all">
                <button onClick={toggleMenu} className="text-right w-full mb-4 text-xl"><img src={tema === "dark" ? fecharmenu_escuro : fecharmenu_claro} alt="" /></button>
                <ul className="space-y-4 text-dark-green dark:text-white">
                  <li className="cursor-pointer">Instruções</li>
                  <li className="cursor-pointer"><Link to={"/produtosutilizados"}>Produtos Utilizados</Link></li>
                  <li className="cursor-pointer"><Link to={"/QuemSomos"}>Quem Somos</Link></li>
                  <li className="cursor-pointer">Referências</li>
                  <li> <BotaoClaroEscuro situacaoBotao={situacaoBotao} setSituacaoBotao={setSituacaoBotao} tema={tema} setTema={setTema}/></li>
                </ul>
              </div>
            </>
          )}

          <div className="hidden md:block">
            <ul className="flex justify-between px-2 list-none w-full bg-dark-green text-white">
              <li className="cursor-pointer">Instruções</li>
              <li className="cursor-pointer"><Link to={"/produtosutilizados"}>Produtos Utilizados</Link></li>
              <li className="cursor-pointer"><Link to={"/QuemSomos"}>Quem Somos</Link></li>
              <li className="cursor-pointer">Referências</li>
              <li><BotaoClaroEscuro situacaoBotao={situacaoBotao} setSituacaoBotao={setSituacaoBotao} tema={tema} setTema={setTema}/></li>
            </ul>
          </div>
        </div>
    </>
  )
}
