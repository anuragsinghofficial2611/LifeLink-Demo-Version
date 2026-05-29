import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home.jsx'
import DonateBlood from './pages/donateblood.jsx'
import RequestBlood from './pages/requestblood.jsx'
import Login from './pages/login.jsx'
import Signup from './pages/signup.jsx'
import Dashboard from './pages/dashboard.jsx'
import Emergency from './pages/emergency.jsx'
import { motion } from 'framer-motion'
import { HashLink } from 'react-router-hash-link'

import Background3d from './pages/components/Background3d.jsx'

const App = () => {
  return (
    <div className="bg-gray-0 ">
      <Background3d />
      <BrowserRouter>

        <nav className="flex justify-between">
          <motion.div className='w-50' 
          initial={{ opacity: 0, y: 20 }}
          whileInView = {{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
            <h2 className='text-2xl font-bold my-3 mx-5'>Life<span className='text-blue-700'>Link</span></h2>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView = {{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>

            <div className="flex gap-4 p-3">
              <Link className="hover:bg-gray-200 transition-all duration-200 p-2 rounded-xl" to="/">Home</Link>
              <Link className="hover:bg-gray-200 transition-all duration-200 p-2 rounded-xl" to="/donorblood">Donate Blood</Link>
              <Link className="hover:bg-gray-200 transition-all duration-200 p-2 rounded-xl" to="/requestblood">Request Blood</Link>

              {/* <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link> */}
              <Link className="hover:bg-gray-200 transition-all duration-200 p-2 rounded-xl" to="/dashboard">Dashboard</Link>
              <Link className="hover:bg-gray-200 transition-all duration-200 p-2 rounded-xl" to="/emergency">Emergency</Link>
            </div>
          </motion.div>
          
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
      <section>
        <div>
          <DonateBlood />
          <RequestBlood />
          <Emergency />
          <Dashboard />
        </div>
      </section>
    </div>
  )
}

export default App