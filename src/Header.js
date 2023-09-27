import React from "react";
import "./styles/Header.css"

function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="./logo192.png" alt="logo" className="nav-logo"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;