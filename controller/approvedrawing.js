const ApproveDdrawing = require("../modal/approvedrawingSchema")

module.exports.add_approve_drawing = async function (req, res) {
    console.log(req.body)
    const {
        ap_site_name,
        start_date,
        last_date,
        aprv_drawing_ckb1,
        aprv_drawing_ckb2,
        aprv_drawing_ckb3,
        aprv_drawing_ckb4,
        aprv_drawing_ckb5,
        aprv_drawing_ckb6,
        aprv_drawing_remark
    } = req.body;
    if (!ap_site_name) {
        return res.status(422).json({ erorr: "Please fill the field properly" });
    }
    try {
        const approveddrawing = new ApproveDdrawing({
            ap_site_name,
            start_date,
            last_date,
            aprv_drawing_ckb1,
            aprv_drawing_ckb2,
            aprv_drawing_ckb3,
            aprv_drawing_ckb4,
            aprv_drawing_ckb5,
            aprv_drawing_ckb6,
            aprv_drawing_remark
        });
        await approveddrawing.save();

        res.status(201).json({ message: "Add Survey Succefully" });

    } catch (err) {
        console.log(err);
    }
};

module.exports.get_approve_drawing = async function (req, res) {
    try {
        const approveddrawing = await ApproveDdrawing.find({}).sort({ "_id": -1 })
        res.send(approveddrawing)
    } catch (err) {
        res.status(400).send(err)
    }
};

module.exports.get_approve_drawing_id = async function (req, res) {
    try {
        const _id = req.params.id;
        const approveddrawing = await ApproveDdrawing.findById({ _id })
        res.send(approveddrawing)
    } catch (err) {
        res.status(500).send(err)
    }
};

module.exports.update_approve_drawing = async function (req, res) {
    try {
        const _id = req.params.id;
        const approveddrawing = await ApproveDdrawing.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.send(approveddrawing)
    } catch (e) {
        res.status(500).send(e)
    }
};

module.exports.delete_approve_drawing = async function (req, res) {
    try {
        const approveddrawing = await ApproveDdrawing.findByIdAndDelete(req.params.id);
        if (!eq.params.id) {
            return res.status(400).send();
        }
        res.send(approveddrawing)
    } catch (e) {
        res.status(500).send(e)
    }
};
