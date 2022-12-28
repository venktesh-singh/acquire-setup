const mongooose = require("mongoose")
const Schema = mongooose.Schema;

const orderSchema = new Schema({
    work_order_group: {
        type: String,
        required: true
    },
    assesment: {
        type: String,
        required: true
    },
    site_incharge: {
        type: String,
        required: true
    },
    site_name: {
        type: String,
        required: true
    },
    site_owner: {
        type: String,
        required: true
    },
    total_team_members: {
        type: String,
        required: true
    },
    safety_equipments: {
        type: Array,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    },
    drawing_deadline: {
        type: Date,
        required: true
    },
    aluminium_deadline: {
        type: Date,
        required: true
    },
    glassAcphplfixing_deadline: {
        type: Date,
        required: true
    },
    handover_deadline: {
        type: Date,
        required: true
    },
    site_survey_deadline: {
        type: Date,
        required: true
    },
    deadline_resone:{
        type:String,
    },
},
    {
        timestamps: true
    }
)

const Order = mongooose.model('Order', orderSchema)
module.exports = Order;