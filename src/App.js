import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UsuarioContextProvider } from "./shared/contexts/UsuarioContext"
import { CarrinhoContextProvider } from "./shared/contexts/CarrinhoContext"
import Home from "./pages/Home"
import Cardapio from "./pages/Cardapio"
import Carrinho from "./pages/Carrinho"

const App = () => {
    return (
        <BrowserRouter>
            <CarrinhoContextProvider>
                <UsuarioContextProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cardapio" element={<Cardapio />} />
                        <Route path="/carrinho" element={<Carrinho />} />
                    </Routes>
                </UsuarioContextProvider>
            </CarrinhoContextProvider>
        </BrowserRouter>
    )
}

export default App

