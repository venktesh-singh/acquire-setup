const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    order_group: {
        type: String,
        required: true
    },
    payment_type: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        // required:true
    },
    date: {
        type: Date,
        // required: true
    },

}, {
    timestamps: true
})

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;