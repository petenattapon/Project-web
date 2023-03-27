import React from 'react'
import Header from '../Header'
import Navbar from '../Navbar'
import Banner from '../Banner'
import Paragraph from '../Paragraph'
import ContentTap from '../ContentTap'
import ContentArt from '../ContentArt'

function Home() {
  return (
    <header>
        <Header />
        <Navbar />
        <Banner />
        <Paragraph />
        <ContentTap />
        <ContentArt />
    </header>
  )
}

export default Home