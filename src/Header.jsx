import React from "react";
import {Link} from "react-router-dom"; 
import {profileIcon, cartIcon} from "./icons.js";
import "./css/header.css";

const Header = () => {
    return (
        <div className="header">
            <Link to={"/"}>
                <img className="header__logo" src="/images/logo.png" />
            </Link>
            <div className="header__buttons">
            <div className={"header__button"}>
                    <img src={profileIcon} />
                    <img src="/images/logo.svg" /> {/* className="header__logo" */}
                </div>
                <div className={"header__button"}>
                    <img src={cartIcon} />
                    <div className={"header__button-text"}>Cart</div>
                </div>
            </div>
        </div>
    );
};

export default Header; 