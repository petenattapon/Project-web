import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../sass/Page2/RequestItem.scss";
function RequestItem() {
  return (
    <main className="container">
      <section className="profile-container">
        <section className="header-profile">
          <h2 className="userName">Hello(username)</h2>
          <figure>
            <img
              src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
              alt="userImg"
            />
          </figure>
        </section>
        <section className="mid-re">
          <Link to="/profile" id="LinkPro1" >
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
            <form action="#">
              <div className="addRe">
                <input type="file" multiple accept="image/*" id="uploadImgs" />
              </div>
              <div className="addRe">
                <label htmlFor="name-product">Product name</label>
                <input
                  type="text"
                  name="name-product"
                  id=""
                  placeholder="Enter your name product..."
                />
              </div>
              <div className="addRe">
                <label htmlFor="name-product">Details</label>
                <input
                  type="text"
                  name="detail-product"
                  id=""
                  placeholder="Enter your name product..."
                />
              </div>
              <div className="addRe">
                <div className="set-grid">
                  <div className="set-input">
                    <label htmlFor="name-product">side A</label>
                    <input
                      type="text"
                      name="detail-product"
                      id=""
                      placeholder="Enter your name product..."
                    />
                  </div>
                  <div className="set-input">
                    <label htmlFor="name-product">side B</label>
                    <input
                      type="text"
                      name="detail-product"
                      id=""
                      placeholder="Enter your name product..."
                    />
                  </div>
                </div>
                <p>Music in album</p>
              </div>
              <div className="addRe">
                <label htmlFor="fileReadio">Audio (minimum 15 s.)</label>
                <input type="file" />
              </div>
              <div className="addRe">
                <select id="select-options">
                  <option value="">--Please choose an option--</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
                  <option value="option5">Option 5</option>
                </select>
              </div>
              <div className="btn-add-reque">
                <button>Add items to admin</button>
              </div>
            </form>
          </div>
        </section>
      </section>
    </main>
  );
}

export default RequestItem;
