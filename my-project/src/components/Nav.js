import { Link } from "react-router-dom";

function Nav(){
    return(
        <nav>
            <h3>LOGO</h3>
            <ul className="App-link">
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li> <Link to="/counter">Counter</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;