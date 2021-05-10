import React from 'react'
import { Pie } from 'react-chartjs-2';


export const DonaChart = ({ titulo }) => {

    const state = {
        labels: ['Tareas en proceso', 'Tareas terminadas'],
        datasets: [
            {
                data: [1, 2],
                fill: true,
                backgroundColor: ['red', 'green']
            }
        ],
    }

    return (
        <div>
            <Pie data={state}
                width={100}
                height={300}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    title: {
                        display: true,
                        text: titulo,
                        fontSize: 20
                    }
                }} />
        </div>
    )
}
