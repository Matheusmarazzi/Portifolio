import { useState, useEffect } from 'react';
import netMax from '../../img/netMax.png';
import 'C:/Users/Dev/Desktop/Aulas-Projetos/Portifolio/portifolio/src/services/changeTheme/theme.css';
import './projetos.css';
import teste from '../../JSON/teste.json';



function Projetos(theme){
    const [tema,setTema] = useState(theme);
    const obj = [teste];


    useEffect(()=>{
       setTema(theme);
    }, [theme])
    return(
        <div className={`container-project ${tema.theme}`}>
            <div className='projeto1'>
                <div className='card '>
                    <img src={netMax} alt='nomedoprojeto'/>
                    <h1>Net Max</h1>
                    <button> ver detalhes</button>
                </div>
            </div>
            
        </div>

    
        
    )
}
export default Projetos;