import React, { useState, useEffect } from 'react';
import '../sass/Page2/AllGallery.scss'
import { Link } from 'react-router-dom';
import axios from 'axios';
function AllGallery() {

    const [productTapes, setProductTapes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:4000/requests/get_tapes');
            setProductTapes(response.data);
            console.log("Product :", response.data);
        };
        fetchData();
    }, []);

    return (
        <main id='AllGallery'>
            <section className='container'>
                <hr style={{ width: "100%", marginBottom: "3rem" }} />
                <div className="filter">
                    <h2>All gallery</h2>
                    <button id='search-filter'>Filter</button>
                </div>
                <section className="gallery-container">
                    {productTapes.map((product) => (
                        
                    <article className='gallery-details' key={product._id}>
                        <figure className='img-gallery'>
                            <Link to='/products'>
                                <img src="https://happeningandfriends.com/uploads/happening/products/41/004027/thumbnail/thingtape-mock.jpg" alt="" />
                            </Link>
                        </figure>
                        <p>{product.productName}</p>
                    </article>
                    ))}
                    {/* <article className='gallery-details'>
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
                    </article> */}


                </section>
            </section>
        </main>
    )
}

export default AllGallery