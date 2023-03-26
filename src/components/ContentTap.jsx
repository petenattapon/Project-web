import React from 'react'
import '../sass/Page1/ContentTape.scss'

function ContentTap() {
  return (
    <main id='content'>
        <section className='container'>
        <h1>Popular</h1>
        <hr style={{width:"30%"}}/>
            <section className="content-container">
                <article className='content-details'>
                    <figure className='img-content'>
                        <img src="https://happeningandfriends.com/uploads/happening/products/41/004027/thumbnail/thingtape-mock.jpg" alt="" />
                    </figure>
                    <p>Lorem Ipsum is simply dummy text of the</p>
                </article>
                <article className='content-details'>
                    <figure className='img-content'>
                        <img src="https://happeningandfriends.com/uploads/happening/products/41/004027/thumbnail/thingtape-mock.jpg" alt="" />
                    </figure>
                    <p>Lorem Ipsum is simply dummy text of the</p>
                </article>
                <article className='content-details'>
                    <figure className='img-content'>
                        <img src="https://happeningandfriends.com/uploads/happening/products/41/004027/thumbnail/thingtape-mock.jpg" alt="" />
                    </figure>
                    <p>Lorem Ipsum is simply dummy text of the</p>
                </article>
                <article className='content-details'>
                    <figure className='img-content'>
                        <img src="https://happeningandfriends.com/uploads/happening/products/41/004027/thumbnail/thingtape-mock.jpg" alt="" />
                    </figure>
                    <p>Lorem Ipsum is simply dummy text of the</p>
                </article>
                

            </section>
        </section>
    </main>
  )
}

export default ContentTap