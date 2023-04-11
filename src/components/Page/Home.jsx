import React, {useEffect} from 'react'
import Header from '../Header'
import Navbar from '../Navbar'
import Banner from '../Banner'
import Paragraph from '../Paragraph'
import ContentTap from '../ContentTap'
import ContentArt from '../ContentArt'
import Footer from '../Footer'

function Home() {

  useEffect(() => {
    document.title = 'TageTap | Home';
  })

  return (
    <header>
        <Header />
        <Navbar />
        <Banner />
        <Paragraph />
        <ContentTap />
        <ContentArt />
        <Footer />
    </header>
  )
}

export default Home