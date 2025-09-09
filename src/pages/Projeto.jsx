import { Header } from "../components/Header.jsx"

import AppStore from "../assets/AppStore.png"
import GooglePlay from "../assets/GooglePlay.png"
import background_projeto from "../assets/background_projeto.png"

import icon_objetivo from "../assets/Icon_objetivo.png"
import icon_nossodiferencial from "../assets/Icon_nossodiferencial.png"
import icon_publicoalvo from "../assets/Icon_publicoalvo.png"
import prototipo from "../assets/prototipo.png"
import { Servicos } from "../components/Servicos.jsx"

export function Projeto() {
    return (
        <div className="relative min-h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${background_projeto})` }}>

            <div className="absolute inset-0 bg-black/50 z-0"></div>

            <div className="relative z-10 text-white">
                <Header />

                <div className="h-full w-full flex flex-col justify-center items-center">
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
                        <Servicos ImagemClaro={icon_objetivo} ImagemEscuro={icon_objetivo} Titulo="Objetivo" Texto="Oferecer uma tecnologia de monitoramento de pragas no campo e contribuir para a redução do uso de agrotóxicos" />
                        <Servicos ImagemClaro={icon_nossodiferencial} ImagemEscuro={icon_nossodiferencial} Titulo="Nosso diferencial" Texto="Unimos controle de pragas e coleta de dados sem impacto ambiental" />
                        <Servicos ImagemClaro={icon_publicoalvo} ImagemEscuro={icon_publicoalvo} Titulo="Público-alvo" Texto="Nosso projeto é voltado para todos os produtores rurais, desde o pequeno agricultor até o grande empresário do agronegócio" />
                    </div>
                </div>

            </div>
        </div>
    )
}
