import React from 'react';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="contenedor">
                <p>¿Preguntas? Llama al 01-800-265-0161</p>
                <nav className="menu-footer">
                    <a href="http://localhost:3000/">Términos de las tarjetas de regalo</a>
                    <a href="http://localhost:3000/">Términos de uso</a>
                    <a href="http://localhost:3000/">Declaración de privacidad</a>
                </nav>
                <select className="lenguaje" name="" id="">
                    <option value="eng">English</option>
                    <option value="esp">Español</option>
                </select>
            </div>
        </footer>
    );
}

export default Footer;