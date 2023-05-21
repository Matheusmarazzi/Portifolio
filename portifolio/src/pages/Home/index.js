import 'C:/Users/Dev/Desktop/Aulas-Projetos/Portifolio/portifolio/src/services/changeTheme/theme.css';
import './home.css';
import { useEffect, useState } from 'react';
import foto1 from '../../img/foto1.jpeg';






function Home(theme){
     
    const [tema,setTema] = useState(theme);


    useEffect(()=>{
       setTema(theme);
    }, [theme])

    

    
    return(
        <div className={` ${tema.theme} container-home `}>
            
            <p>
                Oii, me chamo Matheus, sou Desenvolvedor Web/Mobile.<br/>
                Obrigado por visitar meu portifólio, aqui você pode me conhecer melhor e ver alguns projetos meus.
            
            </p>



            <img src={foto1} alt="foto de perfil"/>
            
            


                

        </div>
    
      
    
        
    )
}

export default Home;