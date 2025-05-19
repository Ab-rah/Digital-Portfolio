'use client'; // Needed to use hooks in Next.js App Router

import { ChangeEvent, useEffect, useState } from 'react';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import Home from '.';


function Homepage() {

  const [username, setUsername] = useState<string>('');

  const handlechange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }
  return (
    <div>
      <input type="text" name="username" placeholder='Enter....' value={username} onChange={handlechange}></input>
      <p>You Typed;{username}</p>
      <Home />
    </div>
  )
}

export default Homepage