import { Routes,Route } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar';

import { Box } from '@chakra-ui/react';
import AllRoutes from './Pages/Allroutes';

function App() {
  return (
    <Box className="App">
     <Navbar/>
    <AllRoutes/>
    </Box>
  );
}

export default App;
