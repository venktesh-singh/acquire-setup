const mongooose = require("mongoose")
const Schema = mongooose.Schema;

const preferenceSchema = new Schema({
    property_type: {
        type: String,
        required: true
    },
    property_sub_type: {
        type: String,
        required: true
    },
    area_looking_for: {
        type: String,
        required: true
    },
    price_range: {
        type: String,
        required: true
    },
    no_of_bedroom: {
        type: Number,
        required: true
    },
    no_of_bathroom: {
        type: Number,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    looking_to_move: {
        type: String,
        required: true
    },
    reason_to_move: {
        type: String,
        required: true
    },
},
    {
        timestamps: true
    }
)

const Preference = mongooose.model('Preference', preferenceSchema)
module.exports = Preference;