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
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                    <select name="" id="">
                        <option value="uzb">uzb</option>
                        <option value="rus">rus</option>
                        <option value="eng">eng</option>
                    </select>
                    <button>Kirish</button>
                </div>
            </div>
        </header>
    )
 }
 export default Header;