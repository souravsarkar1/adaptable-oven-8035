import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Home'

import ProfilePage from './ProfilePages/ProfilePage'
import Repogistries from './ProfilePages/Repogistries'
import Projects from './ProfilePages/Projects'
import Packages from './ProfilePages/Pakages'
import EditProfile from './ProfilePages/EditProfile'
import Codeupload from './Codeupload'
import SingleCode from './SingleCode'
import Admin from './Admin'
import EditAdminUser from './EditAdminUser'
import Admingetuser from './Admingetuser'

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
      <Route path='/code' element={<Codeupload/>}/>
      <Route path='/singlecode/:id' element={<SingleCode/>}/>


      <Route path='/admin' element={<Admingetuser/>}/>


      <Route path='/edit/:id' element={<EditAdminUser/>}/>


      <Route path='/postuser' element={<Admin/>}/>
      </Routes>
    </div>
  )
}

export default Allroutes
