import React, { Fragment, useState, useEffect } from 'react'
import Header from '../components/Header/Header'
import TotalSales from '../components/TotalSales/TotalSales'
import TimeSales from '../components/TimeSales/TimeSales'
import FilterSalesModal from '../components/FilterSalesModal/FilterSalesModal'
import YourSales from '../components/YourSales/YourSales'
import getData from '../utils/getData'

import './App.scss'


const App = () => {

    const [time, setTime] = useState(option)
    const option = [{id: 1, name:"hoy"}, {id:2, name:"esta semana"}, {id:3, name: "septiembre"}]

    const [payment, setPayment]=useState([]);

    useEffect(() => {
        getData()
    }, [])

    return (
        <Fragment>
            <Header />
            <TotalSales time={time} />
            <TimeSales time={time} setTime={setTime}  />
            <FilterSalesModal />
            <YourSales time={time} payment={payment} setPayment={setPayment} />
        </Fragment>
    )
}


export default App;