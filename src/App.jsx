import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import CoinPage from './pages/CoinPage'
import ComparePage from './pages/ComparePage'


const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/dashboard' element={<DashboardPage/>}/>
        <Route path='/coin/:id' element={<CoinPage/>}/>
        <Route path='/compare' element={<ComparePage/>}/>
      </Routes>
      </BrowserRouter>
    
    
    </div>
  )
}

export default App
