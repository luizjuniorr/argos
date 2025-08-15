import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { NotFoundPage } from './pages/NotFoundPage.jsx'
import { QuemSomos } from './pages/QuemSomos.jsx'
import { Cadastro } from './pages/Cadastro.jsx'
import { Login } from './pages/Login.jsx'
import { ProdutosUtilizados } from './pages/ProdutosUtilizados.jsx'
import { Jogo } from './pages/Jogo.jsx'
import { Referencias } from './pages/Referencias.jsx'
import { ControleDeItens } from './pages/ControleDeItens.jsx'
import { Instrucoes } from './pages/Instrucoes.jsx'


const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "*", element: <NotFoundPage /> },
  { path: "/quemSomos", element: <QuemSomos /> },
  { path: "/cadastro", element: <Cadastro /> },
  { path: "/login", element: <Login /> },
  { path: "/produtosutilizados", element: <ProdutosUtilizados /> },
  { path: "/jogo", element: <Jogo /> },
  { path: "/referencias", element: <Referencias /> },
  { path: "/controledeitens", element: <ControleDeItens /> },
  { path: "/instrucoes", element: <Instrucoes /> },
])

import { ThemeProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider >
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
