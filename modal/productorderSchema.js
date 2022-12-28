const mongooose = require("mongoose")
const Schema = mongooose.Schema;

const productorderSchema = new Schema({
    id	: {
        type: Number,
    },
    product_id:{
        type:Number,
    },
    price: {
        type: Number,
        required: true
    },
    safety_equipments: {
        type: String,
        required: true
    },
    
},
    {
        timestamps: true
    }
)

const Productorder = mongooose.model('Productorder', productorderSchema)
module.exports = Productorder;