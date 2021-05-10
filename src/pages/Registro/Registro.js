import React from 'react'

import './registro.css';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useRegistro } from '../../hooks/useRegistro';

export const Registro = () => {

    const { form, handleInputChange } = useForm({ correo: '', password: '', nombre: '', apellidos: '', foto: '' });
    const { correo, password, nombre, apellidos } = form;
    const [handleSubmit, loading] = useRegistro({ form });

    const handleUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        form.foto = e.target.files[0];
        document.querySelector('#img-perfil').src = URL.createObjectURL(file);
    }

    return (
        <div className="registro-body">
            <form className="form-registro p-5 px-3" autoComplete="off" onSubmit={handleSubmit}>
                <h5 className="text-ingresar mb-3 text-white text-center">Registrarse</h5>

                <label for="imagen-perfil" className="label-imagen mx-auto mb-3">
                    <input type="file" name="myImage" accept="image/x-png,image/gif,image/jpeg" onChange={handleUpload} id="imagen-perfil" />
                    <img src="https://i.ibb.co/BgmCw0c/teacher.png" alt="imagen_perfil" id="img-perfil" />
                </label>

                <div className="form-floating mb-3">
                    <input type="email" className="form-control" value={correo} name="correo"
                        id="correo" placeholder="name@example.com" onChange={handleInputChange} />
                    <label htmlFor="correo"><i className="fas fa-envelope me-2"></i> Correo electronico</label>
                </div>

                <div className="d-flex">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" value={nombre} name="nombre"
                            id="nombre" placeholder="name@example.com" onChange={handleInputChange} />
                        <label htmlFor="nombre"><i className="fas fa-signature me-2"></i>Nombre</label>
                    </div>
                    <div className="form-floating mb-3 ms-2">
                        <input type="text" className="form-control" value={apellidos} name="apellidos"
                            id="apellidos" placeholder="name@example.com" onChange={handleInputChange} />
                        <label htmlFor="apellidos"><i className="fas fa-signature me-2"></i>Apellidos</label>
                    </div>
                </div>

                <div className="form-floating mb-3">
                    <input type="password" className="form-control" value={password} name="password"
                        id="repetirPass" placeholder="Password" onChange={handleInputChange} />
                    <label htmlFor="repetirPass"> <i className="fas me-2 fa-lock"></i>Contraseña</label>
                </div>


                <button className="btn mb-5 w-100 btn-ingresar d-block mx-auto" type="submit" disabled={loading}>
                    {loading ?
                        <div className="spinner-border text-light" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        :
                        <span>Registrarse</span>
                    }
                </button>

                <p className="mb-0 nuevaCuenta">¿Tienes una cuenta? <Link className="registrate-aqui" to="/login">Ingresa aqui</Link></p>
            </form>
        </div>
    )
}
