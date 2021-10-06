
import React from 'react'
import DeductionBold from '../DeductionBold/DeductionBold'
import './YourSales.scss'

const YourSales = ({time, payment}) => {


    const payCheck = pay =>  pay ? "Cobro exitoso" : 'Cobro no realizado'

    const payCheckAmount = pay => pay ?  <DeductionBold /> : ""


    return (
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
                        <tr key={item.id}>
                            <td>{payCheck(item.successful_payment)}</td>
                            <td>{item.date}</td>
                            <td>{item.pay}</td>
                            <td>{item.id_transaction_bold}</td>
                            <td>${item.amount} {payCheckAmount(item.successful_payment)}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </section>

)
}

export default YourSales