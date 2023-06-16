import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import Admin from './Admin'
import Admingetuser from './Admingetuser'
import EditAdminUser from './EditAdminUser'
const Allroutes = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/getuser' element={<Admingetuser/>}/>
      <Route path='/edit/:id' element={<EditAdminUser/>}/>

      </Routes>
    </div>
  )
}

export default Allroutes
