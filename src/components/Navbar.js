import React  from 'react';
import { Link,NavLink } from 'react-router-dom';
const Navbar = () =>{
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">ToDo's App</a>
                <ul className="right">
                    <li><Link to="/">ToDo</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;