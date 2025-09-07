import { Header } from "../components/Header.jsx"
import { Instrucao } from "../components/Instrucao.jsx"

import prototipo from "../assets/prototipo.png"
import prototipofundo from "../assets/PrototipoCFundo.png"
import areareservada from "../assets/areareservada.png"
import circle_bg from "../assets/circle_bg.png"
import { TextoInstrucoes } from "../components/TextoIntrucoes";

export function Instrucoes() {
    return (
        <div className="">
            <Header />
            <div className="">
                <div className="bg-light-green pb-2 md:hidden">
                    <div className="flex flex-col items-center">
                        <h1 className="font-strike text-white text-4xl text-center mt-5">Como funciona o <br></br><strong className="text-dark-green">Argos?</strong></h1>

                    </div>

                    <div className="relative flex items-center justify-center">
                        <div className="absolute inset-0 z-0 flex justify-center items-center mt-20">
                            <img src={circle_bg} alt="Círculo de fundo" className="w-74" />
                        </div>

                        <div className="relative z-10">
                            <img src={prototipo} alt="Protótipo" className="w-32 mt-8" />
                        </div>
                    </div>

                    <div>
                        <TextoInstrucoes texto={"O AgroView atrai pragas agrícolas usando feromônios instalados pelo produtor. Os insetos ficam presos em fitas atrativas, onde são contabilizados periodicamente. Os dados coletados são enviados para o aplicativo, permitindo o monitoramento contínuo das pragas e auxiliando no controle eficaz da plantação."} />
                    </div>
                </div>

                <div className="bg-light-green pb-2 hidden md:flex justify-center">
                    <div className="flex gap-30">
                        <div className="flex flex-col items-center max-w-200 mt-20">
                            <h1 className="font-strike text-white text-8xl text-left">Como funciona o <br></br><strong className="text-dark-green">Argos?</strong></h1>
                            <p className="text-white text-xl font-redhat mx-8 mt-10">O AgroView atrai pragas agrícolas usando feromônios instalados pelo produtor. Os insetos ficam presos em fitas atrativas, onde são contabilizados periodicamente. Os dados coletados são enviados para o aplicativo, permitindo o monitoramento contínuo das pragas e auxiliando no controle eficaz da plantação.</p>
                        </div>

                        <div className="flex items-center justify-center">
                            <div className="relative z-10">
                                <img src={prototipofundo} alt="Protótipo" className="w-120 mt-8" />
                            </div>
                        </div>
                    </div>
                </div>

                <Instrucao cor={"bg-dark-green"} imagem={areareservada} titulo={"Instalação"} texto={"A instalação do Argos foi projetada para ser simples e prática. O dispositivo conta com suportes que devem ser inseridos no solo, garantindo sua fixação e estabilidade mesmo em terrenos irregulares. Recomendamos a instalação de um dispositivo para cada 100 m², em média. No entanto, essa distância pode variar conforme o raio de alcance do feromônio utilizado."}/>

                <Instrucao cor={"bg-dark-greenn"} titulo={"Abastecimento"} imagem={areareservada} texto={"Para tornar o processo de manutenção mais eficiente, o aplicativo do Argos envia alertas sobre o momento ideal para reposição das fitas e recarga dos feromônios. Com isso, o produtor pode se planejar com antecedência, evitando interrupções no monitoramento e garantindo um controle mais eficiente das pragas."} texto2={"O compartimento inferior do dispositivo permite o uso de feromônios e fitas adesivas atrativas, eficazes para capturar pragas. O produtor pode inserí-los facilmente dentro da gaveta articulada, localizada em uma das laterais do dispositivo. Ao abrir essa gaveta, tem-se acesso tanto à área de captura quanto aos circuitos internos, facilitando substituições e inspeções."}  texto3={"O AgroView é alimentado por uma bateria recarregável para prolongar seu tempo de uso. Ela conta com placas solares posicionadas na sua parte superior, que recarregam a bateria durante o dia. Isso reduz a necessidade de trocas frequentes e garante funcionamento contínuo nas plantações."}/>

                <Instrucao cor={"bg-light-green"} titulo={"CONFIGURAÇÃO"} imagem={areareservada} textoC={"Pelo aplicativo do AgroView, defina os intervalos em que a ESP32-CAM ativa a contagem de insetos. Essa configuração permite ajustar a frequência de coleta de dados de acordo com as necessidades do usuário, equilibrando precisão  e consumo de energia."}/>

                <Instrucao cor={"bg-dark-greenn"} titulo={"COLETA DE DADOS"} imagem={areareservada} textoC={"A ESP32-CAM realiza a contagem dos insetos atraídos para o interior do dispositivo, dentro de intervalos definidos pelo usuário. A cada ativação, o número de insetos detectados é enviado  para o banco de dados do aplicativo, permitindo o acompanhamento remoto em tempo real."} textoC2={"Nos períodos de inatividade, a câmera entra em modo de repouso para economizar energia e prolongar a autonomia da bateria."}/>

                <Instrucao cor={"bg-light-green"} titulo={"ANÁLISE DE DADOS"} imagem={areareservada} textoC={"Cada dispositivo AgroView possui uma identificação única, permitindo que o usuário monitore remotamente múltiplos dispositivos em sua propriedade."} texto={"Os dados coletados sobre o número de insetos capturados por dispositivo, em determinados intervalos de tempo, indicam quais regiões da propriedade e épocas do ano apresentam maior incidência de pragas. Com essas informações, o agricultor pode elaborar um calendário estratégico de pulverizações, evitando aplicações desnecessárias e reduzindo o uso de agrotóxicos. Isso contribui para a economia de recursos e para a melhoria da qualidade do produto final."} texto2={"Em períodos de baixa incidência de pragas, o produtor pode optar por utilizar apenas o AgroView no controle das pragas, até que a infestação exija outras medidas de manejo."}/>

                <div className="bg-white dark:bg-dark-mode flex flex-col justify-center items-center pb-2">
                    <h2 className="uppercase font-strike text-2xl text-black dark:text-white mt-10 text-center">AINDA HÁ DÚVIDAS? ASSISTA ESTE VÍDEO</h2>
                    <img src={areareservada} alt="" className="w-120 h-70 mx-auto mt-10" />
                </div>
            </div>

        </div>
    )
}