import React  from 'react';

const Navbar = () =>{
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">ToDo's App</a>
                <ul className="right">
                    <li><a href="/home">ToDo</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;