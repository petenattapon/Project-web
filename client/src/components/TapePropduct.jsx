import React, { useEffect, useState } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import '../sass/Page2/TapeProduct.scss';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function TapeProduct() {
  const [product, setProductTapes] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/requests/get_tapes/${id}`);
        setProductTapes(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const goBack = () => {
    navigate(-1);
  };

  return (
    <main className="tape-product">
      <section className="container">
        <section className="manage-center">
          <article className="product-container">
            <div className="manage-padding">
              <div className="textname-product">
                <h2>{product.productName}</h2>
              </div>
              <figure className="image-product">
                <img src={`http://localhost:4000/uploads/${product.image}`} alt="Product" />
              </figure>
              <div className="play-music">
                <AiFillPlayCircle /> <p>ฟังเพลงตัวอย่าง</p>
              </div>
              <hr style={{ width: '70%' }} />
              <p className="product-details">{product.productDetail}</p>
              <div className="details-music">
                <h4>Music of album</h4>
                <p>Side a</p>
                <ul style={{ whiteSpace: 'pre-line' }}>
                  <li>{product.sideA}</li>
                </ul>
                <p>Side B</p>
                <ul style={{ whiteSpace: 'pre-line' }}>
                  <li>{product.sideB}</li>
                </ul>
                <h4>Type: {product.opProduct}</h4>
              </div>

              <figure>
              <Link to={`/collect?productName=${product.productName}&productDetail=${product.productDetail}&sideA=${product.sideA}&sideB=${product.sideB}&opProduct=${product.opProduct}&image=${product.image}`}>
                  <button>Add to Collection</button>
                </Link>
                <Link to="/requests" id="Link">
                  <button>Request to admin</button>
                </Link>
              </figure>
              <hr />
              <figure>
                <button className="back" onClick={goBack}>
                  Go back
                </button>
              </figure>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}

export default TapeProduct;
