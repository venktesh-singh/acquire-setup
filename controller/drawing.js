const Drawing = require("../modal/drawingSchema")
const Order = require("../modal/orderSchema")

module.exports.add_drawing = async function (req, res) {
    const {
        d_sitename,
        d_siteincharge,
        drawing_deadline_sm,
        drawingmt,
        drawing_pic,
        drawing_ckb,
        drawing_re_estimate,
        drawing_remark,
        approve_status } = req.body;
    if (!d_sitename) {
        return res.status(422).json({ erorr: "Please fill the field properly" });
    }
    try {
        const drawing = new Drawing({
            d_sitename,
            d_siteincharge,
            drawing_deadline_sm,
            drawingmt,
            drawing_pic,
            drawing_ckb,
            drawing_re_estimate,
            drawing_remark,
            approve_status
        });
        await drawing.save();

        res.status(201).json({ message: "Add Drawing Succefully" });

    } catch (err) {
        console.log(err);
    }
};

module.exports.get_drawing = async function (req, res) {
    try {
        const drawing = await Drawing.find({}).sort({ "_id": -1 })
        res.send(drawing)
    } catch (err) {
        res.status(400).send(err)
    }
};

module.exports.get_drawing_by_emp_name = async function (req, res) {
    try {
        const name = req.params.id;
        const drawing = await Drawing.find({ "d_siteincharge": name })
        res.send(drawing)
    } catch (err) {
        res.status(500).send(err)
    }
};


// module.exports.get_deadline = async function (req, res) {
//     Drawing.aggregate([{
//         $lookup: {
//             from: 'Order',
//             localField: 'drawing_deadline_sm',
//             foreignField: 'drawing_deadline',
//             as: 'output'
//         }
//     }]).then(result => res.json(result)).catch(err => console.log(err))
// };


module.exports.get_drawing_id = async function (req, res) {
    try {
        const _id = req.params.id;
        const drawing = await Drawing.findById({ _id })
        res.send(drawing)
    } catch (err) {
        res.status(500).send(err)
    }
};

module.exports.update_drawing = async function (req, res) {
    try {
        const _id = req.params.id;
        const drawing = await Drawing.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.send(drawing)
    } catch (e) {
        res.status(500).send(e)
    }
};

module.exports.delete_drawing = async function (req, res) {
    try {
        const drawing = await Drawing.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
            return res.status(400).send();
        }
        res.send(drawing)
    } catch (e) {
        res.status(500).send(e)
    }
};

module.exports.drawing_progress_bar_data = async function (req, res) {
    try {
        const _id = req.params.id; 
        const drawing = await Drawing.findById( { _id }) 
        const data = drawing.drawing_ckb;
        let count = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i].status === true) {
                count++;
                console.log(data[i]);
            }
        }
        let totalNumberOfStatus = data.length;
        const percetage = (count/totalNumberOfStatus)*100;
        res.send((200),(drawing,percetage))
    } catch (err) {
        res.status(400).send(err)
    }
};
  