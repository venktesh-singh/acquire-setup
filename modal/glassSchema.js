const mongooose = require("mongoose")
const Schema = mongooose.Schema;

const glassSchema = new Schema({
    glass_id	: {
        type: Number,
        required: true
    },
    aluminium_id	: {
        type: Number,
         required: true
    },  
    check_all_glass	: {
        type: String,
        //  required: true
    },
    check_colour	: {
        type: String,
        // required: true
    },
    check_thickness	: {
        type: String,
        // required: true
    },
    ensure_other	: {
        type: String,
        // required: true
    },
    check_received_wastage	: {
        type: String,
        // required: true
    },
    check_fixing_silicone	: {
        type: String,
        // required: true
    },
    check_fixing_silicone	: {
        type: String,
        // required: true
    },
    remove_glass	: {
        type: String,
        // required: true
    },
},
    {
        timestamps: true
    }
)

const Glass = mongooose.model('Glass', glassSchema)
module.exports = Glass;