const mongooose = require("mongoose")
const Schema = mongooose.Schema;

const approveDrawing = new Schema({
    ap_site_name	: {
        type: String,
    },
    start_date:{
        type: String,
    },
    last_date: {
        type: String,
    },
    aprv_drawing_ckb1: {
        type: Boolean,
    },
    aprv_drawing_ckb2: {
        type: Boolean,
    },
    aprv_drawing_ckb3: {
        type: Boolean,
    },
    aprv_drawing_ckb4: {
        type: Boolean,
    },
    aprv_drawing_ckb5: {
        type: Boolean,
    },
    aprv_drawing_ckb6: {
        type: Boolean,
    },
    aprv_drawing_remark:{
        type: String,
    }
    
},
    {
        timestamps: true
    }
)

const ApproveDrawing = mongooose.model('ApproveDrawing', approveDrawing)
module.exports = ApproveDrawing;