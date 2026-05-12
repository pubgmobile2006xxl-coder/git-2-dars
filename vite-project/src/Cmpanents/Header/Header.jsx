import React from "react"
import "./Header.css"; 
import frame from "../../assets/Frame.png";  

 const Header = () =>{
    return (
        <header>
            <div className="container">
                <div className="navbar">
                    <img src={frame} alt="rasm"/>
                    <ul>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Faq</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <button></button>
                </div>
            </div>
        </header>
    )
 }
 export default Header;