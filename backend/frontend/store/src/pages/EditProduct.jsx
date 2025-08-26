import axios from "axios";
import {  useEffect, useState } from "react";
import {useNavigate,useParams} from "react-router-dom";

function EditProduct() {

    

    const [name, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState("");
    const createdAt = new Date().toISOString();
    const rating = 0;
    const [image, setImage] = useState(null);

    const navigate = useNavigate();

    const {id} = useParams();
    useEffect(() => {
        console.log("Fetching product...",{id});
        const getProduct = async () => {
            await axios.get(`http://localhost:5000/product/${id}`)
            .then(response => {
                let res = response.data;
                console.log("Product fetched successfully:", response);
            setTitle(res.name);
            setPrice(res.price);
            setDescription(res.description);
            setCategory(res.category);
            setQuantity(res.quantity);
            setImage(res.image ? res.image : null);
            })
            
        };
        getProduct();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("name", name);
        formData.append("image", image);
        formData.append("price", price);
        formData.append("category", category);
        formData.append("description", description);
        formData.append("quantity", quantity);
        formData.append("createdAt", createdAt);
        formData.append("rating", rating);
        

        try {

            console.log(formData);
            const response = await axios.put(`http://localhost:5000/product/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }

            });
            navigate("/");
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return(
        <form onSubmit={handleSubmit} className="form-control">
            <div className="mb-3">
                <label htmlFor="name" className="form-control">Name</label>
                <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                value={name}
                onChange={(e) => setTitle(e.target.value)}
            />
            </div>
            <div className="mb-3">
                        <label htmlFor="price" className="label-form form-control">Price</label>
                    <input
                        type="number"
                        placeholder="Price"
                        className="form-control"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
            </div>
            
            <div className="mb-3">
                <label htmlFor="quantity" className="label-form form-control">Quantity</label>
                <input
                    type="number"
                    placeholder="Quantity"
                    className="form-control"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="label-form form-control">Category</label>

                <input
                    type="text"
                    placeholder="Category"
                    className="form-control"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />

            </div>
            <div className="mb-3">
                <label htmlFor="image" className="label-form form-control">Image</label>
                <input
                    type="file"
                    className="form-control"
                    onChange={(e) => setImage(e.target.files[0])}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="label-form form-control">Description</label>
                <textarea
                    placeholder="Description"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            
            
            <button type="submit">Edit Product</button>
        </form>
    );
}

export default EditProduct;