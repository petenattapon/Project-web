import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'
import Navbar from '../Navbar'
import Banner from '../Banner'
import Paragraph from '../Paragraph'
import Search from '../Search'
import AllGallery from '../AllGallery'
import Footer from '../Footer'



function Gallery() {

  useEffect(() => {
    document.title = 'TageTap | Gallery';
  }, [])

  return (
    <header>
      <Header />
      <Navbar />
      <Banner />
      <Search />
      <AllGallery />
      <Footer />
    </header>

  )
}

export default Gallery