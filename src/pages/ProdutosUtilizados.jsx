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

                    <Produto imagem={produto} produto="Arduino" preco="39,99" promocao="49,99"/>

                    <Produto imagem={produto} produto="Fios" preco="39,99" promocao="49,99"/>

                    <Produto imagem={produto} produto="Capacitores" preco="39,99" promocao="49,99"/>

                </div>
            </div>

        </div>
    )
}