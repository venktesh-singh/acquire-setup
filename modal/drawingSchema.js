const mongooose = require("mongoose")
const Schema = mongooose.Schema;

const drawingSchema = new Schema({
    d_sitename:{
        type: String,
    },
    d_siteincharge:{
        type: String,
    },
    drawingmt:{
        type: Array,
    },
    // material: {
    //     type: String,
    // },
    // m_size: {
    //     type: String,
    // },
    // m_thickness: {
    //     type: String,
    // },
    drawing_ckb: {
        type: Array,    
    },
    drawing_re_estimate: {
        type: String,
    },
    // m_waste: {
    //     type: String,
    // },
    drawing_remark: {
        type: String,
    },
    approve_status: {
        type: Boolean,
    },
    drawing_pic: {
        type: String,
    },
    drawing_deadline_sm:{
        type: Date,
    }
},
    {
        timestamps: true
    }
)

const Drawing = mongooose.model('Drawing', drawingSchema)
module.exports = Drawing;