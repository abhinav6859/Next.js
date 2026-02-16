"use client";

import { useState } from 'react';
import Button from './Button';


const Navbar = () => {
  const [count , setcount] = useState(0);
  return (
    <div className="flex py-3 flex-wrap justify-around bg-white shadow-md dark:bg-gray-800">
      <h1 className="text-xl font-semibold">Keeper</h1>
      <ul className="flex gap-4">
        <li className="hover:text-blue-500 cursor-pointer">Home</li>
        <li className="hover:text-blue-500 cursor-pointer">product</li>
        <li className="hover:text-blue-500 cursor-pointer">About</li>
        <li className="hover:text-blue-500 cursor-pointer">Contact</li>
      </ul>
      <Button text={`increase ${count}`} onClick={() => setcount(count + 1)} />
      <p className="text-lg font-medium">Count: {count}</p>
      <Button text={`decrease ${count}`} onClick={() => setcount(count - 1)} />
<Button text={`reset 0`} onClick={() => setcount(0)} />
    </div>
  )
}

export default Navbar
