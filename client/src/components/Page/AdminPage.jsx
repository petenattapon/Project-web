import React, {useEffect, useState} from 'react'
import axios from 'axios'
function AdminPage() {

  //Add
  const [productTapes, serProductTapes] = useState("")

  // Fetchdata
  useEffect(()=>{
    const fetchData = async () => {
      const data = await axios.get('http://localhost:4000/requests/get_tapes')
      serProductTapes(data)
      console.log("Product :", data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>Show</h1>
      {productTapes &&
        productTapes.data.map((product) => { // Changed `productTapes` to `product`
          return (
            <div key={product.id}> {/* Added key prop */}
              <table>
                <tr>
                  <td>
                    id = {product._id} <br/>
                    Product name is = {product.productName} <br/>
                    Side A = {product.sideA}<br/>
                    Side B = {product.sideB}<br/>
                    <br/><br/>
                  </td>
                </tr>
              </table>
            </div>
          );
        })}
    </div>
  )
}

export default AdminPage



{/* <div>
      <h1>Show</h1>
      {filteredProduct && (
        <div key={filteredProduct._id}>
          <table>
            <tr>
              <td>
                id = {filteredProduct._id} <br />
                Product name is = {filteredProduct.productName} <br />
                Side A = {filteredProduct.sideA} <br />
                Side B = {filteredProduct.sideB} <br />
                <br /><br />
              </td>
            </tr>
          </table>
        </div>
      )}
    </div> */}