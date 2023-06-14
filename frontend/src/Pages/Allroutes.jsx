import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import Admin from './Admin'
const Allroutes = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </div>
  )
}

export default Allroutes
