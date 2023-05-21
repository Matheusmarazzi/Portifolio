
import './theme.css';




function ChangeTheme({theme, icon, funcao}){
  
    


    return (
        <div className={`container-button ${theme}`}>
            <button id="btn" onClick={funcao} className={theme} >{icon}</button>
        </div>
        
    )

}
    


export default ChangeTheme;