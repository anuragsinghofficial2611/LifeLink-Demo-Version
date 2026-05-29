import React from 'react'
import { motion } from 'framer-motion'
const Login = () => {
  return (
    <div id = "login" className = "h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 1 }}>
        <form>
          login credential
        </form>
      </motion.div>
    </div>
  )
}

export default Login