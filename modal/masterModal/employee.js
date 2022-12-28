const mongooose = require('mongoose');
const Schema = mongooose.Schema;

const employeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    employee_type: {
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
        required:true
    },
    designation: {
        type: String,
        required: true
    },

}, {
    timestamps: true
})

const Employee = mongooose.model('Employee', employeeSchema);

module.exports = Employee;