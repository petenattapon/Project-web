import React, {useState, useEffect}from 'react'
import '../sass/Page1/ContentTape.scss'
import axios from 'axios';
function ContentTap() {

    const [productTapes, setProductTapes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/requests/get_tapes');
                setProductTapes(response.data);
                console.log("Product:", response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const filteredPopular = productTapes.filter(product => product.opProduct === "popular");

    return (
        <main id='content'>
            <section className='container'>
                <h1>Popular</h1>
                <hr style={{ width: "30%" }} />
                <section className="content-container">
                    {filteredPopular.map(product => (
                        <article className='content-details' key={product._id}>
                            <figure className='img-content'>
                                <img src="https://happeningandfriends.com/uploads/happening/products/41/004027/thumbnail/thingtape-mock.jpg" alt="" />
                            </figure>
                            <p>{product.productName}</p>
                        </article>
                    ))}

                </section>
            </section>
        </main>
    )
}

export default ContentTap