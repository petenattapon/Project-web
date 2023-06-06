import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
function AddItems() {

    const [productName, setProductName] = useState("");
    const [productDetail, setProductDetail] = useState("");
    const [sideA, setSideA] = useState("");
    const [sideB, setSideB] = useState("");
    const [opProduct, setOpProduct] = useState("");
    const [image, setImage] = useState(null);
  
    const onSubmit = async (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append("image", image);
      formData.append("productName", productName);
      formData.append("productDetail", productDetail);
      formData.append("sideA", sideA);
      formData.append("sideB", sideB);
      formData.append("opProduct", opProduct);
  
      try {
        await axios.post('http://localhost:4000/requests/tapes', formData);
        console.log("Tape created successfully");
        setProductName("");
        setProductDetail("");
        setSideA("");
        setSideB("");
        setOpProduct("");
        setImage(null);
      } catch (error) {
        console.log(error);
      }
  
    };
  
    const handleImageChange = (e) => {
      setImage(e.target.files[0]);
    };
  

  return (
    <main className="container">
    <section className="profile-container">
      

      <section className="request-form">
      <h3 style={{textAlign:"center"}}>Add items from Admin</h3>
        <div className="details-form">
        <form onSubmit={onSubmit} encType="multipart/form-data">
            <div className="addRe">
                <label htmlFor="image">Product Image</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleImageChange}
                />
              </div>
              <div className="addRe">
                <label htmlFor="name-product">Product name</label>
                <input
                  type="text"
                  name="name-product"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder="Enter your name product..."
                />
              </div>
              <div className="addRe">
                <label htmlFor="product-details">Details</label>
                <textarea
                  id="product-details"
                  name="product-details"
                  rows="8"
                  cols="50"
                  value={productDetail}
                  onChange={(e) => setProductDetail(e.target.value)}
                  placeholder="Enter product details..."
                ></textarea>
              </div>
              <div className="addRe">
                <div className="set-grid">
                  <div className="set-input">
                    <label htmlFor="side-a">Side A</label>
                    <textarea
                      id="side-a"
                      name="side-a"
                      rows="8"
                      cols="25"
                      value={sideA}
                      onChange={(e) => setSideA(e.target.value)}
                      placeholder="Enter side A details..."
                    ></textarea>
                  </div>
                  <div className="set-input">
                    <label htmlFor="side-b">Side B</label>
                    <textarea
                      id="side-b"
                      name="side-b"
                      rows="8"
                      cols="25"
                      value={sideB}
                      onChange={(e) => setSideB(e.target.value)}
                      placeholder="Enter side B details..."
                    ></textarea>
                  </div>
                </div>
                <p>Music in album</p>
              </div>
              <div className="addRe">
                <label htmlFor="select-options">Options</label>
                <select
                  id="select-options"
                  value={opProduct}
                  onChange={(e) => setOpProduct(e.target.value)}
                >
                  <option value="">--Please choose an option--</option>
                  <option value="rare" key="rare">Rare</option>
                  <option value="popular" key="popular">Popular</option>
                  <option value="new" key="new">New</option>
                </select>
              </div>
              <div className="btn-add-reque">
                <button type="submit">Add items to admin</button>
              </div>
            </form>
          <hr />
          <div className="btn-add-reque">
          <Link to='/admin/productSchema'><button style={{backgroundColor:"#000",color:"#fff"}}>Go back</button></Link>
          </div>
          
        </div>
      </section>
    </section>
  </main>
  )
}

export default AddItems