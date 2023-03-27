import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'
import Navbar from '../Navbar'
import Banner from '../Banner'
import Paragraph from '../Paragraph'
import ContentTap from '../ContentTap'
import ContentArt from '../ContentArt'

function Gallery() {
  return (

    <header>
      <Header />
      <Navbar />
      <Banner />
      <Paragraph />
      <ContentTap />
    </header>
      
  )
}

export default Gallery