import React, { memo } from "react";
import './Footer.css';

const Footer = memo(() => {
    return (
        <footer className="footer">
            <nav className="footer__nav">
                <ul>
                    <li className="footer__list">© 2024 Vinyl Records — Все права защищены</li>
                    <li className="footer__list">Пользовательское соглашение</li>
                    <li className="footer__list">Политика конфиденциальности</li>
                </ul>
            </nav>
        </footer>
    );
});

export default Footer;