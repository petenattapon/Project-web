import React from 'react'
import Header from '../Header'
import Navbar from '../Navbar'
import '../../sass/Page1/Collection.scss'

function Collect() {
  return (
    <>
    <Header/>
    <Navbar />
    <main className="container">
      <div className="collect-detail">
        <div className="searchbar">
        <h3>Search Collection</h3>
          <input type="text" placeholder='Enter your Collection'/>
        </div>
        <div className="btnBar">
          <button>Search</button>
        </div>

        <div className="showData-collect">
          <div className="collect">
            <img src="https://i.pinimg.com/originals/75/c1/42/75c14228828545868fd61f0b7ca2c29d.jpg" alt="" />
          </div>
          <div className="collect">
            <img src="https://i.pinimg.com/originals/75/c1/42/75c14228828545868fd61f0b7ca2c29d.jpg" alt="" />
          </div>
          <div className="collect">
            <img src="https://i.pinimg.com/originals/75/c1/42/75c14228828545868fd61f0b7ca2c29d.jpg" alt="" />
          </div>
          <div className="collect">
            <img src="https://i.pinimg.com/originals/75/c1/42/75c14228828545868fd61f0b7ca2c29d.jpg" alt="" />
          </div>
        </div>
      </div>
    </main>
    
    </>
  )
}

export default Collect