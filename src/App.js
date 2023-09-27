import React from "react";
import { Route,Routes } from "react-router-dom";
import './App.css';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import User from "./Pages/user/User";
import Adduser from "./Pages/user/Adduser";
import Edit from "./Pages/user/Edit";

function App() {
  return (
    <div className='app'>
      <Navbar />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users/:id' element={<User />} />
        <Route path='/add-user' element={<Adduser />} />
        <Route path='/edit-user/:id' element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
