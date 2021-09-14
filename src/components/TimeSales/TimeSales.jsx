import React from 'react'
import './TimeSales.scss'

const dates = ["Hoy", "Esta Semana", "Mes"]

const TimeSales = () => {

    return (
    <nav className="time">
        <ul className="time__list">
            {   dates.map( date =>(
                <li>{date}</li>
            ))

            }

        </ul>
    </nav>
)

}

export default TimeSales