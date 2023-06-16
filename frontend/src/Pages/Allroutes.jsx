import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import ProfilePage from './ProfilePages/ProfilePage'
const Allroutes = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
      </Routes>
    </div>
  )
}

export default Allroutes
