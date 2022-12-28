const Aluminium = require("../modal/aluminiumSchema")

module.exports.add_aluminium = async function (req, res) {
    console.log(req.body);
    // const   send_the_drawing= req.files.filename;
    // console.log("file name", send_the_drawing);
    const   aluminium_pic= req.file.filename;
    const {
        a_site_name,
        aluminium_deadline_sm,
        a_site_incharge,
        aluminium_ckb1,
        aluminium_ckb2,
        aluminium_ckb3,
        aluminium_ckb4,
        aluminium_ckb5,
        aluminium_ckb6,
        aluminium_ckb7,
        aluminium_ckb8,
        remark,
        take_all_photos,
        a_approve_status,
    } = req.body;
    if (!a_site_name) {
        return res.status(422).json({ erorr: "Please fill the field properly" });
    }
    try {
        const aluminium = new Aluminium({
            a_site_name,
            aluminium_deadline_sm,
            a_site_incharge,
            aluminium_ckb1,
            aluminium_ckb2,
            aluminium_ckb3,
            aluminium_ckb4,
            aluminium_ckb5,
            aluminium_ckb6,
            aluminium_ckb7,
            aluminium_ckb8,
            remark,
            take_all_photos,
            a_approve_status,
            aluminium_pic,
        });
        await aluminium.save();

        res.status(201).json({ message: "Add Approval drawing Succefully" });

    } catch (err) {
        console.log(err);
    }
};

module.exports.get_aluminium = async function (req, res) {
    try {
        const aluminium = await Aluminium.find({}).sort({ "_id": -1 })
        res.send(aluminium)
    } catch (err) {
        res.status(400).send(err)
    }
};

module.exports.get_aluminium_id = async function (req, res) {
    try {
        const _id = req.params.id;
        const aluminium = await Aluminium.findById({ _id })
        res.send(aluminium)
    } catch (err) {
        res.status(500).send(err)
    }
};

module.exports.get_aluminium_by_emp_name = async function (req, res) {
    try {
        const name = req.params.id;
        const aluminium = await Aluminium.find({ "a_site_incharge": name })
        res.send(aluminium)
    } catch (err) {
        res.status(500).send(err)
    }
};

module.exports.update_aluminium = async function (req, res) {
    try {
        const _id = req.params.id;
        const aluminium = await Aluminium.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.send(aluminium)
    } catch (e) {
        res.status(500).send(e)
    }
};


module.exports.delete_aluminium = async function (req, res) {
    try {
        const aluminium = await Aluminium.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
            return res.status(400).send();
        }
        res.send(aluminium)
    } catch (e) {
        res.status(500).send(e)
    }
};
