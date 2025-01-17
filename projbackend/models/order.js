const mongoose = require('mongoose');
const{ObjectId} = mongoose.Schema;

const ProductCartSchema = new mongoose.Schema({
    product:{
        type: ObjectId,
        ref: "Product"
    },
    name: String,
    count: Number,
    price: Number
});
const ProductCart = mongoose.model("ProductCart", ProductCartSchema);

const OrderSchema = new mongoose.Schema({
    products:[ProductCartSchema],
    transaction_id:{},
    amount:{
        type:String
    },
    address: String,
    status:{
        type: String,
        default: "Received",
        enum:["Cancelled", "Delivered", "Shipped", "Processing", "Received"]
    },
    updated: Date,
    user:{
        type: ObjectId,
        ref: "User"
    }
},
{timestamps:true});

//module.exports = mongoose.model;
const Order = mongoose.model("Order", OrderSchema);
module.exports = {Order, ProductCart};