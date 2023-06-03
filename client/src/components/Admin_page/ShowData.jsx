import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../sass/admin/Admin.scss';

function ShowData() {
  const [productTapes, setProductTapes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:4000/requests/get_tapes');
      const sortedData = response.data.sort((a, b) =>
        a.productName.localeCompare(b.productName)
      )
      setProductTapes(sortedData);
      console.log("Product :", sortedData);
    };
    fetchData();
  }, []);




  const handleDelete = async (id) => {
  const alertCon = window.confirm("Are you sure you want to delete it?....")
  
    if (alertCon) {
      try {
        await axios.delete(`http://localhost:4000/requests/delete_tape/${id}`);
        setProductTapes((prevProductTapes) =>
          prevProductTapes.filter((product) => product._id !== id)
        );
        console.log("Product deleted");
      } catch (error) {
        console.log("Error deleting product:", error);
      }
    }
  };

  return (
    <div className="main">
      <div className="container-fetch">
        <table className="center-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Product name</th>
              <th>Product details</th>
              <th>Music A</th>
              <th>Music B</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {productTapes.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.productName}</td>
                <td>{product.productDetail}</td>
                <td>{product.sideA}</td>
                <td>{product.sideB}</td>
                <td>{product.opProduct}</td>
                <td><button onClick={() => handleDelete(product._id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
            }

export default ShowData;
