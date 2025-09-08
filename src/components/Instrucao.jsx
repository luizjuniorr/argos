import { TextoInstrucoes } from "./TextoIntrucoes.jsx"

export function Instrucao({ titulo, imagem, textoC, textoC2, texto, texto2, texto3, texto4, cor }) {
    return (
        <div className="">
            <div className={`${cor} flex flex-col justify-center items-center pb-2 md:hidden`}>
                <h2 className="uppercase font-strike text-2xl md:text-5xl text-verde-pastel mt-10">{titulo}</h2>
                <div className="md:max-w-1/2">
                    {textoC && <TextoInstrucoes texto={textoC} />}
                    {textoC2 && <TextoInstrucoes texto={textoC2} />}
                </div>
                <img src={imagem} alt="" className="w-70 md:w-130 h-70 md:h-130 mx-auto mt-10" />
                <div className="md:max-w-1/2">
                    <TextoInstrucoes texto={texto} />
                    {texto2 && <TextoInstrucoes texto={texto2} />}
                    {texto3 && <TextoInstrucoes texto={texto3} />}
                </div>
            </div>

            <div className={`${cor} w-screen flex justify-center items-center pb-2 hidden md:flex`}>
                <div className="md:max-w-1/2 mx-auto">
                    <h2 className="uppercase font-strike text-5xl text-verde-pastel mt-20">{titulo}</h2>
                    {textoC && <TextoInstrucoes texto={textoC} />}
                    {textoC2 && <TextoInstrucoes texto={textoC2} />}
                    {texto && <TextoInstrucoes texto={texto} />}
                    {texto2 && <TextoInstrucoes texto={texto2} />}
                    {texto3 && <TextoInstrucoes texto={texto3} />}
                    {texto4 && <TextoInstrucoes texto={texto4} />}
                </div>
                <img src={imagem} alt="" className="h-80 mx-auto my-10" />
            </div>
        </div>

    )
}
