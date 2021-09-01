import React from 'react'
import '../scss/FirstItem.scss'

const DashboardFirstItem = () => (
        <article className="total">
            <div className="total__title">
                <h3>Total ventas de hoy</h3>
            </div>
            <div className="total__price">
                <p>$1’560.00</p>
            </div>
            <div className="total__info">
                <small> Septiembre 21</small>
            </div>
        </article>
)

export default DashboardFirstItem