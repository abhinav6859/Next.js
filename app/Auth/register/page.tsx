// app/register/page.tsx
"use client";

import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/auth/register", {
      method: "POST",
        headers: {
    "Content-Type": "application/json",
  },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    alert(data.message);
  }

  return (

    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
 
      <button type="submit">Register</button>
        
    </form>
  
  );
}
