import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Paragraph from './components/Paragraph'
import ContentTap from './components/ContentTap'
import ContentArt from './components/ContentArt'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Paragraph />
      <ContentTap />
      <ContentArt />
    </>
  )
}

export default App
