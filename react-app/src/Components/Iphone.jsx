import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

const backendUrl = import.meta.env.VITE_APPLE_BACKEND;

function Iphone() {
    let [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${backendUrl}/products`)
          .then((res) => res.json())
          .then((data) => {
            setProducts(data.products);
            console.log(data.products);
            console.log("Backend URL:", backendUrl);

          })
          .catch(() => console.log("Error: unable to fetch!!"));
    },[])

    return (
      <div className="internal-page-wrapper">
     
        {products?.map((product, index) => {
          let ProductDiv = (
            <div
              key={product.product_url}
              className="row justify-content-center text-center product-holder h-100 mt-5 "
            >
              <div
                className={`col-sm-12 col-md-6 my-auto order-${
                  index % 2 === 0 ? "1" : "2"
                }`}
              >
                <div className="product-title">{product.product_name}</div>
                <div className="product-brief">
                  {" "}
                  {product.product_brief_description}
                </div>
                <div className="starting-price">{`starting at ${product.price_range}`}</div>
                <div className="monthly-price">{product.price_range}</div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <Link to={`${product.product_id}`}>Learn more</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={`col-sm-12 col-md-6 order-${
                  index % 2 === 0 ? "2" : "1"
                }`}
              >
                <div className="product-image">
                  <img src={product.product_img} alt={product} />
                </div>
              </div>
            </div>
          );
          return ProductDiv;
        })}
      </div>
    );
}

export default Iphone 