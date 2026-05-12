import React from "react";
import "./Header.css";
import frame from "../assets/Frame1.png"
const Header = () =>{
    return(
        <header>
            <div className="container">
                <div className="navbar">
                    <img src={frame} alt="rasm"/>
                    
                </div>
            </div>
        </header>
    )
}
export default Header;