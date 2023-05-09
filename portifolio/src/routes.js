import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Skills from "./pages/Skills";
import Projetos from "./pages/Projetos";


import Header from "./components/Header";



import Erro from "./pages/Erro";
import Footer from "./components/footer";

function RouteApp(){
    return(

        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<Sobre/>}/>
                <Route path="/skills" element={<Skills/>}/>
                <Route path="/projects" element={<Projetos/>}/>





                
                <Route path="*" element={<Erro/>}/>

            </Routes>
            <Footer/>   
        </BrowserRouter>
    )
}

export default RouteApp;