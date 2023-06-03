import React, { useEffect, useState } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import '../sass/Page2/TapeProduct.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

function TapePropduct() {
  const [productTapes, setProductTapes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/requests/get_tapes');
        setProductTapes(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="tape-product">
      <section className="container">
        <section className="manage-center">
          <article className="product-container">
            {productTapes.map((product) => (
              <div className="manage-padding" key={product._id}>
                <div className="textname-product">
                  <h2>{product.productName}</h2>
                </div>
                <figure className="image-product">
                  <img src="https://happeningandfriends.com/uploads/happening/products/41/004027/thumbnail/thingtape-mock.jpg" alt="" />
                </figure>
                <div className="play-music">
                  <AiFillPlayCircle /> <p>ฟังเพลงตัวอย่าง</p>
                </div>
                <hr style={{ width: '70%' }} />
                <p className="product-details">{product.productDetail}</p>
                <div className="details-music">
                  <h4>Music of album</h4>
                  <p>Side a</p>
                  <ul style={{ whiteSpace: 'pre-line' }}><li>{product.sideA}</li></ul>
                  <p>Side B</p>
                  <ul style={{ whiteSpace: 'pre-line' }}><li>{product.sideB}</li></ul>
                  <h4>Type: {product.opProduct}</h4>
                </div>

                <figure>
                  <Link to="/requests" id="Link">
                    <button>Request to admin</button>
                  </Link>
                </figure>
                <figure>
                  <Link to="/profile" id="Link">
                    <button>Request to admin</button>
                  </Link>
                </figure>
              </div>
            ))}
          </article>
        </section>
      </section>
    </main>
  );
}

export default TapePropduct;
