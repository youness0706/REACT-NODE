const mongodb = require("mongoose");

const ProductSchema = new mongodb.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    quantity: {
        type: Number,
        default: 0
    },
    rating: {
        type: Number,
        default: 0
    },
    user: {
        type: mongodb.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongodb.model('Product', ProductSchema);

