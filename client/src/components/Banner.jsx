import React from 'react'
import '../sass/Page1/Banner.scss'

let bannerData ={
    title:'Welcome to website Tage Tape.',
    subtitle :'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
}

function Banner() {
  return (
    <nav id='nav-bg'>
        <section className="container">
            <div className="banner-container">
                <div className="banner-text">
                    {/* <h1>{bannerData.title}</h1>
                    <p>{bannerData.subtitle}</p> */}
                </div>
            </div>
        </section>
    </nav>
  )
}

export default Banner