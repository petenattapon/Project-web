import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment'; // Import the moment library
import '../../sass/Admin/ShowData.scss';

function ShowData() {
  const [productTapes, setProductTapes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortingOption, setSortingOption] = useState('');

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
      console.log('Product:', sortedData);
    };
    fetchData();
  }, [sortingOption]);

  const handleDelete = async (id) => {
    const alertCon = window.confirm('Are you sure you want to delete it?....');

    if (alertCon) {
      try {
        await axios.delete(`http://localhost:4000/requests/delete_tape/${id}`);
        setProductTapes((prevProductTapes) =>
          prevProductTapes.filter((product) => product._id !== id)
        );
        console.log('Product deleted');
      } catch (error) {
        console.log('Error deleting product:', error);
      }
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortingOptionChange = (e) => {
    setSortingOption(e.target.value);
  };

  const filteredProductTapes = productTapes.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main">
      <div className="search-box">
        <div className="search-input">
          <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} />
        </div>
        <div className="search-input">
          <select value={sortingOption} onChange={handleSortingOptionChange}>
            <option value="">--Sort by--</option>
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
            <option value="type">Type of product</option>
          </select>
        </div>
      </div>
      <div className="container-fetch">
        <table className="content-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product name</th>
              <th>Product details</th>
              <th>Music A</th>
              <th>Music B</th>
              <th>Type</th>
              <th>Time</th>
              <th>Approved</th>
              <th>edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredProductTapes.map((product) => (
              <tr key={product._id}>
                <td>
                  <img src={`http://localhost:4000/uploads/${product.image}`} alt="Product" style={{height:"5vw"}}/>
                </td>
                <td>{product.productName}</td>
                <td>{product.productDetail}</td>
                <td>{product.sideA}</td>
                <td>{product.sideB}</td>
                <td>{product.opProduct}</td>
                <td>{moment(product.createdAt).format('YYYY-MM-DD HH:mm:ss.SSS')}</td> {/* Include milliseconds in the timestamp */}
                <td>
                  <button className="approved">
                    Approved
                  </button>
                </td>
                <td>
                  <button className="edit">
                    Edit
                  </button>
                </td>
                <td>
                  <button className="delete" onClick={() => handleDelete(product._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShowData;
