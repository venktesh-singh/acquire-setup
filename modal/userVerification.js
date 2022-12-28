
const User = require("./userSchema");

module.exports.verifyEmail = async function (req, res, next) {
try {
    const user = await User.findOne({email:req.body.email})
    if(user.isVerified){
        next()
    }else{
        res.status(201).json({ message: "Please check your email to verify your account" });
        console.log("Please check your email to verify your account");
    }
} catch (error) {
    console.log(error);
}
}
