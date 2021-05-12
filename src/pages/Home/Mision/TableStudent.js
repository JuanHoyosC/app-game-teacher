import React from 'react'
import { saveAs } from 'file-saver';
import { alertaError } from '../../../services/alertas';
import { URL_BACKEND } from '../../../URL_BACKEND';

export const TableStudent = ({ estudiantes = [] }) => {



    const descargarArchivo= async (ruta, nombre_archivo) => {
        const token = localStorage.getItem('appToken-profesor');
        await fetch(`${URL_BACKEND}/task-download-2`, {method: 'POST', headers: {'content-type': 'application/json', 'access-token': token }, body: JSON.stringify({path: ruta}) })
            .then( res => res.blob())
            .then(data => saveAs(data, nombre_archivo ))
            .catch(error => alertaError('Hubo un error'));
    }


    return (
        <div>
            <table className="table clasificatoria">
                <thead>
                    <tr>
                        <th scope="col" className="text-center">Nombre</th>
                        <th scope="col" className="text-center">Estado</th>
                        <th scope="col" className="text-center acciones">Archivo</th>
                    </tr>
                </thead>
                <tbody>
                    {estudiantes.map(estudiante => <tr>
                        <td className="text-center">{estudiante.nombre + ' ' + estudiante.apellidos}</td>
                        <td className="text-center">{estudiante.progreso}</td>
                        <td className="d-flex justify-content-between w-100">

                            {estudiante.path_tarea ?
                                 <button className="btn btn-descarga me-3 d-flex align-items-center text-white" onClick={ () => descargarArchivo(estudiante.path_tarea, estudiante.nombre_archivo) }>
                                     <i className="fas fa-download me-2"></i>
                                     Descargar
                                 </button>
                                :
                                <p className="mb-0">No hay archivo</p>}
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}
