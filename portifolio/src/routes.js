import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import {BsMoonStars, BsFillSunFill} from "react-icons/bs";


import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";

import ChangeTheme from "./services/changeTheme";
import Header from "./components/Header";
import Footer from "./components/Footer";


import Erro from "./pages/Erro";



function RouteApp(){
    const [tema, setTema] = useState('Light');
    const [icone, setIcone] = useState(<BsMoonStars/>);

    function mudarTema(){
        if(tema === 'Light'){
            setTema('Dark')
            setIcone(<BsFillSunFill/>);
        }else{
            setTema('Light');
            setIcone(<BsMoonStars/>);
        }
        
    }


    return(

        <BrowserRouter>
            <Header theme={tema}/>
            <ChangeTheme theme={tema} icon={icone} funcao={mudarTema}/>
            <Routes>
                <Route path="/" element={<Home theme={tema}/>}/>
                <Route path="/about" element={<Sobre theme={tema}/>}/>
                <Route path="/projects" element={<Projetos theme={tema}/>}/>




                
                <Route path="*" element={<Erro/>}/>

            </Routes>
            <Footer theme={tema}/>   
        </BrowserRouter>
    )
}

export default RouteApp;