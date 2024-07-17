import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import PaginaBase from "./pages/PaginaBase"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Inicio from "./pages/Inicio"

function AppRoutes(){
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PaginaBase />}>
              <Route index element={<Inicio />} />
            </Route>
          </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes