const Handover = require("../modal/handoverSchema")

module.exports.add_handover = async function (req, res) {
    const   handover_pic= req.file.filename;
    const {
        h_sitename,
        h_siteincharge,
        handover_deadline_sm,
        add_handover_commnet,
        handover_ckb1,
        handover_ckb2,
        handover_ckb3,
        handover_ckb4,
        handover_ckb5,
        handover_ckb6,
        handover_ckb7,
        handover_ckb8,
        handover_ckb9,
        h_approve_status,
        h_path,
        site_survey_images
    } = req.body;
    try {
        const handover = new Handover({
            h_sitename,
            h_siteincharge,
            handover_deadline_sm,
            add_handover_commnet,
            handover_ckb1,
            handover_ckb2,
            handover_ckb3,
            handover_ckb4,
            handover_ckb5,
            handover_ckb6,
            handover_ckb7,
            handover_ckb8,
            handover_ckb9,
            handover_pic,
            h_approve_status,
            h_path,
            site_survey_images,
        });
        await handover.save();
        res.status(201).json({ message: "Handover Added Successfully." });
    } catch (err) {
        console.log(err);
    }
};

module.exports.update_handover = async function (req, res) {
    try {
        const _id = req.params.id;
        const handover = await Handover.findByIdAndUpdate(_id, req.
            body, {
            new: true
        })
        res.send(handover)
    } catch (e) {
        res.status(500).send(e)
    }
};

module.exports.get_handover = async function (req, res) {
    try {
        const handover = await Handover.find({}).sort({ "_id": -1 })
        res.send(handover)
    } catch (err) {
        res.status(400).send(err)
    }
};

module.exports.get_handover_by_emp_name = async function (req, res) {
    try {
        const name = req.params.id;
        const handover = await Handover.find({"h_siteincharge":name}) 
        res.send(handover)
    } catch (err) {
        res.status(500).send(err)
    }
};


module.exports.get_handover_id = async function (req, res) {
    try {
        const _id = req.params.id;
        const handover = await Handover.findById({ _id })
        res.send(handover)
    } catch (err) {
        res.status(500).send(err)
    }
};



module.exports.delete_handover = async function (req, res) {
    try {
        const handover = await Handover.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
            return res.status(400).send();
        }
        res.send(handover)
    } catch (e) {
        res.status(500).send(e)
    }
};