import { Header } from "../components/Header.jsx"
import AppStore from "../assets/AppStore.png"
import GooglePlay from "../assets/GooglePlay.png"
import background_projeto from "../assets/background_projeto.png"

import icon_objetivo from "../assets/icon_objetivo.png"
import icon_nossodiferencial from "../assets/icon_nossodiferencial.png"
import icon_publicoalvo from "../assets/icon_publicoalvo.png"
import prototipo from "../assets/prototipo.png"

export function Projeto() {
    return (
        <div className="relative min-h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${background_projeto})` }}>
            <div className="absolute inset-0 bg-black/50 z-0"></div>

            <div className="relative z-10 text-white h-full">
                <Header />

                <div className="p-8 flex flex-col justify-center items-center md:items-start h-full">

                    <div className="md:flex md:items-center md:m-auto">
                        <div className="text-center md:text-left md:max-w-xl">
                            <h1 className="text-5xl font-strike mb-4 md:w-fit ">Argos</h1>
                            <p className="mb-6 text-sm md:w-1/2 md:text-left ">
                                Um dispositivo inovador para otimizar o controle de pragas e aumentar a produtividade no setor agrícola.
                                Oferecemos ferramentas avançadas de monitoramento e análise em tempo real.
                                Voltado para produtores rurais, gestores e consultores do agronegócio. Garantindo um controle de pragas mais eficiente e estratégico.
                            </p>
                            
                            <button className="bg-dark-green p-1 w-70 rounded-3xl font-redhat hover:bg-green-900 cursor-pointer">Saiba mais</button>

                            <div className="flex gap-4 mt-10">
                                <img src={GooglePlay} alt="Google Play" className="h-10" />
                                <img src={AppStore} alt="App Store" className="h-10" />
                            </div>
                        </div>
                        <img src={prototipo} alt="" className="hidden md:block md:ml-10" />
                    </div>






                </div>

                <div className="flex flex-col md:flex-row md:mx-10 gap-10 mt-15 pb-5">
                    <div className="flex justify-center items-center">
                        <img src={icon_objetivo} alt="" className="h-15 mr-2" />
                        <div className="text-center w-1/2">
                            <h2 className="font-gabarito md:mb-2">Objetivo</h2>
                            <p className="font-redhat text-sm">Compartilhamos conhecimento para impulsionar produção</p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <img src={icon_nossodiferencial} alt="" className="h-15 mr-2" />
                        <div className="text-center w-1/2">
                            <h2 className="font-gabarito md:mb-2">Nosso diferencial</h2>
                            <p className="font-redhat text-sm">Possuímos práticas sustentáveis que não prejudicam as plantações</p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <img src={icon_publicoalvo} alt="" className="h-15 mr-2" />
                        <div className="text-center w-1/2">
                            <h2 className="font-gabarito md:mb-2">Público-alvo</h2>
                            <p className="font-redhat text-sm">Com o nosso protótipo você consegue ver em qual estação possui um grande número de pragas</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
