import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home.jsx'
import DonateBlood from './pages/donateblood.jsx'
import RequestBlood from './pages/requestblood.jsx'
import Login from './pages/login.jsx'
import Signup from './pages/signup.jsx'
import Dashboard from './pages/dashboard.jsx'
import Emergency from './pages/emergency.jsx'

const App = () => {
  return (
    <div className = "bg-gray-0 ">
    <BrowserRouter>

        <nav className="">
          <div className = "flex gap-4 p-3">
            <Link className = "hover:bg-gray-200 transition-all duration-200 p-2 rounded-xl" to="/">Home</Link>
            <Link className = "hover:bg-gray-200 transition-all duration-200 p-2 rounded-xl" to="/donorblood">Donate Blood</Link>
            <Link className = "hover:bg-gray-200 transition-all duration-200 p-2 rounded-xl" to="/requestblood">Request Blood</Link>
            
            {/* <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link> */}
            <Link className = "hover:bg-gray-200 transition-all duration-200 p-2 rounded-xl" to="/dashboard">Dashboard</Link>
            <Link className = "hover:bg-gray-200 transition-all duration-200 p-2 rounded-xl" to="/emergency">Emergency</Link>
          </div>
        </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donorblood" element={<DonateBlood />} />
        <Route path="/requestblood" element={<RequestBlood />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/emergency" element={<Emergency />} />
      </Routes>

    </BrowserRouter>
    </div>
  )
}

export default App