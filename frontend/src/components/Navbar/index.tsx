import { DiReact } from "react-icons/di";
import './styles.css'

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>WemmeloMovie</h1>
                    <a href="https://github.com/wemmelotec" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <DiReact />
                            <p className="dsmovie-contact-link">/wemmelotec</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;