import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import ProfilePage from './ProfilePages/ProfilePage'
import Repogistries from './ProfilePages/Repogistries'
import Projects from './ProfilePages/Projects'
import Packages from './ProfilePages/Pakages'
import EditProfile from './ProfilePages/EditProfile'
const Allroutes = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
      <Route path='/repositories' element={<Repogistries/>}/>
      <Route path = '/projects' element={<Projects/>}/>
      <Route path='/pakages' element={<Packages/>}/>
      <Route path='/editprofile' element={<EditProfile/>}/>
      </Routes>
    </div>
  )
}

export default Allroutes
