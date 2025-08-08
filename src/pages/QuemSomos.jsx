import { useEffect, useState } from "react";
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

export function QuemSomos() {
    const tema = localStorage.getItem("tema");

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

            <div className="flex flex-col items-center mb-5">
                <h2 className="font-strike text-xl md:text-2xl mt-5">Serviços:</h2>

                <div className="flex flex-col items-center mt-2 md:gap-10">

                    <div className="mt-5 flex flex-col md:flex-row gap-15 md:gap-30">

                        <div className="flex items-center justify-center gap-4">
                            <img src={tema === "dark" ? acessoriatecnica_escuro : acessoriatecnica_claro} alt="Ícone de Acessoria Técnica" className="h-14" />

                            <div className="text-center">
                                <h3 className="font-strike md:text-xl md:font-gabarito">Acessoria Técnica</h3>
                                <p className="text-sm leading-snug w-50">Compartilhamos conhecimento para impulsionar produção</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-4">
                            <img src={tema === "dark" ? consultoriaambiental_escuro : consultoriaambiental_claro} alt="Ícone de Acessoria Técnica" className="h-14" />

                            <div className="text-center">
                                <h3 className="font-strike md:text-xl md:font-gabarito">Consultoria Ambiental</h3>
                                <p className="text-sm leading-snug w-50">Possuímos práticas sustentáveis que não prejudicam as plantações</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-4">
                            <img src={tema === "dark" ? planejamentorural_escuro : planejamentorural_claro} alt="Ícone de Acessoria Técnica" className="h-14" />

                            <div className="text-center">
                                <h3 className="font-strike md:text-xl md:font-gabarito">Planejamento Rural</h3>
                                <p className="text-sm leading-snug w-50">Com o nosso protótipo você consegue ver em qual estação possui um grande número de pragas</p>
                            </div>
                        </div>

                    </div>

                    <div className="mt-5 flex flex-col md:flex-row gap-15 md:gap-30">

                        <div className="flex items-center justify-center gap-4">
                            <img src={tema === "dark" ? consultoriaagricola_escuro : consultoriaagricola_claro} alt="Ícone de Acessoria Técnica" className="h-14" />

                            <div className="text-center">
                                <h3 className="font-strike md:text-xl md:font-gabarito">   Consultoria Agricola</h3>
                                <p className="text-sm leading-snug w-50">Implementação de técnicas avanças e dicas</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-4">
                            <img src={tema === "dark" ? tecnologiaagricola_escuro : tecnologiaagricola_claro} alt="Ícone de Acessoria Técnica" className="h-14" />

                            <div className="text-center">
                                <h3 className="font-strike md:text-xl md:font-gabarito">Tecnologia Agricola</h3>
                                <p className="text-sm leading-snug w-50">Único produto com tecnologia de contabilizar as pragas</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-4">
                            <img src={tema === "dark" ? monitoramentoagricola_escuro : monitoramentoagricola_claro} alt="Ícone de Acessoria Técnica" className="h-14" />

                            <div className="text-center">
                                <h3 className="font-strike md:text-xl md:font-gabarito">Monitoramento Agricola</h3>
                                <p className="text-sm leading-snug w-50">Conseguimos monitorar a sua plantação</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className="flex flex-col items-center mb-10">
                <h3 className="font-strike text-lg md:text-2xl mb-5">Nossa equipe</h3>

                <div className="flex flex-col md:flex-row gap-5">
                    <div className="flex gap-5">
                        <CardEquipe nome="Gabriel Penha" />

                        <CardEquipe nome="Luiz Fernando" />
                    </div>

                    <div className="flex gap-5">
                        <CardEquipe nome="Matheus Almeida" />

                        <CardEquipe nome="Pablo Renato" />
                    </div>
                </div>
            </div>

        </div>
    )
}