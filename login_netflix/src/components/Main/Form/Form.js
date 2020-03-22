import React from 'react';

const Form = () => {
    return (
        <form action="#">
            <legend>Inicia Sesión</legend>
            <div className="campo">
                <input type="text" id="usuario"/>
                <label htmlFor="">Email o Número de Teléfono</label>
            </div>
            <div className="campo">
                <input type="password" id="password"/>
                <label htmlFor="">Contraseña</label>
            </div>
            <div className="submit">
                <input type="submit" value="Iniciar Sesión"/>
            </div>
            <div className="acciones">
                <div className="recuerdame">
                    <input type="checkbox"/>
                    <label htmlFor="">Recuérdame</label>
                </div>
                <div className="ayuda">
                    <a href="http://localhost:3000/">¿Necesitas Ayuda?</a>
                </div>
            </div>
        </form>
    );
}

export default Form;