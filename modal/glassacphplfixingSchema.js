const mongooose = require("mongoose")
const Schema = mongooose.Schema;

const glassacphplfixingSchema = new Schema({
    
    g_sitename: {
        type: String,
    },
    g_siteincharge: {
        type: String,
    },
    glassacphplfixing_deadline_sm: {
        type: Date,
    },
    glassacphplfixing_ckb1: {
        type: Boolean,
    },
    glassacphplfixing_ckb2: {
        type: Boolean,
    },
    glassacphplfixing_ckb3: {
        type: Boolean,
    },
    glassacphplfixing_ckb4: {
        type: Boolean,
    },
    glassacphplfixing_ckb5: {
        type: Boolean,
    },
    glassacphplfixing_ckb6: {
        type: Boolean,
    },
    glassacphplfixing_ckb7: {
        type: Boolean,
    },
    add_glassacphplfixing_remark: {
        type: String,
    },
    glassacp_pic: {
        type: String,
    },
    g_approve_status:{
        type: Boolean,
    }

},
    {
        timestamps: true
    }
)

const Glassacphplfixing = mongooose.model('Glassacphplfixing', glassacphplfixingSchema);
module.exports = Glassacphplfixing;