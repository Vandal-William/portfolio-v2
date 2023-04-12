import { NavLink } from "react-router-dom";
import './styles.scss'

function NavBar() {
    return (
        <nav className="navigation">
            <div className="navigation-marque">
                <h1>Développer front React</h1>
                <span>William - Vandal</span>
            </div>
            <ul className="navigation-ul">
                <li className="navigation-li"><NavLink className="navigation-link" to='/'>Profil</NavLink></li>
                <li className="navigation-li"><NavLink className="navigation-link" to='/skills'>Compétences</NavLink></li>
                <li className="navigation-li"><NavLink className="navigation-link" to='/project'>Projets</NavLink></li>
                <li className="navigation-li"><NavLink className="navigation-link" to='/contact'>Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar;