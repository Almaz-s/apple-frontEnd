import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../CommonResource/css/styles.css";
const backendUrl = import.meta.env.VITE_APPLE_BACKEND;

function ProductPage() {
  const [product, setProduct] = useState(null); // Initialize as null to handle no-product case easily
  const { productID } = useParams();

  useEffect(() => {
    fetch(`${backendUrl}/products/${productID}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched single product:", data.product); // Debugging line
        setProduct(data.product);
      })
      .catch(() => console.log("Error: unable to fetch!!!"));
  }, [productID]);

  if (!product) {
    return <div>Loading or no product found</div>;
  }

  return (
    <div className="text-center w-100 mt-5">
      <div key={product.product_id}>
        <div>
          <div className="product-title">{product.product_name}</div>
          <div className="product-brief">
            {product.product_brief_description}
          </div>
        </div>
        <div>
          <div>{`Starting at ${product.starting_price}`}</div>
          <div className="starting-price">{product.price_range}</div>
          <div className="text-wrap">{product.product_description}</div>
        </div>
        <div className="product-image">
          <img src={product.product_img} alt="product" />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
