import { useState } from "react";
import { actualizarCurso, login } from "../actions/auth";
import { alertas } from "../services/alertas";
import { URL_BACKEND } from "../URL_BACKEND";

export const useCurso = ( form, id, dispatch ) => {
    
    const [loading, setLoading] = useState(false);

    const handleSubmit = async ( e ) => {
        e.preventDefault();
        setLoading( true );

        const token = localStorage.getItem('appToken-profesor');

        //Crea el curso en la base de datos y retorna el id_curso
        const res = await fetch(`${ URL_BACKEND }/addclass`, { method: 'POST', headers: { 'access-token': token, 'content-type': 'application/json' }, body: JSON.stringify({ ...form, id }) })
        const data = await res.json();
        if(!data.continuar) { alertas( data.mensaje ); return ; };

        //Actualiza al profesor con el id del curso creado
        const res1 = await fetch(`${ URL_BACKEND }/update-teacher-class`, { method: 'POST', headers: { 'access-token': token, 'content-type': 'application/json' }, body: JSON.stringify({ ...data.curso}) })
        const data1 = await res1.json();

        if(!data1.continuar) { alertas(data1.mensaje); setLoading(false); return ; }
        //Actualiza los datos de la vista
        dispatch(login( data1.profesor ));
        setLoading(false);
    }


    const handleUpdateName = async ( e ) => {
        e.preventDefault();
        setLoading( true );

        const token = localStorage.getItem('appToken-profesor');
        const res = await fetch(`${ URL_BACKEND }/update-name-class`, { method: 'POST', headers: { 'access-token': token, 'content-type': 'application/json' }, body: JSON.stringify({ ...form, _id: id }) })
        const data = await res.json();
        
        if(!data.continuar) { alertas( data.mensaje ); return ; };
        dispatch(actualizarCurso( form.curso ));
    }


    return { handleSubmit, handleUpdateName, loading }

}
