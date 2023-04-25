import React from 'react'
import { AiFillPlayCircle } from "react-icons/ai";
import '../sass/Page2/TapeProduct.scss'
import '../data/DataSafe'
import { Link } from 'react-router-dom';
import DataSafe from '../data/DataSafe';

let product = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, explicabo aliquam ducimus eius pariatur et sit ipsa quibusdam repudiandae vel perspiciatis dolorum tenetur, nulla minima voluptas, natus unde nemo sed!'
function TapePropduct() {
    return (

        <main className="tape-product">
            <section className="container">
                <section className="manage-center">
                    <article className="product-container">
                        <div className="manage-padding">
                            <div className="textname-product">
                                <h2>Name of tape cassttee.</h2>
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
                            <div className="details-music">
                                <h4>Music of album</h4>
                                <p><DataSafe /></p>
                                <h4>Type : Safeplanet, Rare, Popular</h4>
                            </div>

                            <figure>
                                   <Link to='/requests' id='Link'>
                                    <button>Request to admin</button>
                                    </Link>
                            </figure>
                            <figure>
                                   <Link to='/profile' id='Link'>
                                    <button>Request to admin</button>
                                    </Link>
                            </figure>
                        </div>
                    </article>
                </section>
            </section>
        </main>
    )
}

export default TapePropduct