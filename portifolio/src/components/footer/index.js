import { BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";
import { useEffect, useState } from "react";
import './footer.css';


function Footer(theme){
    const [tema,setTema] = useState(theme);


    useEffect(()=>{
       setTema(theme);
    }, [theme])
    return(
            <div className={`footer ${tema.theme+'f'}`}>
            <h3 className="footer_title ">Matheus Marazzi</h3> 
            <div className="footer_social">
                <a target='blank' rel="external" href="https://wa.me/5513988328510"><BsWhatsapp/></a>
                <a target='blank' rel="external" href="https://www.linkedin.com/in/matheus-marazzi-28489621b"><BsLinkedin/></a>
                <a target='blank' rel="external" href="https://github.com/Matheusmarazzi"><BsGithub/></a>

            </div>
        </div>
    )


}

export default Footer