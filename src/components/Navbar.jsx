import React, { useState } from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';


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
                    <a href="#" className="link">
                        <Link className="text" to="/">Anasayfa</Link>
                    </a>
                </li>
                <li className="item">
                    <a href="#" className="link">
                        <Link className="text" to="/about">Hakkında</Link>
                    </a>
                </li>
                <li className="item">
                    <a href="#" className="link">
                        <Link className="text" to="/contact">İletişim</Link>
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