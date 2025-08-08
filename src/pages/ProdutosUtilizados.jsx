import { Header } from "../components/Header.jsx";

import produto from "../assets/produto.png"

export function ProdutosUtilizados() {
    return (
        <div className="dark:text-white">
            <Header />
            <div className="flex flex-col justify-center items-center">

                <h1 className="font-tauri text-2xl mt-2 mb-2">Produtos utilizados</h1>

                <div className="flex flex-wrap justify-center gap-5 w-full">

                    <div className="flex justify-around w-60">
                        <div className="border-1 border-gray p-5">
                            <img src={produto} alt="" className="h-40 border-1 border-gray" />

                            <p>Nome do produto</p>

                            <div>
                                <p className="text-gray line-through">R$ 49,99</p>
                                <p>R$ 39,99</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-around w-60">
                        <div className="border-1 border-gray p-5">
                            <img src={produto} alt="" className="h-40 border-1 border-gray" />

                            <p>Nome do produto</p>

                            <div>
                                <p className="text-gray line-through">R$ 49,99</p>
                                <p>R$ 39,99</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-around w-60">
                        <div className="border-1 border-gray p-5">
                            <img src={produto} alt="" className="h-40 border-1 border-gray" />

                            <p>Nome do produto</p>

                            <div>
                                <p className="text-gray line-through">R$ 49,99</p>
                                <p>R$ 39,99</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-around w-60">
                        <div className="border-1 border-gray p-5">
                            <img src={produto} alt="" className="h-40 border-1 border-gray" />

                            <p>Nome do produto</p>

                            <div>
                                <p className="text-gray line-through">R$ 49,99</p>
                                <p>R$ 39,99</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-around w-60">
                        <div className="border-1 border-gray p-5">
                            <img src={produto} alt="" className="h-40 border-1 border-gray" />

                            <p>Nome do produto</p>

                            <div>
                                <p className="text-gray line-through">R$ 49,99</p>
                                <p>R$ 39,99</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-around w-60">
                        <div className="border-1 border-gray p-5">
                            <img src={produto} alt="" className="h-40 border-1 border-gray" />

                            <p>Nome do produto</p>

                            <div>
                                <p className="text-gray line-through">R$ 49,99</p>
                                <p>R$ 39,99</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-around w-60">
                        <div className="border-1 border-gray p-5">
                            <img src={produto} alt="" className="h-40 border-1 border-gray" />

                            <p>Nome do produto</p>

                            <div>
                                <p className="text-gray line-through">R$ 49,99</p>
                                <p>R$ 39,99</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}