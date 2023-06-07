import React, { useState, useEffect } from 'react'
import '../sass/Page1/ContentTape.scss'
import axios from 'axios';
import { Link } from 'react-router-dom';

function ContentTap() {

    const [productTapes, setProductTapes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/requests/get_tapes');
                setProductTapes(response.data);
                console.log("Product:", response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const filteredPopular = productTapes.filter(product => product.opProduct === "popular");

    return (
        <main id='content'>
            <section className='container'>
                <h1>Popular cassette tapes</h1>
                <hr style={{ width: "30%" }} />
                <section className="content-container">
                    {filteredPopular.map(product => (
                        <article className='content-details' key={product._id}>
                            <figure className='img-content'>
                                <a href={`/products/${product._id}`}>
                                    <img src={`http://localhost:4000/uploads/${product.image}`} alt="Product" />
                                </a>
                            </figure>
                            <p>
                                <Link to={`/products/${product._id}`} className="allName">
                                    {product.productName}
                                </Link>
                            </p>
                        </article>
                    ))}

                </section>
            </section>
        </main>
    )
}

export default ContentTap