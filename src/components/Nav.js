import React from "react";
import Logo from "../images/logo.png";

export default function Nav() {
    return (
        <div className="main-header">
            <div className="main-header__inner row">
                <div className="main-header__logo">
                    <img src={Logo} alt="Airbnb" />
                </div>
            </div>
        </div>

    )
}