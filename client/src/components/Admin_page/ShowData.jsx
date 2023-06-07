// Client-side code (ShowData.js)

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import '../../sass/Admin/ShowData.scss';

function ShowData() {
  const [productTapes, setProductTapes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortingOption, setSortingOption] = useState('');
  const [editData, setEditData] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editedProductName, setEditedProductName] = useState('');
  const [editedProductDetail, setEditedProductDetail] = useState('');
  const [editedSideA, setEditedSideA] = useState('');
  const [editedSideB, setEditedSideB] = useState('');
  const [editedOpProduct, setEditedOpProduct] = useState('');
  const [editingProductId, setEditingProductId] = useState(null);

  useEffect(() => {
    fetchData();
  }, [sortingOption]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/requests/get_tapes');
      let sortedData = [...response.data];

      if (sortingOption === 'latest') {
        sortedData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      } else if (sortingOption === 'oldest') {
        sortedData.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      } else if (sortingOption === 'type') {
        sortedData.sort((a, b) => a.opProduct.localeCompare(b.opProduct));
      } else {
        sortedData.sort((a, b) => a.productName.localeCompare(b.productName));
      }

      setProductTapes(sortedData);
    } catch (error) {
      console.log('Error fetching product data:', error);
    }
  };

  const handleStatusUpdate = async (product) => {
    try {
      const updatedData = { statusProduct: !product.statusProduct };
      await axios.put(`http://localhost:4000/update/tapes/${product._id}/status`, updatedData);
      setProductTapes((prevProductTapes) =>
        prevProductTapes.map((item) =>
          item._id === product._id ? { ...item, ...updatedData } : item
        )
      );
    } catch (error) {
      console.log('Error updating status:', error);
    }
  };
  


  const handleDelete = async (id) => {
    const alertCon = window.confirm('Are you sure you want to delete it?');

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

  const handleEdit = (product) => {
    setEditingProductId(product._id);
    setEditData(product);
    setEditedProductName(product.productName);
    setEditedProductDetail(product.productDetail);
    setEditedSideA(product.sideA);
    setEditedSideB(product.sideB);
    setEditedOpProduct(product.opProduct);
    setEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setEditingProductId(null);
    setEditModalOpen(false);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    if (editingProductId) {
      const updatedProduct = {
        productName: editedProductName,
        productDetail: editedProductDetail,
        sideA: editedSideA,
        sideB: editedSideB,
        opProduct: editedOpProduct,
      };

      try {
        await axios.put(`http://localhost:4000/update/tapes/${editingProductId}`, updatedProduct);
        setProductTapes((prevProductTapes) =>
          prevProductTapes.map((product) =>
            product._id === editingProductId ? { ...product, ...updatedProduct } : product
          )
        );
        setEditingProductId(null);
        setEditModalOpen(false);
        console.log('Product updated');
      } catch (error) {
        console.log('Error updating product:', error);
      }
    }
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
              <th>Edit</th>
              <th>Delete</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredProductTapes.map((product) => (
              <tr key={product._id}>
                <td>
                  <img src={`http://localhost:4000/uploads/${product.image}`} alt="Product" style={{ height: "5vw" }} />
                </td>
                <td>
                  {editingProductId === product._id ? (
                    <textarea
                      className="edit-input"
                      value={editedProductName}
                      onChange={(e) => setEditedProductName(e.target.value)}
                    />
                  ) : (
                    product.productName
                  )}
                </td>
                <td>
                  {editingProductId === product._id ? (
                    <textarea
                      className="edit-input"
                      value={editedProductDetail}
                      onChange={(e) => setEditedProductDetail(e.target.value)}
                    />
                  ) : (
                    product.productDetail
                  )}
                </td>
                <td>
                  {editingProductId === product._id ? (
                    <textarea
                      className="edit-input"
                      value={editedSideA}
                      onChange={(e) => setEditedSideA(e.target.value)}
                    />
                  ) : (
                    product.sideA
                  )}
                </td>
                <td>
                  {editingProductId === product._id ? (
                    <textarea
                      className="edit-input"
                      value={editedSideB}
                      onChange={(e) => setEditedSideB(e.target.value)}
                    />
                  ) : (
                    product.sideB
                  )}
                </td>
                <td>
                  {editingProductId === product._id ? (
                    <textarea
                      className="edit-input"
                      value={editedOpProduct}
                      onChange={(e) => setEditedOpProduct(e.target.value)}
                    />
                  ) : (
                    product.opProduct
                  )}
                </td>
                <td>{moment(product.createdAt).format('YYYY-MM-DD HH:mm:ss.SSS')}</td>
                <td>
                  <button className={`approved ${product.statusProduct ? 'is-approved' : ''}`}
  onClick={() => handleStatusUpdate(product)}>
                    Approved
                  </button>
                </td>
                <td>
                  {editingProductId === product._id ? (
                    <>
                      <button className="save" onClick={handleEditSubmit}>
                        Save
                      </button>
                      <button className="cancel" onClick={handleEditModalClose}>
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button className="edit" onClick={() => handleEdit(product)}>
                      Edit
                    </button>
                  )}
                </td>
                <td>
                  <button className="delete" onClick={() => handleDelete(product._id)}>
                    Delete
                  </button>
                </td>
                <td>{product.allProduct}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShowData;
