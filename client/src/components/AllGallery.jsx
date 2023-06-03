import React, { useState, useEffect } from 'react';
import '../sass/Page2/AllGallery.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AllGallery() {
  const [productTapes, setProductTapes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/requests/get_tapes');
        setProductTapes(response.data);
        console.log("Product :", response.data);
      } catch (error) {
        console.log(error);
      }
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
              <Link to={`/products/${product._id}`}>
                <figure className='img-gallery'>
                  <a href={`/products/${product._id}`}>
                    <img src="https://happeningandfriends.com/uploads/happening/products/41/004027/thumbnail/thingtape-mock.jpg" alt="" />
                  </a>
                </figure>
              </Link>
              <p>
                <Link to={`/products/${product._id}`}>
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

export default AllGallery;
