import background_cadastro from "../assets/background_cadastro.png"
import logo_claro from "../assets/logo_claro.svg"
import { Link } from "react-router-dom"

export function Cadastro() {
    return (
        <div className="flex justify-center items-end md:items-center relative min-h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${background_cadastro})` }}>
            <div className="relative hidden md:block">
                <div className="absolute inset-0 bg-dark-green opacity-80 z-0"></div>
                <div className="relative z-10 text-white flex flex-col justify-between h-110 w-80 p-5">
                    <h1 className="font-strike text-5xl">Por que você precisa de uma conta?</h1>
                    <p className="font-gabarito text-sm text-silver">Com uma conta cadastrada, você terá acesso total a todas as páginas do site, vai conhecer melhor como o AgroView funciona e ainda pode nos ajudar a melhorar com sua opinião!</p>
                    <p className="font-gabarito text-sm">Já tem uma conta? <a href="" className="text-blue-300">Acesse aqui!</a></p>
                </div>
            </div>
            <div className="relative px-10 overflow-hidden w-full md:w-fit">
                <div className="absolute inset-0 bg-light-green z-0 rounded-tl-4xl rounded-tr-4xl md:rounded-none"></div>
                <div className="relative z-10 text-white flex flex-col justify-center gap-2 h-full py-2 md:py-0 md:h-110 md:w-60">
                    <img src={logo_claro} alt="" className="h-30" />

                    <form action="" className="flex justify-center items-center flex-col gap-2">
                        <div className="flex flex-col w-full">
                            <label htmlFor="usuario" className="font-gabarito text-dark-green">Usuário:</label>
                            <input type="text" placeholder="Digite seu nome de usuário" id="usuario" className="bg-white border-1 border-gray rounded-sm placeholder:text-gray placeholder:font-inter placeholder:text-sm w-full focus:border-2 focus:border-blue-500 focus:outline-0" />
                        </div>

                        <div className="flex flex-col w-full">
                            <label htmlFor="email" className="font-gabarito text-dark-green">Email:</label>
                            <input type="email" placeholder="Digite seu email" id="email" className="bg-white border-1 border-gray rounded-sm placeholder:text-gray placeholder:font-inter placeholder:text-sm w-full focus:border-2 focus:border-blue-500 focus:outline-0" />
                        </div>

                        <div className="flex flex-col w-full">
                            <label htmlFor="senha" className="font-gabarito text-dark-green">Senha:</label>
                            <input type="password" placeholder="Digite sua senha" id="senha" className="bg-white border-1 border-gray rounded-sm placeholder:text-gray placeholder:font-inter placeholder:text-sm w-full focus:border-2 focus:border-blue-500 focus:outline-0" />
                        </div>

                        <div className="flex flex-col w-full">
                            <label htmlFor="confirmacaosenha" className="font-gabarito text-dark-green">Confirme sua senha:</label>
                            <input type="text" placeholder="Digite sua senha novamente" id="confirmacaosenha" className="bg-white border-1 border-gray rounded-sm placeholder:text-gray placeholder:font-inter placeholder:text-sm w-full focus:border-2 focus:border-blue-500 focus:outline-0" />
                        </div>

                        <button className="bg-dark-green w-full rounded-xl text-1xl">CRIAR CONTA</button>

                        <p className="flex">Já tem uma conta? <Link to={"/login"}><p className="text-blue-500">Acesse aqui!</p></Link></p>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}