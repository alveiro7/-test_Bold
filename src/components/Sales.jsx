
import React from 'react'
import '../scss/Sales.scss'

const Sales = () => (
    <section>
        <div>
            <h2>Tus ventas de septiembre</h2>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Transacción</th>
                    <th>Fecha y hora</th>
                    <th>Metodo de pago</th>
                    <th>ID TRansaccion Bold</th>
                    <th>Monto</th>
                </tr>
            </thead>
                <tbody>
                    <tr>
                        <td>payCheck(payData.exitoso)</td>
                        <td>payData.date</td>
                        <td>payData.creditcard</td>
                        <td>payData.idpayment</td>
                        <td>payData.amount</td>
                    </tr>
                </tbody>
            </table>
        </section>
)

export default Sales