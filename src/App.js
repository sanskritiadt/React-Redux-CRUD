import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import AddUser from './Pages/AddUser';
import EditUser from './Pages/Edituser';
const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/addUser' element={<AddUser />} />
        <Route exact path='/editUser/:id' element={<EditUser />} />
      </Routes>
    </div>
  )
}

export default App