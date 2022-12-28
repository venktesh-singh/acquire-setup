const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const quotationSchema = new Schema({
  customer_name: {
        type: String,
    },
    quotation_no:{
        type:Number,
    },
    order_group: {
        type: String,
        // required: true
    },
    quotation_date: {
       invoice_date:{ type: Date, default: Date.now},
       due_date:{type:Date}
    },
    sales_person: {
        type: String,
        // required: true
    },
},
    {
        timestamps: true
    }
)

const Quotation = mongoose.model('Quotation', quotationSchema)
module.exports = Quotation;