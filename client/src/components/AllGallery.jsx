﻿import React, { useState, useEffect } from 'react';
import '../sass/Page2/AllGallery.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../sass/Page2/Gallery.scss';

function AllGallery() {
  const [productTapes, setProductTapes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTapes, setFilteredTapes] = useState([]);
  const [approvedProducts, setApprovedProducts] = useState([]);
  const [sortingOption, setSortingOption] = useState('');
  const [displayCount, setDisplayCount] = useState(4);
  const [loopIndex, setLoopIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:4000/requests/get_tapes');
      let sortedData = [...response.data]; // Create a copy of the data array

      if (sortingOption === 'latest') {
        sortedData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      } else if (sortingOption === 'oldest') {
        sortedData.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      } else if (sortingOption === 'type') {
        sortedData.sort((a, b) => a.opProduct.localeCompare(b.opProduct));
      } else {
        // No sorting option selected, use default sorting by product name
        sortedData.sort((a, b) => a.productName.localeCompare(b.productName));
      }

      setProductTapes(sortedData);
      setFilteredTapes(sortedData);
      console.log('Product:', sortedData);
    };
    fetchData();
  }, [sortingOption]);

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

  const handleSortingOption = (e) => {
    setSortingOption(e.target.value);
  };

  const fetchApprovedProducts = async () => {
    try {
      const response = await axios.get('http://localhost:4000/requests/get_approved_tapes');
      setApprovedProducts(response.data);
    } catch (error) {
      console.log('Error fetching approved products:', error);
    }
  };

  const handleLoadMore = () => {
    const nextIndex = loopIndex + 1;
    const start = nextIndex * 4;
    const end = start + 4;
    setDisplayCount(end);
    setLoopIndex(nextIndex);
  };

  useEffect(() => {
    fetchApprovedProducts();
  }, []);

  return (
    <main id="AllGallery">
      <section className="container">
        <h1>Gallery</h1>
        <hr style={{ width: '15%' }} />
        <div className="search-container">
          <div className="search-container-box">
            <input
              type="text"
              placeholder="Enter"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button id="search" onClick={handleSearch}>
              Search
            </button>
          </div>
          <div className="search-container-box">
            <button id="search-type" onClick={handleAll}>
              All
            </button>
            <button id="search-type" onClick={handleRare}>
              Rare
            </button>
            <button id="search-type" onClick={handlePopular}>
              Popular
            </button>
          </div>
          <div className="search-container-box">
            <select id="select-options" onChange={handleSortingOption}>
              <option value="">--Sorting by--</option>
              <option value="popular">Popular</option>
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>
      </section>
      <section className="container">
        <hr style={{ width: '100%', marginBottom: '3rem' }} />
        <div className="filter">
          <h2>All gallery</h2>
        </div>
        <section className="gallery-container">
          {filteredTapes.slice(0, displayCount).map((product) =>
            product.statusProduct ? (
              <article className="gallery-details" key={product._id}>
                <Link to={`/products/${product._id}`}>
                  <figure className="img-gallery">
                    <a href={`/products/${product._id}`}>
                      <img
                        src={`http://localhost:4000/uploads/${product.image}`}
                        alt="Product"
                      />
                    </a>
                  </figure>
                </Link>
                <p>
                  <Link to={`/products/${product._id}`} className="allName">
                    {product.productName}
                  </Link>
                </p>
              </article>
            ) : null
          )}
        </section>
        {filteredTapes.length > displayCount && (
          <div className="btnn">
            <button onClick={handleLoadMore} className='loadMore'>Load More</button>
            
          </div>
        )}
      </section>
    </main>
  );
}

export default AllGallery;
