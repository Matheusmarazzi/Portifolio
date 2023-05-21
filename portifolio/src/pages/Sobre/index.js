import 'C:/Users/Dev/Desktop/Aulas-Projetos/Portifolio/portifolio/src/services/changeTheme/theme.css';
import { useState, useEffect } from 'react';
import './sobre.css';
import foto3 from '../../img/foto3.jfif';


function Sobre(theme){
    const [tema,setTema] = useState(theme);


    useEffect(()=>{
        setTema(theme);
     }, [theme])
    return(
        <div className={`${tema.theme} container-sobre `}>
            <strong>
                Olá, me chamo Matheus, sou Técnico em Desenvolvimento de Sistemas pela Etec de Itanhaém,
                Atualmente estou cursando Análise e Desenvolvimento de Sistemas na instituição Fatec de Praia Grande.
                Sempre fui apaixonado em tecnologia, estou no mundo de Desenvolvimento a mais de 3 anos. 

                
                
            </strong>
            <img src={foto3} alt="foto de perfil"/>
        </div>
    )
}

export default Sobre;