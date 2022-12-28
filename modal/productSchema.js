const mongooose = require("mongoose")
const Schema = mongooose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    brand:{
        type:String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    price: {
        type: String,
        // required: true
    },
    product_pic: {
        type: String,
        // required: true
    },
    delivery_time: {
        type: String,
        // required: true
    },
    wastage_percentage: {
        type: String,
        // required: true
    },
    grade: {
        type: String,
        // required: true
    },
    insurance: {
        type: String,
        // required: true
    },
    remark: {
        type: String,
        // required: true
    },
},
    {
        timestamps: true
    }
)

const Product = mongooose.model('Product', productSchema)
module.exports = Product;