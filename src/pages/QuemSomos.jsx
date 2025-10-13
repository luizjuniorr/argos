import { useEffect, useState, useContext } from "react"
import { ThemeContext } from "../context/ThemeContext.jsx"
import { Header } from "../components/Header.jsx"
import { CardEquipe } from "../components/CardEquipe.jsx"

import background_quemsomos from "../assets/background_quemsomos.png"
import acessoriatecnica_claro from "../assets/icon_acessoriatecnica_claro.png"
import consultoriaambiental_claro from "../assets/icon_consultoriaambiental_claro.png"
import planejamentorural_claro from "../assets/icon_planejamentorural_claro.png"
import consultoriaagricola_claro from "../assets/icon_consultoriaagricola_claro.png"
import tecnologiaagricola_claro from "../assets/icon_tecnologiaagricola_claro.png"
import monitoramentoagricola_claro from "../assets/icon_monitoramentoagricola_claro.png"

import acessoriatecnica_escuro from "../assets/icon_acessoriatecnica_escuro.png"
import consultoriaambiental_escuro from "../assets/icon_consultoriaambiental_escuro.png"
import planejamentorural_escuro from "../assets/icon_planejamentorural_escuro.png"
import consultoriaagricola_escuro from "../assets/icon_consultoriaagricola_escuro.png"
import tecnologiaagricola_escuro from "../assets/icon_tecnologiaagricola_escuro.png"
import monitoramentoagricola_escuro from "../assets/icon_monitoramentoagricola_escuro.png"

import pablo from "../assets/pablorenato.jpeg"
import luiz from "../assets/luizfernando.jpeg"
import jamal from "../assets/jamal.png"
import matheus from "../assets/matheus.jpeg"

import { Servicos } from "../components/Servicos.jsx";

export function QuemSomos() {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <div className="dark:text-white">
            <Header />

            <div className="relative min-h-40 md:min-h-100 w-full bg-cover bg-center flex justify-center items-center flex-col" style={{ backgroundImage: `url(${background_quemsomos})` }}>
                <div className="absolute inset-0 bg-black/50 z-0"></div>

                <div className="z-1 text-center w-80">
                    <h1 className="font-strike text-xl md:text-4xl text-white">Quem Somos</h1>
                    <p className="text-white text-sm md:text-sm mt-6">Conheça os membros da nossa empresa e sinta-se à vontade para entrar em contato conosco</p>
                </div>
            </div>

            <div className="flex flex-col items-center mb-15">
                <h2 className="font-strike text-xl md:text-2xl mt-5">Serviços:</h2>

                <div className="flex flex-col items-center mt-2 md:gap-10">

                    <div className="mt-5 flex flex-col md:flex-row gap-15 md:gap-30">

                        <Servicos ImagemClaro={acessoriatecnica_claro} ImagemEscuro={acessoriatecnica_escuro} Titulo="Assessoria Técnica" Texto="Compartilhamos conhecimento para impulsionar produção" />

                        <Servicos ImagemClaro={consultoriaambiental_claro} ImagemEscuro={consultoriaambiental_escuro} Titulo="Consultoria Ambiental" Texto="Possuímos práticas sustentáveis que não prejudicam as plantações"/>

                        <Servicos ImagemClaro={planejamentorural_claro} ImagemEscuro={planejamentorural_escuro} Titulo="Planejamento Rural" Texto="Com o nosso protótipo você consegue ver em qual estação possui um grande número de pragas"/>

                    </div>

                    <div className="mt-5 flex flex-col md:flex-row gap-15 md:gap-30">

                        <Servicos ImagemClaro={consultoriaagricola_claro} ImagemEscuro={consultoriaagricola_escuro} Titulo="Consultoria Agricola" Texto="Implementação de técnicas avanças e dicas"/>

                        <Servicos ImagemClaro={tecnologiaagricola_claro} ImagemEscuro={tecnologiaagricola_escuro} Titulo="Tecnologia Agricola" Texto="Único produto com tecnologia de contabilizar as pragas"/>

                        <Servicos ImagemClaro={monitoramentoagricola_claro} ImagemEscuro={monitoramentoagricola_escuro} Titulo="Monitoramento Agricola" Texto="Conseguimos monitorar a sua plantação"/>

                    </div>

                </div>
            </div>

            <div className="flex flex-col items-center mb-10">
                <h3 className="font-strike text-lg md:text-2xl mb-5">Nossa equipe</h3>

                <div className="flex flex-col md:flex-row gap-5">
                    <div className="flex gap-5">
                        <CardEquipe nome="Gabriel Penha"  foto={jamal} link_linkedin={"https://www.linkedin.com/in/gabriel-penha-7132122a5/"} link_instagram={"https://instagram.com/biel.oliver76"}/>

                        <CardEquipe nome="Luiz Fernando" foto={luiz} link_linkedin={"https://www.linkedin.com/in/luiz-fernando-de-jesus-junior/"} link_instagram={"https://instagram.com/_luiz.47"}/>
                    </div>

                    <div className="flex gap-5">
                        <CardEquipe nome="Matheus Almeida" foto={matheus} link_linkedin={"https://www.linkedin.com/in/matheus-ara%C3%BAjo-96399b335/"} link_instagram={"https://instagram.com/matheus_alm11"}/>

                        <CardEquipe nome="Pablo Renato" foto={pablo} link_linkedin={"https://www.linkedin.com/in/pablo-renato-a90108334/"} link_instagram={"https://instagram.com/pablo_renato68"}/>
                    </div>
                </div>
            </div>

        </div>
    )
}
