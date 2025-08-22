import { Header } from "../components/Header";

import produto from "../assets/produto_controle.png"
import icon_editar from "../assets/icon_editar.png"
import icon_excluir from "../assets/icon_excluir.png"

export function ControleDeItens() {
  return (
    <div className="flex flex-col h-screen justify-beetween">
        <Header />

      <div className="flex items-center justify-between text-dark-green font-strike text-xl px-4 py-2 border-1 border-dark-green mb-10 mx-5 my-10">
        <h2 className="md:text-2xl">Produtos</h2>
        <button className="bg-dark-green text-white font-redhat text-sm px-3 py-1 rounded hover:bg-gray-200">Criar</button>
      </div>

      <table className="border-1 border-dark-green mx-5 font-redhat">
        <thead className="text-gray-700 text-left">
          <tr>
            <th className="px-4">Nome</th>
            <th className="px-4">Valor</th>
            <th className="px-4 text-center">Ações</th>
          </tr>
        </thead>
        <tbody className="">

            <tr>
              <td className="px-4 py-2 flex items-center gap-2">
                <img src={produto} alt="Produto" className="w-8 h-8 rounded-full"/>
                <span>Nome do componente</span>
              </td>
              <td className="px-4 py-2">22,99</td>
              <td className="px-4 py-2 text-center">
                <div className="flex items-center justify-center gap-2">
                  <span className="cursor-pointer hover:opacity-75" title="Editar"><img src={icon_editar} alt="" /></span>
                  <span className="cursor-pointer hover:opacity-75" title="Excluir"><img src={icon_excluir} alt="" /></span>
                </div>
              </td>
            </tr>

            <tr>
              <td className="px-4 py-2 flex items-center gap-2">
                <img src={produto} alt="Produto" className="w-8 h-8 rounded-full"/>
                <span>Nome do componente</span>
              </td>
              <td className="px-4 py-2">22,99</td>
              <td className="px-4 py-2 text-center">
                <div className="flex items-center justify-center gap-2">
                  <span className="cursor-pointer hover:opacity-75" title="Editar"><img src={icon_editar} alt="" /></span>
                  <span className="cursor-pointer hover:opacity-75" title="Excluir"><img src={icon_excluir} alt="" /></span>
                </div>
              </td>
            </tr>

            <tr>
              <td className="px-4 py-2 flex items-center gap-2">
                <img src={produto} alt="Produto" className="w-8 h-8 rounded-full"/>
                <span>Nome do componente</span>
              </td>
              <td className="px-4 py-2">22,99</td>
              <td className="px-4 py-2 text-center">
                <div className="flex items-center justify-center gap-2">
                  <span className="cursor-pointer hover:opacity-75" title="Editar"><img src={icon_editar} alt="" /></span>
                  <span className="cursor-pointer hover:opacity-75" title="Excluir"><img src={icon_excluir} alt="" /></span>
                </div>
              </td>
            </tr>

            <tr>
              <td className="px-4 py-2 flex items-center gap-2">
                <img src={produto} alt="Produto" className="w-8 h-8 rounded-full"/>
                <span>Nome do componente</span>
              </td>
              <td className="px-4 py-2">22,99</td>
              <td className="px-4 py-2 text-center">
                <div className="flex items-center justify-center gap-2">
                  <span className="cursor-pointer hover:opacity-75" title="Editar"><img src={icon_editar} alt="" /></span>
                  <span className="cursor-pointer hover:opacity-75" title="Excluir"><img src={icon_excluir} alt="" /></span>
                </div>
              </td>
            </tr>

            <tr>
              <td className="px-4 py-2 flex items-center gap-2">
                <img src={produto} alt="Produto" className="w-8 h-8 rounded-full"/>
                <span>Nome do componente</span>
              </td>
              <td className="px-4 py-2">22,99</td>
              <td className="px-4 py-2 text-center">
                <div className="flex items-center justify-center gap-2">
                  <span className="cursor-pointer hover:opacity-75" title="Editar"><img src={icon_editar} alt="" /></span>
                  <span className="cursor-pointer hover:opacity-75" title="Excluir"><img src={icon_excluir} alt="" /></span>
                </div>
              </td>
            </tr>

            <tr>
              <td className="px-4 py-2 flex items-center gap-2">
                <img src={produto} alt="Produto" className="w-8 h-8 rounded-full"/>
                <span>Nome do componente</span>
              </td>
              <td className="px-4 py-2">22,99</td>
              <td className="px-4 py-2 text-center">
                <div className="flex items-center justify-center gap-2">
                  <span className="cursor-pointer hover:opacity-75" title="Editar"><img src={icon_editar} alt="" /></span>
                  <span className="cursor-pointer hover:opacity-75" title="Excluir"><img src={icon_excluir} alt="" /></span>
                </div>
              </td>
            </tr>

            

        </tbody>
      </table>
    </div>
  );
}
