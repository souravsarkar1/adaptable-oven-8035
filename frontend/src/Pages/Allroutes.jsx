import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from './Home';

import { Box } from '@chakra-ui/react';
import Login from '../Components/Login';
import NewRepository from '../Components/NewRepository';
import Signin from '../Components/Signin';

const AllRoutes = () => {
    return (
        <Box>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/register' element={<Login/>}></Route>
                <Route path='/signin' element={<Signin/>}></Route>
                <Route path='/new_repo' element={<NewRepository/>}></Route>
            </Routes>
        </Box>
    )
}

export default AllRoutes