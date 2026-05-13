import React from "react";
import { useTranslation } from "react-i18next";
import frame from "../../assets/Frame.png"; 
import "./Header.css"; 

const Header = () => {
    // useSuspense: false qilsangiz, yuklanishdagi xatolarni o'zi hal qiladi
    const { t, i18n } = useTranslation('translation', { useSuspense: false });

    const handleChangeLanguage = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <header>
            <div className="container">
                <div className="navbar">
                    <img src={frame} alt="logo"/>
                    <ul>
                        <li><a href="#">{t("header.Home")}</a></li>
                        <li><a href="#">{t("header.About")}</a></li>
                        <li><a href="#">{t("header.Services")}</a></li>
                        <li><a href="#">{t("header.Work")}</a></li>
                        <li><a href="#">{t("header.Blog")}</a></li>
                    </ul>
                    <select value={i18n.language} onChange={handleChangeLanguage}>
                        <option value="uz">UZB</option>
                        <option value="ru">RUS</option>
                        <option value="en">ENG</option>
                    </select>
                    <button>Kirish</button>
                </div>
            </div>
        </header>
    );
};
export default Header;