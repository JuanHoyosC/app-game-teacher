import React from 'react'
import { Filas } from './Filas';

export const Table = ({ tareas }) => {
    return (
        <div>
            <table className="table clasificatoria">
                <thead>
                    <tr>
                        <th scope="col" className="text-center">Titulo</th>
                        <th scope="col" className="text-center">fecha limite</th>
                        <th scope="col" className="text-center acciones">Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {tareas.map(({ titulo, comentario, fecha_fin, _id, path }) => <Filas titulo={titulo} comentario={comentario} fecha_fin={fecha_fin}
                        id={_id} path={path} key={_id} />)}
                </tbody>
            </table>
        </div>
    )
}
