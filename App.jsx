import React from 'react'
import Login from './Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import Employee from './Employee'
import Home from './HomePage'
import AddEmployee from './AddEmployee'
import UpdateDetails from './UpdateDetails'
import Start from './Start'
import EmployeeDetail from './EmployeeDetails'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard />}>
        <Route path='' element={<Home />}></Route>
        <Route path='/employee' element={<Employee />}></Route>
        <Route path='/create' element={<AddEmployee />}></Route>
        <Route path='/employeeEdit/:id' element={<EditEmployee />}></Route>
      </Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/start' element={<Start />}></Route>
      <Route path='/employeedetail/:id' element={<EmployeeDetail />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App