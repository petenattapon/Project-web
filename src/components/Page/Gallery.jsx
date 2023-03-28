import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'
import Navbar from '../Navbar'
import Banner from '../Banner'
import Paragraph from '../Paragraph'
import Search from '../Search'
import ContentTap from '../ContentTap'


function Gallery() {
  return (

    <header>
      <Header />
      <Navbar />
      <Banner />
      <Search />
      <ContentTap />
    </header>
      
  )
}

export default Gallery