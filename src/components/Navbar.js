import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <div className='search'>
                    <input placeholder='Escribe aquí'></input>
                </div>

                <div className="navbar_cont">
                    <div className='title'>
                        <h1>Capita Rico</h1>
                    </div>
                    <div className='option'>
                        <ul>
                            <a href="/">
                                <li>Categorias</li>

                            </a>

                            <a href="/">
                                <li>Información</li>
                            </a>

                            <a href="/">
                                <li>Servicios</li>
                            </a>

                            <a href="/">
                                <li>Contactanos</li>
                            </a>
                        </ul>
                    </div>
                    <div className='register'>
                        <button>Registrarse</button>
                        <button>Iniciar Sesión</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
