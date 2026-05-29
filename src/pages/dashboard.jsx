import React from 'react'
import Box from './components/box'
const Dashboard = () => {
  return (
    <>
    <div className = "flex flex-wrap justify-center my-20">
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
    </div>
    </>
  )
}

export default Dashboard