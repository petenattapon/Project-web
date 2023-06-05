import React, {useEffect} from 'react'
import Header from '../Header'
import Navbar from '../Navbar'
import Banner from '../Banner'
import Paragraph from '../Paragraph'
import ContentTap from '../ContentTap'
import ContentArt from '../ContentArt'
import Footer from '../Footer'

function Home({setLogin}) {

  useEffect(() => {
    document.title = 'TageTap | Home';
  })

  return (
    <header>
        <Header setLogin={setLogin} />
        <Navbar   />
        <Banner />
        <Paragraph />
        <ContentTap />
        <ContentArt />
        <Footer />
    </header>
  )
}

export default Home