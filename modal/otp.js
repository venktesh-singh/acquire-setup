const mongooose= require("mongoose")
const Schema= mongooose.Schema;

const OtpSchema = new Schema({
    email:String,
    code: String,
    expireIn:Number,
},
{
    timestamps:true
}
)

const Otp =mongooose.model('Otp',OtpSchema)
module.exports=Otp;