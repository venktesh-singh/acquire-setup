
const Quotation = require("../../modal/masterModal/quotation")

module.exports.add_quotation = async function (req, res) {

    const { customer_name, quotation_no, order_group, quotation_date,sales_person} = req.body;
    try {
        const employee = new Quotation({
            customer_name, quotation_no, order_group, quotation_date,sales_person
        });
        await employee.save();
        res.status(201).send({ message: "Quotation Added Successfully.", status: 201 });
    } catch (err) {
        console.log(err);
    }
};

module.exports.get_quotation = async function (req, res) {
    try {
        const employees = await Quotation.find({}).sort( {"_id": -1 } )
        res.send( employees );
    } catch (error) {
        res.status(400).json({ error: error });
    }
}


module.exports.get_quotation_id = async function (req, res) {
    try {
        const _id = req.params.id;
        const employee = await Quotation.findById({ _id })
        res.send(employee)
    } catch (err) {
        res.status(500).send(err)
    }
};

module.exports.update_quotation = async function (req, res) {
    try {
        const _id = req.params.id;
        const employee = await Quotation.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.send(employee)
    } catch (e) {
        res.status(500).send(e)
    }
};

module.exports.delete_quotation = async function (req, res) {
    try {
        const employee = await Quotation.findByIdAndDelete(req.params.id);
        if (!eq.params.id) {
            return res.status(400).send();
        }
        res.send({ message: "Employee Deleted Success.", employee });

    } catch (e) {
        res.status(500).send({ message: "error", e })
    }
};
