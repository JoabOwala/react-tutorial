import React from "react";
import "./styles/Header.css"

function Header() {
    return (
        <header>
            <nav className="nav navbar navbar-light bg-light">
                <a className="navbar-brand logi" href="#">
                <img src="./logo192.png" alt="logo" className="nav-logo"/>
                React
                </a>
                <ul className="nav-items">
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;