import React, { useState } from 'react';

const Form = () => {

    // State para iniciar sesión
    const [login, validarLogin] = useState({
        usuario: '',
        password: '',
        estatusUsuario: false,
        estatusPassword: false,
        claseInputUs: '',
        claseInputPs: '',
        claseLabelUs: '',
        claseLabelPs: '',
        mensaje:'',
        blur: false,
        tipoPassword: 'password',
        claseSpan: '',
        text: 'Mostrar'
    });

    // Extraer de Usuario
    const { usuario, password } = login;

    const onChange = (e) => {
        validarLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    };

    const onBlur = (e) => {
        e.preventDefault();
        console.log('onBlur Input!');
        validarLogin ({
            ...login,
            [e.target.name]: e.target.value,
        })
        const input = e.target.name;
        console.log(input);
        // *** Validar que no haya campos vacíos *** //
        if(usuario.trim() === '' && input === 'usuario') {
            validarLogin({
                ...login,
                estatusUsuario: true,
                claseInputUs: 'no-valido',
                claseLabelUs: 'valido',
                mensaje: 'Este campo es obligatorio',
                blur: true
            })
        }   else if(password.trim() === '' && input === 'password') {
                validarLogin({
                    ...login,
                    estatusPassword: true,
                    claseInputPs: 'no-valido',
                    claseLabelPs: 'valido',
                    mensaje: 'Este campo es obligatorio',
                    blur: true
                })
            } 
    }

    const onClick = (e) => {
        console.log('span Mostrar!');
        const clase = e.target.className;
        console.log(clase);
        if (clase === 'mostrar') {
            validarLogin({
                ...login,
                claseSpan: '',
                tipoPassword: 'password',
                text: 'Mostrar'
            })
        } else {
            validarLogin({
                ...login,
                claseSpan: 'mostrar',
                tipoPassword: 'text',
                text: 'Ocultar'
            })
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('Usuario: ', login.usuario);
        console.log('Contraseña: ', login.password);
    }

    return (

        <form
            onSubmit={onSubmit}
        >
            <legend>Inicia Sesión</legend>
            <div className="campo">
                <input 
                    type="text" 
                    id="usuario"
                    name="usuario"
                    value={usuario}
                    onChange={onChange}
                    onBlur={onBlur}
                    className={`${login.claseInputUs}`}
                />
                <label className={`${login.claseLabelUs}`} htmlFor="">Email o Número de Teléfono</label>
            </div>
            { login.estatusUsuario ? (<div className="alerta">{login.mensaje}</div>) : null }
            <div className="campo">
                <input 
                    type={login.tipoPassword} 
                    id="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    onBlur={onBlur}
                    className={`${login.claseInputPs}`}
                />
                <label className={`${login.claseLabelPs}`} htmlFor="">Contraseña</label>
                <span
                    className={login.claseSpan}
                    onClick={onClick}
                >
                    {login.text}
                </span>
            </div>
            { login.estatusPassword ? (<div className="alerta">{login.mensaje}</div>) : null }
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