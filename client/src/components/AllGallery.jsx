import React, { useState, useEffect } from 'react';
import '../sass/Page2/AllGallery.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../sass/Page2/Gallery.scss'

function AllGallery() {
  const [productTapes, setProductTapes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTapes, setFilteredTapes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/requests/get_tapes');
        setProductTapes(response.data);
        setFilteredTapes(response.data);
        console.log("Product :", response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = () => {
    const filtered = productTapes.filter((product) =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTapes(filtered);
  };

  const handlePopular = () => {
    const filtered = productTapes.filter((product) => product.opProduct === 'popular');
    setFilteredTapes(filtered);
  };

  const handleAll = () => {
    setFilteredTapes(productTapes);
  };

  const handleRare = () => {
    const filtered = productTapes.filter((product) => product.opProduct === 'rare');
    setFilteredTapes(filtered);
  };

  return (
    <main id='AllGallery'>
      <section className="container">
        <h1>Gallery</h1>
        <hr style={{ width: '15%' }} />
        <div className="search-container">
          <div className="search-container-box">
            <input type="text" placeholder='Enter' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button id='search' onClick={handleSearch}>Search</button>
          </div>
          <div className="search-container-box">
            <button id='search-type' onClick={handleAll}>All</button>
            <button id='search-type' onClick={handleRare}>Rare</button>
            <button id='search-type' onClick={handlePopular}>Popular</button>
          </div>
          <div className="search-container-box">
            <select id="select-options">
              <option value="">--Please choose an option--</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
              <option value="option5">Option 5</option>
            </select>
          </div>
        </div>
      </section>
      <section className='container'>
        <hr style={{ width: "100%", marginBottom: "3rem" }} />
        <div className="filter">
          <h2>All gallery</h2>
          <button id='search-filter'>Filter</button>
        </div>
        <section className="gallery-container">
          {filteredTapes.map((product) => (
            <article className='gallery-details' key={product._id}>
              <Link to={`/products/${product._id}`}>
                <figure className='img-gallery'>
                  <a href={`/products/${product._id}`}>
                  <img src={`http://localhost:4000/uploads/${product.image}`} alt="Product"/>
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
