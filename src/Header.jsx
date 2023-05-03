import Logo from "./assets/images/logo.svg";
import IconMenu from "./assets/images/icon-menu.svg";
import IconMenuClose from "./assets/images/icon-menu-close.svg";
import { useState, useEffect } from "react";

function Header ({ setIsNavOpen, isNavOpen }) {

    const menuToggle = () => {
        setIsNavOpen(!isNavOpen);
    }


    return (
        <header>
            <div className="logo-wrapper"><img className="logo" src={Logo} alt="logo" /></div>
            <nav className="header-nav">
                <ul className="header-nav-list">
                    <li className="nav-list-item">Home</li>
                    <li className="nav-list-item">New</li>
                    <li className="nav-list-item">Popular</li>
                    <li className="nav-list-item">Trending</li>
                    <li className="nav-list-item">Categories</li>
                </ul>
            </nav>
            <button className="menu-open" onClick={menuToggle}><img src={IconMenu} alt="icon-menu" /></button>
            <nav className={`mobile-header-nav ${isNavOpen === true ? "visible-nav" : ""}`}>
                <button className="menu-close" onClick={menuToggle}><img src={IconMenuClose} alt="icon-menu" /></button>
                <ul className="header-nav-list">
                    <li className="nav-list-item">Home</li>
                    <li className="nav-list-item">New</li>
                    <li className="nav-list-item">Popular</li>
                    <li className="nav-list-item">Trending</li>
                    <li className="nav-list-item">Categories</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;