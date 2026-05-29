import React from 'react'
import Box from './components/box'
import { motion } from 'framer-motion'
const Dashboard = () => {
  return (
    <>
    <motion.div className = "flex flex-wrap justify-center my-20" id = "dashboard"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}>
      <Box title = "Times Donated" count = "2"/>
      <Box title = "Gender" count = "Male"/>
      <Box title = "Blood Group" count = "A+"/>
      <Box title = "Phone no." count = "2"/>
      <Box title = "Weight" count = "2"/>
      <Box title = "City" count = "2"/>
      <Box title = "Medical Condition" count = "2"/>
      <Box title = "Availability Status" count = "2"/>
      <Box title = "Emergency Contact" count = "2"/>
      <Box title = "Adhar No." count = "2"/>
      <Box title = "Occupation" count = "2"/>
      <Box title = "Age" count = "2"/>
    </motion.div>
    </>
  )
}

export default Dashboard