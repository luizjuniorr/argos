import { TextoInstrucoes } from "./TextoIntrucoes.jsx"

export function Instrucao({ titulo, imagem, textoC, textoC2, texto, texto2, texto3, texto4, cor, dark, esquerda }) {
    return (
        <div className="flex flex-col justify-around">
            <div className={`${cor} ${dark} flex flex-col justify-center items-center pb-2 md:hidden`}>
                <h2 className="uppercase font-strike text-2xl md:text-5xl text-verde-pastel mt-10">{titulo}</h2>
                <div className="md:max-w-1/2">
                    {textoC && <TextoInstrucoes texto={textoC} />}
                    {textoC2 && <TextoInstrucoes texto={textoC2} />}
                </div>
                <img src={imagem} alt="" className="w-70 md:w-130 h-70 md:h-130 mx-auto mt-10" />
                <div className="md:max-w-1/2">
                    {texto && <TextoInstrucoes texto={texto} />}
                    {texto2 && <TextoInstrucoes texto={texto2} />}
                    {texto3 && <TextoInstrucoes texto={texto3} />}
                </div>
            </div>

            <div className={`${cor} ${dark} hidden md:flex justify-around px-15 pb-2`}>
                <div className="flex gap-30 items-center">
                    

                    {esquerda === true && (
                        <div className="flex items-center justify-center">
                            <img src={imagem} alt="" className="w-120 mt-8" />
                        </div>
                    )}

                    <div className="flex flex-col max-w-200 mt-20">
                        <h2 className="uppercase font-strike text-5xl text-verde-pastel">{titulo}</h2>
                        {textoC && <TextoInstrucoes texto={textoC} />}
                        {textoC2 && <TextoInstrucoes texto={textoC2} />}
                        {texto && <TextoInstrucoes texto={texto} />}
                        {texto2 && <TextoInstrucoes texto={texto2} />}
                        {texto3 && <TextoInstrucoes texto={texto3} />}
                        {texto4 && <TextoInstrucoes texto={texto4} />}
                    </div>

                    {esquerda === false && (
                        <div className="flex items-center justify-center">
                            <img src={imagem} alt="" className="w-120 mt-8" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
