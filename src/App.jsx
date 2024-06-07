import './App.css'
import { useEffect, useState } from "react"
import {Routes, Route } from 'react-router-dom'
import Dashboard from "./views/dashboard/Dashboard";
import Register from "./views/register/Register";
import Users from './views/users/Users';

function App() {
  const [users, setUsers] = useState([]);
  
  const fetchUsers = async() => {
    const response = await fetch('http://localhost:3000/users');
    const data = await response.json();
    setUsers(data);
  }
  useEffect(() => {
    fetchUsers();
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/register' element={<Register />} />
        <Route path='/users/:id' element={ <Users /> } />
      </Routes>
    </>
  )
}

export default App
