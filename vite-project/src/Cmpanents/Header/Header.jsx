import React, { useTranslation } from "react"
import "./Header.css"; 
import frame from "../../assets/Frame.png";  
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

 const Header = () =>{
    const {t,i18n} = useTranslation()

    const handleCHangeLanguage = (event)=>{
        i18n.changeLanguage(event.target.value)
    }
    return (
        <header>
            <div className="container">
                <div className="navbar">
                    <img src={frame} alt="rasm"/>
                    <ul>
                        <li><a href="#">{t("header.Home")}</a></li>
                        <li><a href="#">{t("header.About")}t</a></li>
                        <li><a href="#">{t("header.Services")}</a></li>
                        <li><a href="#">{t("header.Work")}</a></li>
                        <li><a href="#">{t("header.Blog")}</a></li>
                    </ul>
                    <select name="" id="" onChange={handleCHangeLanguage}>
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