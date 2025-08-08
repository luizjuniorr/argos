import { Link } from "react-router-dom";
const tema = JSON.parse(localStorage.getItem("tema"));

export function NotFoundPage() {
    return (
        <>
            {tema ? (
                <div className="bg-dark-mode gap-5 h-screen w-full flex flex-col justify-center items-center border-1">
                    <h1 className="text-2xl text-white uppercase">Esta página não existe</h1>
                    <Link to={"/"}>
                        <button className="bg-dark-mode border-1 border-white text-white rounded-xl p-2 cursor-pointer">Voltar à página inicial</button>
                    </Link>
                </div>
            ) : (
                <div className="h-screen w-full flex flex-col justify-center items-center border-1">
                    <h1 className="text-2xl">Esta página não existe</h1>
                    <Link to={"/"}>
                        <button className="bg-red-400 rounded-xl p-1">Voltar à página inicial</button>
                    </Link>
                </div>
            )}
        </>
    )
}
