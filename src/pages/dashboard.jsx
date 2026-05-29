import React from 'react'
import Box from './components/box'
import { motion } from 'framer-motion'
const Dashboard = () => {
  return (
    <>
      <div id="dashboard">
        <motion.div
          initial={{ opacity: 0, y: 20}}
          whileInView={{ opacity: 1, y: 0}}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 1 }}>
          <div className = "text-3xl font-semibold mx-20">DashBoard</div>
          <div className="flex flex-wrap justify-center my-20">

            <Box title="Times Donated" count="2" />
            <Box title="Gender" count="Male" />
            <Box title="Blood Group" count="A+" />
            <Box title="Phone no." count="NA" />
            <Box title="Weight" count="NA" />
            <Box title="City" count="NA" />
            <Box title="Medical Condition" count="NA" />
            <Box title="Availability Status" count="NA" />
            <Box title="Emergency Contact" count="NA" />
            <Box title="Adhar No." count="NA" />
            <Box title="Occupation" count="NA" />
            <Box title="Age" count="NA" />
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Dashboard