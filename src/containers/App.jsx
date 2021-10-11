import React, { Fragment, useState, useEffect } from 'react'

import Header from '../components/Header/Header'
import TotalSales from '../components/TotalSales/TotalSales'
import TimeSales from '../components/TimeSales/TimeSales'
import FilterSalesModal from '../components/FilterSalesModal/FilterSalesModal'
import YourSales from '../components/YourSales/YourSales'


import './App.scss'



const App = () => {

    const [time, setTime] = useState(option)
    const option = [{id: 1, name:"hoy"}, {id:2, name:"esta semana"}, {id:3, name: "septiembre"}]

    const [showFilter, setShowFilter] = useState(false)

    const [payment, setPayment]=useState([]);
    const [paymentsToShow, setPaymentstoShow] = useState([]);

    const API_URL = 'http://localhost:3004/payments';


    const getData = ()  => {
        fetch(API_URL,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                })
                .then(function(response){
                    console.log(response)
                    return response.json()
                })
                .then(function(myJson) {
                    console.log(myJson)
                    setPayment(myJson)

                })
        }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Fragment>
            <Header />
            <TotalSales time={time} />
            <TimeSales time={time} setTime={setTime}  />
            <FilterSalesModal showFilter={showFilter} setShowFilter={setShowFilter} />
            <YourSales time={time} payment={payment} />
        </Fragment>
    )
}


export default App;