import React from 'react'
import { motion } from 'framer-motion'

const Donateblood = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <div className="mx-20 my-10">

          <div className="text-3xl mx-20 my-5 font-semibold">
            Donate blood
          </div>

          <div className="flex justify-center items-center h-screen">
            <form className="flex flex-col gap-4">

              <div className="flex gap-4">
                <input type="text" placeholder="Enter your FirstName" className="bg-amber-50 text-center w-100 py-2 px-5" />
                <input type="text" placeholder="Enter your LastName" className="bg-amber-50 text-center w-100 py-2 px-5" />
              </div>

              <div className="flex gap-4">
                <input type="text" placeholder="Enter your Age" className="bg-amber-50 text-center w-100 py-2 px-5" />
                <input type="text" placeholder="Enter your Blood Group" className="bg-amber-50 text-center w-100 py-2 px-5" />
              </div>

              <div className="flex gap-4">
                <input type="text" placeholder="Enter your Contact Number" className="bg-amber-50 text-center w-100 py-2 px-5" />
                <input type="text" placeholder="Enter your Email" className="bg-amber-50 text-center w-100 py-2 px-5" />
              </div>

              <div className="flex gap-4">
                <input type="text" placeholder="Enter your City" className="bg-amber-50 text-center w-100 py-2 px-5" />
                <input type="text" placeholder="Enter your Address" className="bg-amber-50 text-center w-100 py-2 px-5" />
              </div>
              <div className="flex gap-4 justify-center ">
                <button className="w-40 bg-blue-200 rounded-xl py-2 px-5 hover:bg-amber-100"  >Submit</button>
              </div>

            </form>
          </div>
          </div>
      </motion.div>
    </>
  )
}
export default Donateblood