const express = require('express');
const Product = require("../models/ProductSchema.js");
const multer = require('multer');
const router = express.Router();
const VerifyToken = require("../middleware/auth.js");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

router.get('/', async (req,res) => {
    try{
        const product = await Product.find();
        res.json(product);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
})

router.get('/:id', async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id)
    res.status(200).json(product);
}
)


router.put('/:id',upload.single("image"),async (req,res)=> {
    const {id} = req.params;
    const {name, price, image, description, category,quantity} = req.body;
    if (!name || !price || !description || !category || !quantity) {
        return res.status(400).json({error: "All fields are required"});
    }
    
    try{
        
        
        const updatedProduct = await Product.findByIdAndUpdate(id, {name, price, image: req.file?.filename, description, category,quantity}, {new: true,runValidators: true});
        return res.status(200).json(updatedProduct);
        
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
})

router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        const deletedProduct = await Product.findByIdAndDelete(id);
        res.status(200).json(deletedProduct);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
})

router.post('/', upload.single("image"),VerifyToken, async (req, res) => {
    const {name, price, image, description, category,quantity} = req.body;
    if (!name || !price || !description || !category || !quantity) {
        const missingFields = [];
        if (!name) missingFields.push("name");
        if (!price) missingFields.push("price");
        if (!description) missingFields.push("description");
        if (!category) missingFields.push("category");
        if (!quantity) missingFields.push("quantity");
        return res.status(400).json({error: `All fields are required: ${missingFields.join(", ")}`});
    }
    
    try{
        const newProduct = await Product.create({
            name,
            price,
            image: req.file?.filename,
            description,
            category,
            quantity,
            user: req.user.id
        });
        return res.status(201).json(newProduct);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
})



module.exports = router ;