import React from 'react'

export const TableStudent = ({ estudiantes = [] }) => {
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

                </tbody>
            </table>
        </div>
    )
}
