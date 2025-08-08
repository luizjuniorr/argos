import background_login from "../assets/background_login.png"
import logo_claro from "../assets/logo_claro.svg"
import { Link } from "react-router-dom"

export function Login() {
    return (
        <div className="flex justify-center md:justify-start items-end md:items-center relative min-h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${background_login})` }}>
            <div className="relative h-full w-full md:w-3/10 md:h-screen">
                <div className="absolute inset-0 bg-light-green opacity-100 z-0 rounded-tl-4xl rounded-tr-4xl md:rounded-br-4xl"></div>
                <div className="relative z-10 h-full w-full flex flex-col justify-center py-5">
                    <img src={logo_claro} alt="" className="h-25"/>

                    <form action="" className="flex flex-col items-center gap-5">
                        <div className="flex flex-col w-9/10">
                            <label htmlFor="email" className="font-gabarito text-dark-green">Email:</label>
                            <input type="email" placeholder="Digite seu email" id="email" className="bg-white border-1 border-gray rounded-sm placeholder:text-gray placeholder:font-inter placeholder:text-sm w-full focus:border-2 focus:border-blue-500 focus:outline-0" />
                        </div>
                        <div className="flex flex-col w-9/10">
                            <label htmlFor="senha" className="font-gabarito text-dark-green">Email:</label>
                            <input type="password" placeholder="Digite sua senha" id="senha" className="bg-white border-1 border-gray rounded-sm placeholder:text-gray placeholder:font-inter placeholder:text-sm w-full focus:border-2 focus:border-blue-500 focus:outline-0" />
                        </div>

                        <button className="bg-dark-green w-9/10 rounded-xl text-1xl text-white cursor-pointer">LOGIN</button>
                        
                        <p className="flex text-white">Não tem uma conta? <Link to={"/cadastro"}><p className="text-blue-500">Acesse aqui!</p></Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}