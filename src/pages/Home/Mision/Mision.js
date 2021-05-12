import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { useParams } from 'react-router-dom'
import { getTask } from '../../../services/getTask';
import { TableStudent } from './TableStudent';

export const Mision = () => {

    const [tarea, setTarea] = useState({});
    const { id } = useParams();
    
    console.log(tarea)

    useEffect(() => {
        getTask( id ).then( tarea => setTarea( tarea ));
    }, [id])

    return (
        <div>
            <h5 className="d-flex justify-content-between mb-5"><span>{ tarea.titulo }</span> <span>{ moment(tarea.fecha_fin).format('MMMM Do YYYY') }</span></h5>
            <p className="mb-5">{ tarea.comentario }</p>
            <h5 className="mb-5">Estudiantes: { tarea?.estudiantes?.length } </h5>
            {
                tarea.estudiantes?.length === 0 ? 
                <div className="mt-5">
                <img src="https://i.ibb.co/mDZ2347/student.png" alt="no student" className="img-tarea mb-3" />
                <h3 className="text-center">Ningun estudiante ha tomado está misión</h3>
            </div>
                :
                <TableStudent estudiantes={ tarea.estudiantes } />
            }
        </div>
    )
}
