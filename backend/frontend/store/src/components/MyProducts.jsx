import axios from "axios";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { HiMiniPencilSquare, HiTrash } from "react-icons/hi2";
function MyProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        const fetchProducts = async () => {
            const user = JSON.parse(localStorage.getItem('user'));
            if (!user) return;
            const userId = user._id;
            const {data} = await axios.get("http://localhost:5000/product");
            const userProducts = data.filter(product => product.user === userId);
            setProducts(userProducts);
        };
        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/product/${id}`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });
            setProducts(products.filter(product => product._id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        products.length > 0 ? (
            <div className="AllProducts">
                <h1>My Products</h1>
                <div className="products-list">
                    {products.map((product, index) => (
                        <div key={index} className="product-item">
                            <img className="w-100" src={`http://localhost:5000/uploads/images/${product.image}`} alt={product.name} />
                            <h2>{product.name}</h2>
                            {product.image_url}
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                            <p>Category: {product.category}</p>
                            <p>Created At: {new Date(product.createdAt).toLocaleDateString()}</p>
                            <p>Quantity : {product.quantity}</p>
                            <p>Rating: {product.rating}</p>
                            <div className="icon">
                                <FaHeart />
                            </div>
                            <div className="mt-2 icons-down">
                               <a href={`/edit-product/${product._id}`}><HiMiniPencilSquare /></a>
                                <a onClick={() => handleDelete(product._id)}><HiTrash /></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ) : <h1>No products found</h1>
    );
}

export default MyProducts;