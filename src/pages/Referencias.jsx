import { Header } from "../components/Header"
import { useState, useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

import background_referencias from "../assets/background_referencias.png"
import pesquisabrasil from "../assets/pesquisabrasil.png"

export function Referencias() {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return(
        <div className="dark:text-white relative min-h-screen w-full bg-cover bg-center flex flex-col justify-between" style={{ backgroundImage: `url(${background_referencias})` }}>
            <Header />

            <h1 className="my-10 text-white font-tauri ml-5 text-xl md:hidden">Referências</h1>

            <div className="dark:bg-dark-mode bg-white md:mt-50 md:rounded-tl-4xl md:rounded-tr-4xl">
                <h1 className="my-10 text-dark-green dark:text-white font-strike ml-5 text-5xl hidden md:block md:px-15">Referências</h1>
                <div className="bg-dark-green w-9/10 h-1 hidden md:block mx-auto"></div>
                <div className="flex flex-col md:flex-row gap-5 mt-5 justify-around w-full max-w-7xl mx-auto">
                    <div className="px-5 gap-5 flex flex-col font-redhat md:w-1/2">
                        <p className="font-strike mb-5">Artigos:</p>

                        <p>Artigo 1: <a className="text-blue-500 underline cursor-pointer" target="_blank" href="https://revistabrasileirademeioambiente.com/index.php/RVBMA/article/view/1240">Panorama sobre o uso de agrotóxicos no Brasil (2009-2019): Riscos, benefícios e alternativas</a></p>

                        <p>Artigo 2: <a className="text-blue-500 underline cursor-pointer" target="_blank" href="https://www.researchgate.net/profile/Pedro-Togni/publication/236863303_MANEJO_DE_PRAGAS_NA_AGRICULTURA_ORGANICA/links/00463519a640e586fa000000/MANEJO-DE-PRAGAS-NA-AGRICULTURA-ORGANICA.pdf">Manejo de pragas na agricultura orgânica</a></p>

                        <p>Artigo 3: <a className="text-blue-500 underline cursor-pointer" target="_blank" href="https://periodicos.ufsm.br/reget/article/view/4204/2804">Adoção do manejo integrado de pragas baseado na percepção e educação ambiental</a></p>

                        <p>Artigo 4: <a className="text-blue-500 underline cursor-pointer" target="_blank" href="https://revistas.rcaap.pt/rca/article/view/16933/13788">Tecnologias da eletrônica e da computação na recolha e integração de dados em agricultura de precisão</a></p>
                    </div>

                    <div className="w-9/10 md:w-1 md:h-70 bg-dark-green mx-5"></div>

                    <div className="px-5 md:pb-10">
                        <p className="font-strike mb-5">Podcast</p>

                        <a href="https://open.spotify.com/show/4CQJrLjl1s3nGBNPABoWx7" target="_blank" rel="noopener noreferrer"><img src={pesquisabrasil} alt="" className="md:w-70"/></a>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}