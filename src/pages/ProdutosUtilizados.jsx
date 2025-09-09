import { Header } from "../components/Header.jsx";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

import arduino from "../assets/produto_arduino.png"
import esp from "../assets/produto_esp32.webp"
import fonteajustavel from "../assets/produto_fonteajustavel.png"
import painelsolar from "../assets/produto_PlacaSolar.webp"
import reguladordetensao from "../assets/produto_ReguladorDeTensao.webp"
import sensordechuva from "../assets/produto_SensorDeChuva.png"
import resistores from "../assets/produto_resistores.png"
import servomotor from "../assets/produto_ServoMotor.webp"
import camera from "../assets/produto_UNIHIKER.png"
import rtc from "../assets/produto_rtc.webp"

import { Produto } from "../components/Produto.jsx";

export function ProdutosUtilizados() {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <div className="dark:text-white">
            <Header />
            <div className="flex flex-col justify-center items-center">

                <h1 className="font-tauri text-2xl mt-2 mb-2">Produtos utilizados </h1>

                <div className="flex flex-wrap justify-center gap-5 w-full">

                    <Produto imagem={arduino} produto="Arduino" preco="74,90" />

                    <Produto imagem={sensordechuva} produto="Sensor de chuva" preco="5,22" />

                    <Produto imagem={camera} produto="Câmera UNIHIKER K10" preco="246,38" />

                    <Produto imagem={resistores} produto="Resistores" preco="28,40" />

                    <Produto imagem={painelsolar} produto="Painel Solar" preco="68,90" />

                    <Produto imagem={esp} produto="Esp-32" preco="59,90" />

                    <Produto imagem={fonteajustavel} produto="Fonte Ajustável" preco="10,90" />

                    <Produto imagem={reguladordetensao} produto="Regulador de tensão" preco="9,90" />

                    <Produto imagem={servomotor} produto="Servo motor" preco="24,90" />

                    <Produto imagem={rtc} produto="Real Time Clock RTC" preco="24,99" />


                </div>
            </div>

        </div>
    )
}