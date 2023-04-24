import React from 'react'
import '../sass/Page1/ContentArt.scss'

const t074 = {
  title: 'T_047',
  detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolore doloribus laborum, magnam odio error provident dicta ullam pariatur quibusdam architecto in maxime inventore placeat, eligendi officiis blanditiis ex delectus.'
}
const safe = {
  title: 'Safeplanet',
  detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolore doloribus laborum, magnam odio error provident dicta ullam pariatur quibusdam architecto in maxime inventore placeat, eligendi officiis blanditiis ex delectus.'
}
const land = {
  title: 'Landokmai',
  detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolore doloribus laborum, magnam odio error provident dicta ullam pariatur quibusdam architecto in maxime inventore placeat, eligendi officiis blanditiis ex delectus.'
}
const whal = {
  title: 'Whal & Dolph',
  detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolore doloribus laborum, magnam odio error provident dicta ullam pariatur quibusdam architecto in maxime inventore placeat, eligendi officiis blanditiis ex delectus.'
}


function ContentArt() {
  return (
    <main id='content-art'>
       <div className="container">
        <h1>Popular Artist</h1>
        <hr style={{width:"30%"}}/>
            <section className="content-cons">
                <div className="content-l">
                    <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61p35almahL._UXNaN_FMjpg_QL85_.jpg" alt=""/>
                </div>
                <div className="content-r">
                    <h2>{t074.title}</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat minima sapiente labore consectetur nam assumenda excepturi, doloribus placeat perspiciatis neque vero a, natus aperiam ullam ipsam. Quis, sequi facere?
                    </p>
                    <button id='more'>More</button>
                </div>
            </section>
            <section className="content-cons">
                <div className="content-r">
                    <h2>{safe.title}</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat minima sapiente labore consectetur nam assumenda excepturi, doloribus placeat perspiciatis neque vero a, natus aperiam ullam ipsam. Quis, sequi facere?
                    </p>
                    <button id='more'>More</button>
                </div>
                <div className="content-l">
                    <img src="https://yt3.googleusercontent.com/vlJpEr6vT7NLsSP--Z_Lsc-HD-m0uemQ0_U9MkfoPMJX4y6Ur0aiYXC5TRARHLWuYbhqQJIM=s900-c-k-c0x00ffffff-no-rj" alt=""/>
                </div>
            </section>
            <section className="content-cons">
                <div className="content-l">
                    <img src="https://www.dochord.com/wp-content/uploads/2021/04/Whal-Dolph.jpg" alt=""/>
                </div>
                <div className="content-r">
                    <h2>{whal.title}</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat minima sapiente labore consectetur nam assumenda excepturi, doloribus placeat perspiciatis neque vero a, natus aperiam ullam ipsam. Quis, sequi facere?
                    </p>
                    <button id='more'>More</button>
                </div>
            </section>
            <section className="content-cons">
                <div className="content-r">
                    <h2>{land.title}</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat minima sapiente labore consectetur nam assumenda excepturi, doloribus placeat perspiciatis neque vero a, natus aperiam ullam ipsam. Quis, sequi facere?
                    </p>
                    <button id='more'>More</button>
                </div>
                <div className="content-l">
                    <img src="https://joox-cms-image-1251316161.file.myqcloud.com/2022/10/26/8e4bf81d-74e1-40c4-a437-d91cf64f1ca1.jpg/640" alt=""/>
                </div>
            </section>
        </div>
    </main>
// create button react
  )
}

export default ContentArt