import { useState } from 'react'
import { alertas, alertaWarning } from '../services/alertas';
import { URL_BACKEND } from '../URL_BACKEND';

export const useRegistro = ({ form }) => {

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const [status, mensaje] = verificar();
        if(!status){
            alertaWarning(mensaje);
            setLoading(false);
            return ;
        }

        const res = await subirFoto(form.foto);
        form.foto = res.path_foto

        fetch(`${ URL_BACKEND }/register-teacher`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(form) })
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                if(!data.continuar) alertas(data.mensaje);
            })
    }

    const subirFoto = async (file) => {
        let formData = new FormData();
        formData.append('file', file);
        const res = await fetch(`${URL_BACKEND}/upload-picture`, { method: 'POST', body: formData });
        const data = await res.json()
        return data;
    }

    const verificar = () => {
        const { correo, password, nombre, apellidos, foto } = form;
        if(correo.length < 5 ) return [false, 'El correo es invalido' ];
        if(password < 6 ) return [false, 'La contraseña es muy corta'];
        if(nombre.length < 2) return [false, 'El nombre es muy corto'];
        if(apellidos.length < 1) return [false, 'Apellidos son muy corto'];
        if(foto.length < 1) return [false, 'No has ingresado una foto'];
 
        return [true, 'Registro exitoso'];
     }


    return [handleSubmit, loading];

}
