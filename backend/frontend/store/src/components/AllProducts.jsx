import axios from "axios";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";

function AllProducts() {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:5000/product")
        .then((response)=>{
            setProducts(response.data);
        })
    });
    return <div className="AllProducts">
            <h1>All Products</h1>
            <div className="products-list">
                {products.map((product,index) => (
                    <div key={index} className="product-item">
                        <img className="w-100" src={`http://localhost:5000/uploads/images/${product.image}`} alt={product.name} />
                        <h2>{product.name}</h2>
                        {product.image_url}
                        <p>
  {product.description
    .split(" ")
    .slice(0, 5)
    .join(" ")}
  {product.description.split(" ").length > 5 ? "..." : ""}
</p>
                        <p>Price: ${product.price}</p>
                        <div className="icon">
                            <FaHeart />

                        </div>
                        <a href={`/product/${product._id}`}>View The Product</a>
                    </div>
                    
                ))}
        </div>
    </div>
}

export default AllProducts;