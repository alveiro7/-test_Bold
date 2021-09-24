import React, { Fragment, useState } from 'react'
import Header from '../components/Header/Header'
import TotalSales from '../components/TotalSales/TotalSales'
import TimeSales from '../components/TimeSales/TimeSales'
import FilterSalesModal from '../components/FilterSalesModal/FilterSalesModal'
import YourSales from '../components/YourSales/YourSales'

import './App.scss'


const App = () => {

    const [time, setTime] = useState(option)
    
    const option = [{id: 1, name:"hoy"}, {id:2, name:"esta semana"}, {id:3, name: "septiembre"}]

    return (
        <Fragment>
            <Header />
            <TotalSales time={time} />
            <TimeSales time={time} setTime={setTime}  />
            <FilterSalesModal />
            <YourSales time={time}/>
        </Fragment>
    )
}


export default App;