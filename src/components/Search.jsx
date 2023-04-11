import React, { useState } from 'react'
import '../sass/Page2/Gallery.scss'
function Search() {

  return (
    <main id='Search'>
        <section className="container">
            <h1>Gallery</h1>
            <hr style={{width:'15%'}}/>
            <div className="search-container">
              <div className="search-container-box">
                <input type="text" placeholder='Enter'/>
                <button id='search'>Search</button>
              </div>
              <div className="search-container-box">                
                <button id='search-type'>All</button>
                <button id='search-type'>Rare</button>
                <button id='search-type'>Popular</button>
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
    </main>
  )
}

export default Search