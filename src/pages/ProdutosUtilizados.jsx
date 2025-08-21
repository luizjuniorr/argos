import { Header } from "../components/Header.jsx";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

import produto from "../assets/produto.png"
import { Produto } from "../components/Produto.jsx";

export function ProdutosUtilizados() {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <div className="dark:text-white">
            <Header />
            <div className="flex flex-col justify-center items-center">

                <h1 className="font-tauri text-2xl mt-2 mb-2">Produtos utilizados </h1>

                <div className="flex flex-wrap justify-center gap-5 w-full">

                    <Produto imagem={produto} produto="Arduino" preco="74,90" />

                    <Produto imagem={produto} produto="Sensor de chuva" preco="5,22" />

                    <Produto imagem={produto} produto="Câmera UNIHIKER K10" preco="246,38" />

                    <Produto imagem={produto} produto="Resistores" preco="28,40" />

                    <Produto imagem={produto} produto="Painel Solar" preco="68,90" />

                    <Produto imagem={produto} produto="Esp-32" preco="59,90" />

                    <Produto imagem={produto} produto="Fonte Ajustável" preco="10,90" />

                    <Produto imagem={produto} produto="Regulador de tensão" preco="9,90" />

                    <Produto imagem={produto} produto="Servo motor" preco="24,90?" />


                </div>
            </div>

        </div>
    )
}