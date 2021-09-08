import React, { Fragment } from 'react'
import Header from '../components/Header/Header'
import TotalSales from '../components/TotalSales/TotalSales'
import TimeSales from '../components/TimeSales/TimeSales'
import FilterSalesModal from '../components/FilterSalesModal/FilterSalesModal'
import YourSales from '../components/YourSales/YourSales'

import './App.scss'


const App = () => (
    <Fragment>
        <Header />
        <TotalSales />
        <TimeSales />
        <FilterSalesModal />
        <YourSales />
    </Fragment>
    )


export default App;