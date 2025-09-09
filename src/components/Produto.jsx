export function Produto({ imagem, produto, preco, promocao }) {
    return (
        <div className="flex justify-around w-60">
            <div className="border-1 dark:border-white border-gray p-5">
                <img src={imagem} alt="" className="h-40 max-w-40 border-1 dark:border-white border-gray" />

                <p>{produto}</p>

                <div>
                    <p>R$ {preco}</p>
                </div>
            </div>
        </div>
    )
}