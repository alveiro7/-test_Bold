import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import DashboardFirstItem from '../components/DashboardFirstItem'
import SecondItem from '../components/SecondItem'
import Filter from '../components/Filter'
import Sales from '../components/Sales'

import '../scss/App.scss'


const App = () => (
    <Layout>
        <Header />
        <DashboardFirstItem />
        <SecondItem />
        <Filter />
        <Sales />
    </Layout>
    )


export default App;