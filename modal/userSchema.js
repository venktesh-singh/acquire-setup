const mongooose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const userSchema = new mongooose.Schema({
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
    emailToken: {
        type: String
    },
    primary_role: {
        type: String
    },
    phone: {
        type: Number,
        // required:true
    },
    user_type: {
        type: String,
        // default: "realtor",
        // enum: ["realtor", "individual", "business"]
    },
    user_pic: {
        type: String,
    },
    dob: {
        type: String,
    },
    address: {
        type: String,
    },
    designation:{
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    isVerified:
    {
        type: Boolean
    },

}, {
    timestamps: true
})

// for the password hashing 
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        // this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
});

userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (err) {
        console.log(err);

    }
}
const User = mongooose.model('USER', userSchema);

module.exports = User;