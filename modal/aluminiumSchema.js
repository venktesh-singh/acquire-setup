const mongooose = require("mongoose")
const Schema = mongooose.Schema;

const aluminiumSchema = new Schema({
    a_site_name: {
        type: String,
    },
    a_site_incharge: {
        type: String,
    },
    aluminium_deadline_sm: {
        type: Date,
    },
    aluminium_ckb1: {
        type: Boolean,
    },
    aluminium_ckb2: {
        type: Boolean,
    },
    aluminium_ckb3: {
        type: Boolean,
    },
    aluminium_ckb4: {
        type: Boolean,
    },
    aluminium_ckb5: {
        type: Boolean,
    },
    aluminium_ckb6: {
        type: Boolean,
    },
    aluminium_ckb7: {
        type: Boolean,
    },
    aluminium_ckb8: {
        type: Boolean,
    },
    remark: {
        type: String,
    },
    a_approve_status: {
        type: Boolean,
    },
    aluminium_pic: {
        type: String,
    }
},
    {
        timestamps: true
    }
)

const Aluminium = mongooose.model('Aluminium', aluminiumSchema)
module.exports = Aluminium;