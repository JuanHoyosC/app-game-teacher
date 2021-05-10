import React from 'react'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../../services/deleteTask';
import { Link } from 'react-router-dom';
moment.locale('es');

export const Filas = ({ titulo, fecha_fin, id }) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        deleteTask(id, dispatch);
    }

    return (
        <tr>
            <td className="text-center">{titulo}</td>
            <td className="text-center">{moment(fecha_fin).format('MMMM Do YYYY')}</td>
            <td className="d-flex justify-content-between acciones">
                <Link exact to={`/mision/${id}`} className="btn"><i className="fas fa-eye"></i></Link>
                <button className="btn"><i class="fas fa-edit"></i></button>
                <button className="btn" onClick={handleDelete}><i className="fas fa-trash"></i></button>
            </td>
        </tr>
    )
}
