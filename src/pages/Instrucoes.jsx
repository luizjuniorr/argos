import { Header } from "../components/Header.jsx"
import { Instrucao } from "../components/Instrucao.jsx"


import tabela from "../assets/Tabela.jpeg"
import prototipo from "../assets/prototipo.png"
import configuracao from "../assets/configuracao.jpeg"
import prototipofundo from "../assets/PrototipoCFundo.png"
import areareservada from "../assets/areareservada.png"
import circle_bg from "../assets/circle_bg.png"
import { TextoInstrucoes } from "../components/TextoIntrucoes";

export function Instrucoes() {
    return (
        <div className="">
            <Header />
            <div className="">
                <div className="bg-light-green dark:bg-black pb-2 md:hidden">
                    <div className="flex flex-col items-center">
                        <h1 className="font-strike text-white text-4xl text-center mt-5">Como funciona o <br></br><strong className="text-dark-green">Argos?</strong></h1>
                    </div>

                    <div className="relative flex items-center justify-center">
                        <div className="relative z-10">
                            <img src={prototipo} alt="Protótipo" className="h-70 mt-8 mb-10" />
                        </div>
                    </div>

                    <div>
                        <TextoInstrucoes texto={"O Argos atrai pragas agrícolas usando feromônios instalados pelo produtor. Os insetos ficam presos em fitas atrativas, onde são contabilizados periodicamente. Os dados coletados são enviados para o aplicativo, permitindo o monitoramento contínuo das pragas e auxiliando no controle eficaz da plantação."} />
                    </div>
                </div>

                <div className="bg-light-green dark:bg-black pb-2 hidden md:flex justify-around px-15">
                    <div className="flex gap-30 ">
                        <div className="flex flex-col max-w-200 mt-20">
                            <h1 className="font-strike text-white text-8xl text-left">Como funciona o <br></br><strong className="text-dark-green">Argos?</strong></h1>
                            <p className="text-white text-xl font-redhat mt-10">O Argos atrai pragas agrícolas usando feromônios instalados pelo produtor. Os insetos ficam presos em fitas atrativas, onde são contabilizados periodicamente. Os dados coletados são enviados para o aplicativo, permitindo o monitoramento contínuo das pragas e auxiliando no controle eficaz da plantação.</p>
                        </div>

                        <div className="flex items-center justify-center">
                            <div className="relative z-10">
                                <img src={prototipo} alt="Protótipo" className="w-120 mt-8" />
                            </div>
                        </div>
                    </div>
                </div>

                <Instrucao cor={"bg-dark-green"} dark={"dark:bg-dark-green"} imagem={areareservada} esquerda={false} titulo={"Instalação"} texto={"A instalação foi projetada para ser simples e prática. O dispositivo apenas precisa de uma plataforma para deixá-lo elevado em relação ao solo e que suporte seu peso. Recomendamos a instalação de um dispositivo para cada 100 m², em média. No entanto, essa distância pode variar conforme o raio de alcance do feromônio utilizado."}/>

                <Instrucao cor={"bg-dark-greenn"} dark={"dark:bg-dark-greenn"} titulo={"Abastecimento"} imagem={areareservada} esquerda={true} texto={"O interior do dispositivo permite o armazenamento dos feromônios e de  fitas atrativas. O produtor pode inserí-los facilmente dentro do compartimento interno. As fitas devem ser repostas manualmente, fixando as extremidadades do segmento de fita nos suportes laterais dentro do compartimento."} texto2={"O Argos também é alimentado por um Powerbank recarregável para prolongar seu tempo de uso. Ele conta com placas solares posicionadas na sua parte superior, que recarregam a bateria durante o dia. Isso reduz a frequência de recargas e garante funcionamento prolongado nas plantações."}/>

                <Instrucao cor={"bg-light-green"} dark={"dark:bg-dark-green"} titulo={"CONFIGURAÇÃO"} imagem={configuracao} esquerda={false}  textoC={"Pelo aplicativo do Argos, defina os intervalos em que a câmera ativa a contagem de insetos. Essa configuração permite ajustar a frequência de coleta de dados de acordo com as necessidades do usuário, combinando precisão com consumo de energia."}/>

                <Instrucao cor={"bg-dark-greenn"} dark={"dark:bg-dark-greenn"} titulo={"COLETA DE DADOS"} imagem={areareservada} esquerda={true} textoC={"A câmera realiza a contagem dos insetos atraídos para o interior do dispositivo dentro de intervalos definidos pelo usuário. A cada ativação, o número de insetos detectados é enviado  para o aplicativo, permitindo o acompanhamento remoto em tempo real."} textoC2={"Nos períodos de inatividade, o sistema entra em modo repouso para menor consumo de energia e prolongar a  utilidade da bateria."}/>

                <Instrucao cor={"bg-light-green"} dark={"dark:bg-dark-green"} titulo={"ANÁLISE DE DADOS"} imagem={tabela} esquerda={false} textoC={"Os dados coletados sobre o número de insetos capturados por intervalos de tempo indicam quais regiões da propriedade e épocas do ano apresentam maior incidência de pragas. Com essas informações, ele pode elaborar um calendário estratégico de pulverizações, evitando aplicações desnecessárias e reduzindo o uso de defensivos químicos. Assim, é possível reduzir gastos e minimizar o impacto ambiental, garantindo um produto final mais saudável."} texto={"Em períodos de baixa incidência de pragas, o produtor pode optar por utilizar apenas o Argos no controle das pragas, até que a infestação exija outras medidas de manejo."}/>

                <div className="bg-white dark:bg-dark-mode flex flex-col justify-center items-center pb-2">
                    <h2 className="uppercase font-strike text-2xl text-black dark:text-white mt-10 text-center">AINDA HÁ DÚVIDAS? ASSISTA ESTE VÍDEO</h2>
                    <img src={areareservada} alt="" className="w-120 h-70 mx-auto mt-10" />
                </div>
            </div>

        </div>
    )
}