const express = require("express");
const env = require("dotenv").config();
const app = express();

const connectMongoDB = require("./config/connectionDB");
connectMongoDB();


app.use(express.json())

const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("Hello World");
});
const cors = require("cors");
app.use(cors());



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
}); 

app.use("/user", require("./Routes/user"));
app.use("/product",require("./Routes/product")); 


app.use("/uploads", express.static("public"));