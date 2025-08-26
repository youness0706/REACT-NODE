// src/pages/Product.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/product/${id}`);
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  if (!product) return <h2 style={{ textAlign: "center" }}>Product not found</h2>;

  return (
    <div className="product-details" style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: "1rem",
          background: "#2563eb",
          color: "white",
          padding: "0.5rem 1rem",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        ⬅ Back
      </button>

      <div
        className="product-card"
        style={{
          background: "white",
          borderRadius: "12px",
          padding: "1.5rem",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          display: "flex",
          gap: "2rem"
        }}
      >
        {product.image && (
          <img
            src={`http://localhost:5000/uploads/images/${product.image}`}
            alt={product.name}
            style={{ maxWidth: "300px", borderRadius: "12px", objectFit: "cover" }}
          />
        )}

        <div>
          <h1>{product.name}</h1>
          <p style={{ fontSize: "1.2rem", margin: "0.5rem 0" }}>
            💰 <strong>${product.price}</strong>
          </p>
          <p style={{ margin: "0.5rem 0" }}>{product.description}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Quantity:</strong> {product.quantity}</p>
          <p><strong>Rating:</strong> ⭐ {product.rating}</p>
          <p><strong>Created At:</strong> {new Date(product.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
