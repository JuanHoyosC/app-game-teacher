import React from 'react'
import { AgregarCurso } from '../../../components/AgregarCurso/AgregarCurso'
import { VerTareas } from '../VerTareas/VerTareas'

export const Dashboard = () => {
    return (
        <div>
            <AgregarCurso />
            <VerTareas />
        </div>
    )
}
