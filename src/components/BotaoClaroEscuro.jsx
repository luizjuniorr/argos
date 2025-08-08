export function BotaoClaroEscuro({ situacaoBotao, setSituacaoBotao, tema, setTema }) {

    function modoEscuroClaro() {

        if (situacaoBotao === true) {
            setSituacaoBotao(false)
            setTema("dark")
            localStorage.setItem("tema", JSON.stringify(tema))
            return
        }

        setSituacaoBotao(true)
        setTema("light")
        localStorage.setItem("tema", JSON.stringify(tema))
    }

    return (
        <>
            {
                situacaoBotao ? (
                    <div>
                        <button className="bg-none transition duration-400" onClick={modoEscuroClaro}>
                            <div className="w-12 h-5 rounded-xl bg-white flex items-center p-1 cursor-pointer">
                                <div className="w-3 h-3 bg-dark-mode rounded-full"></div>
                            </div>
                        </button>
                    </div>
                ) : (
                    <div>
                        <button className="bg-none transition duration-400" onClick={modoEscuroClaro}>
                            <div className="w-12 h-5 rounded-xl bg-dark-mode flex items-center p-1 cursor-pointer justify-end">
                                <div className="w-3 h-3 bg-white rounded-full flex "></div>
                            </div>
                        </button>
                    </div>
                )}
        </>
    )
}