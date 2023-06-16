import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import Admin from './Admin'
import EditAdminUser from './EditAdminUser'
// import AdminUserCard from './AdminUserCard'
import Admingetuser from './Admingetuser'
// import Users from '../User/Users'
const Allroutes = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/edit/:id' element={<EditAdminUser/>}/>
      <Route path='/getuser' element={<Admingetuser/>}/>
      </Routes>
    </div>
  )
}

export default Allroutes
