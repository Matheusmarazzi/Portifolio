

import './header.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {RxHamburgerMenu} from "react-icons/rx";



function Header(theme){
    const [tema,setTema] = useState(theme);
    const logo = '<Matheus-Dev/>';




    useEffect(()=>{
       setTema(theme);
    }, [theme])

    return(
        
        <div className={`header-container ${tema.theme}`}>
            <div className='menu'>
                
                    <RxHamburgerMenu id='botao'/>
            </div>
            <h3 className='logo'>{logo}</h3>
            <div className='links'>
                
                
                <Link to={`/`}>Home</Link>
                <Link to={`/about`}>Sobre mim</Link>
                <Link to={`/projects`} >Projetos</Link>
                
                
                
            </div>
            
            
        </div>

        
    )
}

    
export default Header;
