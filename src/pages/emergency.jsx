import React from 'react'
import { motion } from 'framer-motion'
const Emergency = () => {
  return (
    <>
      <motion.div className = "h-screen"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>

        <div className="text-3xl mx-20 my-5 font-semibold">
          Emergency Section
        </div>

        <div className="flex justify-center items-center h-100">
          <form className="flex flex-col gap-4">



            <div className="flex gap-4">
              <input type="text" placeholder="Enter Hospital Name" className="bg-amber-50 text-center w-100 py-2 px-5" />
              <input type="text" placeholder="Enter your Blood Group" className="bg-amber-50 text-center w-100 py-2 px-5" />
            </div>

            <div className="flex gap-4">
              <input type="text" placeholder="Enter your Contact Number" className="bg-amber-50 text-center w-100 py-2 px-5" />
              <input type="text" placeholder="Enter your Address" className="bg-amber-50 text-center w-100 py-2 px-5" />
            </div>

            <div className="flex gap-4 justify-center ">
              <button className="w-40 bg-blue-200 rounded-xl py-2 px-5 hover:bg-amber-100"  >Submit</button>
            </div>


          </form>
        </div>
      </motion.div>
    </>
  )
}

export default Emergency