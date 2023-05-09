import { Link } from "react-router-dom"
import './footer.css';


function Footer(){
    return(
        <footer class="footer">
            <p class="footer_title">Matheus Marazzi</p>
            <div class="footer_social">
                <Link>WhatApp</Link>
                <Link>Linkedin</Link>
                <Link>Github</Link>
                <Link>Instagram</Link>

            </div>
        </footer>
    )


}

export default Footer