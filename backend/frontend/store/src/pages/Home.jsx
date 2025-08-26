import image from "../assets/images (1).jpeg";
import "../App.css";
import AllProducts from "../components/AllProducts";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Model from "../components/Model";
function Home(){
    const [isOpen, setIsOpen] = useState(false);
    const addpro = (event) => {
        event.preventDefault();
        localStorage.getItem('token') ? navigate("/add-product") : setIsOpen(true);
    }
    const navigate = useNavigate();
    const closeDialog = () => {
        setIsOpen(false);
    }
    return (
        <div>
        <section className="home">
            <div className="left">
                <h1>{localStorage.getItem('user') ? `Hello ${JSON.parse(localStorage.getItem('user')).firstname}! Now you can`  : ''} Share Your Favorite Products with the World</h1>
                <p>Discover and share the best products with your friends and family.
                    Also you can sell your products here. Get started by adding your favorite items to the list and let others know about them!
                </p>
                <button className="add-product-button" onClick={addpro}>Add Product</button>
            </div>
            <div className="right">
                <img src={"https://fastarz.com/wp-content/uploads/2024/09/Online-shopping-in-turkey-with-Fastarz.jpg"} alt="Product Showcase" />
                
            </div>
            
        </section>
         



        <div className="waves">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,256L8.9,256C17.8,256,36,256,53,261.3C71.1,267,89,277,107,250.7C124.4,224,142,160,160,149.3C177.8,139,196,181,213,202.7C231.1,224,249,224,267,229.3C284.4,235,302,245,320,218.7C337.8,192,356,128,373,90.7C391.1,53,409,43,427,53.3C444.4,64,462,96,480,144C497.8,192,516,256,533,256C551.1,256,569,192,587,154.7C604.4,117,622,107,640,96C657.8,85,676,75,693,106.7C711.1,139,729,213,747,234.7C764.4,256,782,224,800,202.7C817.8,181,836,171,853,160C871.1,149,889,139,907,144C924.4,149,942,171,960,165.3C977.8,160,996,128,1013,128C1031.1,128,1049,160,1067,170.7C1084.4,181,1102,171,1120,165.3C1137.8,160,1156,160,1173,176C1191.1,192,1209,224,1227,208C1244.4,192,1262,128,1280,133.3C1297.8,139,1316,213,1333,245.3C1351.1,277,1369,267,1387,256C1404.4,245,1422,235,1431,229.3L1440,224L1440,320L1431.1,320C1422.2,320,1404,320,1387,320C1368.9,320,1351,320,1333,320C1315.6,320,1298,320,1280,320C1262.2,320,1244,320,1227,320C1208.9,320,1191,320,1173,320C1155.6,320,1138,320,1120,320C1102.2,320,1084,320,1067,320C1048.9,320,1031,320,1013,320C995.6,320,978,320,960,320C942.2,320,924,320,907,320C888.9,320,871,320,853,320C835.6,320,818,320,800,320C782.2,320,764,320,747,320C728.9,320,711,320,693,320C675.6,320,658,320,640,320C622.2,320,604,320,587,320C568.9,320,551,320,533,320C515.6,320,498,320,480,320C462.2,320,444,320,427,320C408.9,320,391,320,373,320C355.6,320,338,320,320,320C302.2,320,284,320,267,320C248.9,320,231,320,213,320C195.6,320,178,320,160,320C142.2,320,124,320,107,320C88.9,320,71,320,53,320C35.6,320,18,320,9,320L0,320Z"></path></svg>
        </div>
        <AllProducts />
            {isOpen && <Model closeDialog={closeDialog} />}

        </div>
        
    );
}

export default Home;
