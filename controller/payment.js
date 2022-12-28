
const Payment = require("../modal/payment")

module.exports.add_payment = async function (req, res) {

    const { order_group, payment_type, amount, date } = req.body;
    try {
        const payment = new Payment({
            order_group,
            payment_type,
            amount,
            date
        });
        await payment.save();
        res.status(201).send({ message: "Payment Added Successfully.", status: 201 });
    } catch (err) {
        console.log(err);

    }
};

// module.exports.get_payments = async function (req, res) {
//     try {
//         const payments = await Payment.find({})
//         res.status(201).json({ message: " Get Payment success", Payment: payments });
//     } catch (error) {
//         res.status(400).json({ error: error });
//     }
// }
module.exports.get_payments = async function (req, res) {
       Payment.aggregate([

            { $lookup:
               {
                 from: 'orders',
                 localField: 'order_group',
                 foreignField: 'work_order_group',
                 as: 'orderdetails'
               }
             }
            ]).then((result)=>res.send(result)).catch((err)=>res.send(err.message))
}


module.exports.get_payment_id = async function (req, res) {
    try {
        const _id = req.params.id;
        const payment = await Payment.findById({ _id })
        res.send(payment)
    } catch (err) {
        res.status(500).send(err)
    }
};

module.exports.update_payment = async function (req, res) {
    try {
        const _id = req.params.id;
        const payment = await Payment.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.send(payment)
    } catch (e) {
        res.status(500).send(e)
    }
};

module.exports.delete_payment = async function (req, res) {
    try {
        const payment = await Payment.findByIdAndDelete(req.params.id);
        if (!eq.params.id) {
            return res.status(400).send();
        }
        res.send({ message: "Payment Deleted Success.", payment });

    } catch (e) {
        res.status(500).send({ message: "error", e })
    }
};