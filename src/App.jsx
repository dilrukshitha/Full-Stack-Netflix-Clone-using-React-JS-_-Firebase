import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Player from './pages/Player'
import { Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <div className='font-poppins bg-[#121212]'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </div>
  )
}
