import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import DashboardFirstItem from '../components/DashboardFirstItem'
import SecondItem from '../components/SecondItem'

import '../scss/App.scss'

const App = () => (
    <Layout>
        <Header />
        <DashboardFirstItem />
        <SecondItem />
    </Layout>
    )


export default App;