import { useState } from 'react'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Page/Home'
import Gallery from './components/Page/Gallery'
import Event from './components/Page/Event'
import About from './components/Page/About'
import Contact from './components/Page/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/event' element={<Event />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
