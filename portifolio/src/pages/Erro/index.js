import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './erro.css';


function Erro(theme){
    const [tema,setTema] = useState(theme);


    useEffect(()=>{
       setTema(theme);
    }, [theme])
    return(
        <div className={`err ${tema.theme}`}>
            <strong>Ops, Pagina não encontrada</strong>
            <Link className="back" to={'/'}>Voltar a pagina inicial</Link>
        </div>
    )
}

export default Erro;