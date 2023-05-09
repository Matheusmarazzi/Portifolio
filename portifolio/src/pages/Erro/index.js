import { Link } from "react-router-dom";
import './erro.css';


function Erro(){
    return(
        <div className="err">
            <strong>Ops, Pagina não encontrada</strong>
            <Link className="back" to={'/'}>Voltar a pagina inicial</Link>
        </div>
    )
}

export default Erro;