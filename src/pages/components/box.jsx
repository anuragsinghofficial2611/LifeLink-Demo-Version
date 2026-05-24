import React from 'react'

const Box = (params) => {
  return (
    <div className = "bg-amber-50 px-2 mx-5 my-3 py-2 w-70 h-30 rounded-xl">
        <div className = "">{params.title}</div>
        <div className = "font-bold text-4xl flex justify-center mt-3">{params.count}</div>
    </div>

  )
}

export default Box