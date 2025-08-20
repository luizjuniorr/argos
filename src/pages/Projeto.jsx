import { Header } from "../components/Header.jsx"

import AppStore from "../assets/AppStore.png"
import GooglePlay from "../assets/GooglePlay.png"
import background_projeto from "../assets/background_projeto.png"

import icon_objetivo from "../assets/icon_objetivo.png"
import icon_nossodiferencial from "../assets/icon_nossodiferencial.png"
import icon_publicoalvo from "../assets/icon_publicoalvo.png"
import prototipo from "../assets/prototipo.png"
import { Servicos } from "../components/Servicos.jsx"

export function Projeto() {
    return (
        <div className="relative min-h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${background_projeto})` }}>

            <div className="absolute inset-0 bg-black/50 z-0"></div>

            <div className="relative z-10 text-white">
                <Header />

                <div className="p-8 flex flex-col justify-center items-center md:items-start">
                    <div className="md:flex md:items-center md:m-auto">
                        <div className="text-center md:text-left md:max-w-xl">
                            <h1 className="text-5xl font-strike mb-4 md:w-fit">Argos</h1>
                            <p className="mb-6 text-sm md:w-1/2 md:text-left">Um dispositivo inovador para otimizar o controle de pragas e aumentar a produtividade no setor agrícola. Oferecemos ferramentas avançadas de monitoramento e análise em tempo real. Voltado para produtores rurais, gestores e consultores do agronegócio. Garantindo um controle de pragas mais eficiente e estratégico.</p>

                            <button className="bg-dark-green p-1 w-70 rounded-3xl font-redhat hover:bg-green-900 cursor-pointer">
                                Saiba mais
                            </button>

                            <div className="flex gap-4 mt-10 justify-center md:justify-start">
                                <img src={GooglePlay} alt="Google Play" className="h-10" />
                                <img src={AppStore} alt="App Store" className="h-10" />
                            </div>
                        </div>

                        <img src={prototipo} alt="Protótipo Argos" className="hidden md:block md:ml-10" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-10 pb-5 mt-10">
                    <Servicos ImagemClaro={icon_objetivo} ImagemEscuro={icon_objetivo} Titulo="Objetivo" Texto="Compartilhamos conhecimento para impulsionar produção"/>
                    <Servicos ImagemClaro={icon_nossodiferencial} ImagemEscuro={icon_nossodiferencial} Titulo="Nosso diferencial" Texto="Possuímos práticas sustentáveis que não prejudicam as plantações"/>
                    <Servicos ImagemClaro={icon_publicoalvo} ImagemEscuro={icon_publicoalvo} Titulo="Público-alvo" Texto="Com o nosso protótipo você consegue ver em qual estação possui um grande número de pragas"/>
                </div>

            </div>
        </div>
    )
}
