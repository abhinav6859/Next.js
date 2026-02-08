import React from 'react'

const Navbar = () => {
  return (
    <div className="flex py-3 flex-wrap justify-around bg-white shadow-md dark:bg-gray-800">
      <h1 className="text-xl font-semibold">Keeper</h1>
      <ul className="flex gap-4">
        <li className="hover:text-blue-500 cursor-pointer">Home</li>
        <li className="hover:text-blue-500 cursor-pointer">product</li>
        <li className="hover:text-blue-500 cursor-pointer">About</li>
        <li className="hover:text-blue-500 cursor-pointer">Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
