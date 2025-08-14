import { Link } from "react-router-dom";
const tema = JSON.parse(localStorage.getItem("tema"));

export function NotFoundPage() {
    return (
        <div className=" \dark:bg-dark-mode gap-5 h-screen w-full flex flex-col justify-center items-center border-1">
            <h1 className="text-dark-mode dark:text-white text-2xl uppercase">Esta página não existe</h1>
            <Link to={"/"}>
                <button className="bg-none border-1 border-dark-mode rounded-xl p-2 cursor-pointer">Voltar à página inicial</button>
            </Link>
        </div>
    )
}
