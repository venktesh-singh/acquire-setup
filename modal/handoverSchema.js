const mongooose = require("mongoose")
const Schema = mongooose.Schema;

const handoverSchema = new Schema({
    h_sitename:{
        type: String,
    },
    h_siteincharge:{
        type: String,
    },
    handover_deadline_sm: {
        type: Date,
    },
    handover_imges: {
        data: Buffer,
        type: String,
    },
    add_handover_commnet: {
        type: String,
    },
    handover_ckb1: {
        type: Boolean,
    },
    handover_ckb2: {
        type: Boolean,
    },
    handover_ckb3: {
        type: Boolean,
    },
    handover_ckb4: {
        type: Boolean,
    },
    handover_ckb5: {
        type: Boolean,
    },
    handover_ckb6: {
        type: Boolean,
    },
    handover_ckb7: {
        type: Boolean,
    },
    handover_ckb8: {
        type: Boolean,
    },
    handover_ckb9: {
        type: Boolean,
    },
    h_approve_status: {
        type: Boolean,
    },
    handover_pic: {
        type: String,
    },
    site_survey_images:{
        type: String,
    },
    h_path:{
        type: String,
    }


},
    {
        timestamps: true
    }
)

const Handover = mongooose.model('Handover', handoverSchema);
module.exports = Handover;