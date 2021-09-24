import React from 'react'
import './TimeSales.scss'



const TimeSales = ({time, setTime}) => {

    return (
    <nav className="time">
        <ul className="time__list">
            <li
                className={time==="hoy" ? "time__li--active" : "time__li"}
                onClick={() => setTime("hoy")}
                >
                    hoy
            </li>
            <li
                className={time==="esta semana" ? "time__li--active" : "time__li"}
                onClick={() => setTime("esta semana")}
                >
                    esta semana
            </li>
            <li
                className={time==="septiembre" ? "time__li--active" : "time__li"}
                onClick={() => setTime("septiembre")}
                >
                    septiembre
            </li>

        </ul>
    </nav>
)

}

export default TimeSales