const mongooose = require('mongoose');

const clientSchema = new mongooose.Schema({
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
        required: true,
        index: {
            unique: true
        },
        match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    phone: {
        type: Number,
        // required:true
    },
    group_name: {
        type: String,
        required: true
    },

}, {
    timestamps: true
})

const Client = mongooose.model('Client', clientSchema);

module.exports = Client;