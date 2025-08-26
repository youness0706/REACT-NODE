import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AddProduct from "./components/AddProduct";
import MyProducts from "./components/MyProducts";
import EditProduct from "./pages/EditProduct";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
export default function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/my-products" element={<MyProducts />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};


