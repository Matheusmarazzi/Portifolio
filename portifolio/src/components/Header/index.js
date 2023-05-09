
import './header.css';
import { Link } from 'react-router-dom';
// import { useState } from 'react';



function Header(){
    // const [tema, setTema] = useState();
    // function mudarTema(){
    //     if(tema == 'Light'){
    //         setTema('Dark');
    //     }else{
    //         setTema('Light');
    //     }
    //     console.log(tema)
    // }
    return(
        
        <div className='header-container'>
            <h3 className='logo'>Matheus-Dev</h3>
            <div className='links'>
                {/* <button onClick={mudarTema}>tema</button> */}
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>Sobre mim</Link>
                <Link to={'/skills'} >Skills</Link>
                <Link to={'/projects'} >Projetos</Link>
                
                
                
            </div>
            
            {/* <span className='button'>button</span>             */}
        </div>

        
    )
}
export default Header;
