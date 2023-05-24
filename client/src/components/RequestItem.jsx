import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../sass/Page2/RequestItem.scss";
import axios from 'axios';

function RequestItem() {
  const [productName, setProductName] = useState("");
  const [productDetail, setProductDetail] = useState("");
  const [sideA, setSideA] = useState("");
  const [sideB, setSideB] = useState("");
  const [opProduct, setOpProduct] = useState("");

  const onSubmit = async(e) => {
    e.preventDefault();
    const tapeObj = {
      productName: productName,
      productDetail: productDetail,
      sideA: sideA,
      sideB: sideB,
      opProduct: opProduct,
    }

    await axios.post('http://localhost:4000/requests/tapes', tapeObj)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

    console.log("Submit Success......");
    console.log("Name product:", productName);
    console.log("Details:", productDetail);
    console.log("Side A:", sideA);
    console.log("Side B:", sideB);
    console.log("Option:", opProduct);

    setProductName("");
    setProductDetail("");
    setSideA("");
    setSideB("");
    setOpProduct("");
  };

  return (
    <main className="container">
      <section className="profile-container">
        <section className="header-profile">
          {/* <h2 className="userName">Hello(username)</h2> */}
          <figure>
            <img
              src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
              alt="userImg"
            />
          </figure>
        </section>
        <section className="mid-re">
          <Link to="/profile" id="LinkPro1">
            <h3>My Profile</h3>
          </Link>
          <Link to="/requests" id="LinkPro2">
            <h3>Request item to admin</h3>
          </Link>
        </section>
        <hr style={{ width: "70%" }} />
        <h3>Add items</h3>

        <section className="request-form">
          <div className="details-form">
            <form onSubmit={onSubmit}>
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
                  <option value="popular" key="popular">Poppular</option>
                  <option value="new" key="new">New</option>
                </select>
              </div>
              <div className="btn-add-reque">
                <button type="submit">Add items to admin</button>
              </div>
            </form>
          </div>
        </section>
      </section>
    </main>
  );
}

export default RequestItem;
