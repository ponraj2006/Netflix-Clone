import React from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import { Routes,Route } from 'react-router-dom'
import Player from './pages/Player/Player'
import Error from './pages/4O4/Error'
const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/login' element={ <Login/>}/>
      <Route path='/player/:id' element={<Player/>}/>
      <Route path='*' element={<Error/>}/>
      </Routes>
       
    </div>
  )
}

export default App