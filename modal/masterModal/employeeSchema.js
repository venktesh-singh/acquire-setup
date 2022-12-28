const mongooose = require("mongoose")
const Schema = mongooose.Schema;

const employeeSchema = new Schema({
    id	: {
        type: Number,
    },
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    phone:{
        type:Number,
    },
    employee_type: {
        type: String,
        // required: true
    },
    designation: {
        type: String,
        // required: true
    },
    
},
    {
        timestamps: true
    }
)

const Employee = mongooose.model('Employee', employeeSchema)
module.exports = Employee;