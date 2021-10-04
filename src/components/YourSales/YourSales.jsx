
import React from 'react'
import './YourSales.scss'

const YourSales = ({time, payment, setPayment}) => (
    <section className="table__container">
        <div className="table__header">
            Tus ventas de {time}
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
                <tbody className="table__body">
                    { payment && payment.length>0 && payment.map((item) =>
                        <tr key={payment.id}>
                            <td>payCheck(payData.exitoso)</td>
                            <td>{payment.date}</td>
                            <td>payData.creditcard</td>
                            <td>payData.idpayment</td>
                            <td>payData.amount</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </section>
)

export default YourSales