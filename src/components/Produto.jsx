export function Produto({ imagem, produto, preco, promocao }) {
    return (
        <div className="flex justify-around w-60">
            <div className="border-1 border-gray p-5">
                <img src={imagem} alt="" className="h-40 border-1 border-gray" />

                <p>{produto}</p>

                <div>
                    {/* <p className="text-gray line-through">R$ {promocao}</p> */}
                    <p>R$ {preco}</p>
                </div>
            </div>
        </div>
    )
}