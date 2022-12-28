const Order = require("../modal/orderSchema")

module.exports.add_order = async function (req, res) {
    console.log(req.body)
    const { work_order_group, assesment, site_incharge, total_team_members, safety_equipments, site_name, site_owner, deadline, drawing_deadline, aluminium_deadline, glassAcphplfixing_deadline, handover_deadline, site_survey_deadline,deadline_resone } = req.body;
    if (!work_order_group || !assesment || !site_incharge || !total_team_members) {
        return res.status(422).json({ erorr: "Please fill the field properly" });
    }
    try {
        const order = new Order({ work_order_group, assesment, site_incharge, total_team_members, safety_equipments, site_name, site_owner, deadline, drawing_deadline, aluminium_deadline, glassAcphplfixing_deadline, handover_deadline, site_survey_deadline, deadline_resone });
        await order.save();

        res.status(201).json({ message: "Add Order Succefully" });

    } catch (err) {
        console.log(err);
    }
};

module.exports.get_order = async function (req, res) {
    try {
        const order = await Order.find({}).sort({ "_id": -1 })
        res.send(order)
    } catch (err) {
        res.status(400).send(err)
    }
};

module.exports.delete_order = async function (req, res) {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
            return res.status(400).send();
        }
        res.send(order)
    } catch (e) {
        res.status(500).send(e)
    }
};

module.exports.get_order_by_emp_name = async function (req, res) {
    try {
        const name = req.params.id;
        const order = await Order.find({ "site_incharge": name })
        res.send(order)
    } catch (err) {
        res.status(500).send(err)
    }
};

module.exports.get_order_by_group_name = async function (req, res) {
    try {
        const ordername = req.params.id;
        const order = await Order.find({ "_id": ordername })
        res.send(order)
    } catch (err) {
        res.status(500).send(err)
    }
};

module.exports.update_order = async function (req, res) {
    try {
        const _id = req.params.id;
        const order = await Order.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.send(order)
    } catch (e) {
        res.status(500).send(e)
    }
};



