import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home';
import Navbar from './component/Navbar';
import Direction from './component/Direction';


function App() {
  return (
    <>

      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/Navbar' element={<Navbar />}></Route>
        <Route path='/Direction' element={<Direction />}></Route>

        </Routes>




</>

);
}

export default App