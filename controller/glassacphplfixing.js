const Glassacphplfixing = require("../modal/glassacphplfixingSchema")

module.exports.add_glassacphplfixing = async function (req, res) {
    console.log(req.body)
    const   glassacp_pic= req.file.filename;
    const {
        g_sitename,
        g_siteincharge,
        glassacphplfixing_deadline_sm,
        glassacphplfixing_ckb1,
        glassacphplfixing_ckb2,
        glassacphplfixing_ckb3,
        glassacphplfixing_ckb4,
        glassacphplfixing_ckb5,
        glassacphplfixing_ckb6,
        glassacphplfixing_ckb7,
        add_glassacphplfixing_remark,
        g_approve_status,
    } = req.body;
    try {
        const glassacphplfixing = new Glassacphplfixing({  
            g_sitename,
            g_siteincharge,
            glassacphplfixing_deadline_sm,          
            glassacphplfixing_ckb1,
            glassacphplfixing_ckb2,
            glassacphplfixing_ckb3,
            glassacphplfixing_ckb4,
            glassacphplfixing_ckb5,
            glassacphplfixing_ckb6,
            glassacphplfixing_ckb7,
            add_glassacphplfixing_remark,
            g_approve_status,
            glassacp_pic,
        });
        await glassacphplfixing.save();
        res.status(201).json({ message: "Glassacphplfixing Added Successfully." });
    } catch (err) {
        console.log(err);
    }
};

module.exports.get_glassacphplfixing = async function (req, res) {
    try {
        const glassacphplfixing = await Glassacphplfixing.find({}).sort({ "_id": -1 })
        res.send(glassacphplfixing)
    } catch (err) {
        res.status(400).send(err)
    }
};


module.exports.get_glassacphplfixing_id = async function (req, res) {
    try {
        const _id = req.params.id;
        const glassacphplfixing = await Glassacphplfixing.findById({ _id })
        res.send(glassacphplfixing)
    } catch (err) {
        res.status(500).send(err)
    }
};

module.exports.update_glassacphplfixing = async function (req, res) {
    try {
        const _id = req.params.id;
        const glassacphplfixing = await Glassacphplfixing.findByIdAndUpdate(_id,req.
        body, {
            new: true
        })
        res.send(glassacphplfixing)
    } catch (e) {
        res.status(500).send(e)
    }
};

module.exports.get_glassacphplfixing_by_emp_name = async function (req, res) {
    try {
        const name = req.params.id;
        const glassacphplfixing = await Glassacphplfixing.find({"g_siteincharge":name}) 
        res.send(glassacphplfixing)
    } catch (err) {
        res.status(500).send(err)
    }
};

module.exports.delete_glassacphplfixing = async function (req, res) {
    try {
        const glassacphplfixing = await Glassacphplfixing.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
            return res.status(400).send();
        }
        res.send(glassacphplfixing)
    } catch (e) {
        res.status(500).send(e)
    }
};