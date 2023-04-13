import React from 'react'
import { AiFillPlayCircle } from "react-icons/ai";
import '../sass/Page2/TapeProduct.scss'

let product  = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, explicabo aliquam ducimus eius pariatur et sit ipsa quibusdam repudiandae vel perspiciatis dolorum tenetur, nulla minima voluptas, natus unde nemo sed!'
function TapePropduct() {
    return (

        <main className="tape-product">
            <section className="container">
                <article className="product-container">
                    <div className="textname-product">
                        <h3>Name of tape cassttee.</h3>
                    </div>
                    <figure className='image-product'>
                        <img src="https://happeningandfriends.com/uploads/happening/products/41/004027/thumbnail/thingtape-mock.jpg" alt="" />
                    </figure>
                    <div className="play-music">
                        <AiFillPlayCircle /> <p>ฟังเพลงตัวอย่าง</p>
                    </div>

                    <hr style={{ width: '70%' }} />
                    <p className="product-details">
                        {product}
                    </p>
                </article>
            </section>
        </main>
    )
}

export default TapePropduct