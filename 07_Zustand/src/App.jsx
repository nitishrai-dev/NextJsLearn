import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './Components/Counter'
import Post from './Components/Post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Zustand Counter</h1>
      <Counter />
      <Post />
    </>
  )
}

export default App
