import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../../../services/getTasks';
import { Table } from './Table';
import './verTareas.css';

export const VerTareas = () => {
    const dispatch = useDispatch()
    const { curso_id } = useSelector(state => state.auth);
    const tareas = useSelector(state => state.tareas);

    useEffect(() => {
        getTasks(curso_id, dispatch)
    }, [curso_id, dispatch])

    return (
        <div className="mt-5">
            { tareas.length === 0 ?
                <div className="mt-5">
                    <img src="https://i.ibb.co/D7THG2c/schedule.png" alt="not task" className="img-tarea mb-3" />
                    <h3 className="text-center">No hay tareas creadas hasta el momento</h3>
                </div>
                :
                <>
                    <h3 className="text-center mb-3">Tareas asignadas hasta la fecha</h3>
                    <Table tareas={tareas} />
                </>
            }

        </div>
    )
}
