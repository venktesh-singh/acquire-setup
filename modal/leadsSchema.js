const mongooose = require("mongoose")
const Schema = mongooose.Schema;

const leadsSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: true
    },
    remainder: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    contact_no: {
        type: Number,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    type_of_lead: {
        type: String,
        required: true
    },
    deal_name: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)

const Leads = mongooose.model('Leads', leadsSchema)
module.exports = Leads;