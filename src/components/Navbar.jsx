import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from 'react-router-dom';
import aykb from "../assets/adidas2.png"

function Navbar() {

    const [active, setActive] = useState("menu");
    const [icon, setIcon] = useState("toggler");

    const navToggle = () => {
        if (active === "menu") {
            setActive("menu navActive");
        } else setActive("menu");

        if (icon === "toggler") {
            setIcon("toggler toggle");
        } else setIcon("toggler");
    };

    return (
        <nav className="nav">
            <ul className={active}>
                <li className="item">
                    <a href="https://www.adidas.com.tr/tr/sezon_sonu_indirimi?cm_mmc=&cm_mmc1=&cm_mmc2=&gad_source=1&gclid=Cj0KCQjwj9-zBhDyARIsAERjds3PczcDfSZ94R3PUoO33H2kuiTakSZXYX3nWQwlGxB8vQSaJbJZpkIaAlsHEALw_wcB&gclsrc=aw.ds" target="_blank">
                        <img className="navImage" src={aykb} alt="adidas2.png" />
                    </a>
                </li>
                <li className="item">
                    <a href="#" className="link">
                        <Link className="text" to="/">Home</Link>
                    </a>
                </li>
                <li className="item">
                    <a href="#" className="link">
                        <NavLink className="text" to="/about">About</NavLink>
                    </a>
                </li>
                <li className="item">
                    <a href="#" className="link">
                        <NavLink className="text" to="/contact">Contact</NavLink>
                    </a>
                </li>
            </ul>
            <div onClick={navToggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <a href="#" className="brand">
                SHOPPİNG
            </a>
        </nav>
    );
}

export default Navbar;