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
          <Link to="/profile" id="LinkPro1">
            <h3>My Profile</h3>
          </Link>
          <Link to="/requests" id="LinkPro2">
            <h3>Request item to admin</h3>
          </Link>
        </section>
        <hr style={{ width: "70%" }} />
        <h3>Add items</h3>

    return (
        <main className="container">
            <section className="profile-container">
                <section className='header-profile'>
                    <h2 className='userName'>Hello(username)</h2>
                    <figure>
                        <img src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" alt="userImg" />
                    </figure>
                </section>
                <section className='mid-profile'>
                    <Link to='/profile' id='LinkPro1'><h3>My Profile</h3></Link>
                    <Link to='/requests' id='LinkPro2'><h3>Request item to admin</h3></Link>
                </section>
                <hr style={{ width: '70%' }} />
                <h3>Add items</h3>

                <section className="request-form">
                    <div className="details-form">

                        <form action="#">
                            <div className="addRe">
                                <div className="showImg">{imageUrls.map((url, index) => (
                                    <img key={index} src={url} alt={`uploaded image ${index}`} style={{margin:'0 1rem', width:'150px'}}/>
                                ))}</div>

                                <input type="file" multiple onChange={handleImageUpload} />
                            </div>
                            <div className="addRe">
                                <label htmlFor="name-product">Product name</label>
                                <input type="text" name="name-product" id="" placeholder='Enter your name product...' />
                            </div>
                            <div className="addRe">
                                <label htmlFor="name-product">Details</label>
                                <input type="text" name="detail-product" id="" placeholder='Enter your name product...' />
                            </div>
                            <div className="addRe">
                                <label>Music in album</label>
                                <div className="set">
                                    <div className="set-flex">
                                        <input type="text" name="detail-product" id="" placeholder='Enter your name product...' />
                                    </div>
                                    <div className="set-flex">
                                        <input type="text" name="detail-product" id="" placeholder='Enter your name product...' />
                                    </div>
                                </div>
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

                            <button>Add(request)</button>
                        </form>
                    </div>
                </section>
            </section>
        </main >
    )
}
export default RequestItem;
