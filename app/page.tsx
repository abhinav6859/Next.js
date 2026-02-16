"use client";
import Image from "next/image";
import React from 'react'

export default function Home() {
  function add(a: number, b: number): number {
  return a - b;
}
function greet(name: string): string {
  return "Hello " + name;
}



// add(5, "10"); ❌ Error before running

  return (
   <>
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Welcome to Next.js with TypeScript!</h1>
      <p className="text-lg">This is the home page of your Next.js application.</p>
      <p className="mt-4">2 + 3 = {add(2, 3)}  {greet("Abhinav")}</p>
    </div>
   </>
  );
}

