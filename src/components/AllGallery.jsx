import React from 'react'
import '../sass/Page2/AllGallery.scss'
import { Link } from 'react-router-dom';

function AllGallery() {
    return (
        <main id='AllGallery'>
            <section className='container'>
                <hr style={{ width: "100%", marginBottom: "3rem" }} />
                <div className="filter">
                    <h2>All gallery</h2>
                    <button id='search-filter'>Filter</button>
                </div>
                <section className="gallery-container">
                    <article className='gallery-details'>
                        <figure className='img-gallery'>
                            <Link to='/products'>
                                <img src="https://happeningandfriends.com/uploads/happening/products/41/004027/thumbnail/thingtape-mock.jpg" alt="" />
                            </Link>
                        </figure>
                        <p>Lorem Ipsum is simply dummy text of the</p>
                    </article>
                    <article className='gallery-details'>
                        <figure className='img-gallery'>
                            <img src="https://happeningandfriends.com/uploads/happening/products/41/004027/thumbnail/thingtape-mock.jpg" alt="" />
                        </figure>
                        <p>Lorem Ipsum is simply dummy text of the</p>
                    </article>
                    <article className='gallery-details'>
                        <figure className='img-gallery'>
                            <img src="https://happeningandfriends.com/uploads/happening/products/41/004027/thumbnail/thingtape-mock.jpg" alt="" />
                        </figure>
                        <p>Lorem Ipsum is simply dummy text of the</p>
                    </article>
                    <article className='gallery-details'>
                        <figure className='img-gallery'>
                            <img src="https://happeningandfriends.com/uploads/happening/products/41/004027/thumbnail/thingtape-mock.jpg" alt="" />
                        </figure>
                        <p>Lorem Ipsum is simply dummy text of the</p>
                    </article>


                </section>
            </section>
        </main>
    )
}

export default AllGallery