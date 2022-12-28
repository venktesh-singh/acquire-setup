
const User = require("../modal/userSchema")
const bcrypt = require('bcrypt');

module.exports.login = async function (req, res) {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Please fill the tha data" });
        }
        // const userLogin = await User.findOne({ email: email, work: work });
        const userLogin = await User.findOne({ email: email });
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            if (!isMatch) {
                res.status(400).json({ error: "Invalid Credentials " });
            } else {
                res.status(200).json({ message: "login successes", user: userLogin });
            }
        } else {
            res.status(400).json({ error: "Invalid Credentials" });
        }
    } catch (err) {
        console.log(err);
    }
};


module.exports.getUsers = async function (req, res) {
    try {
        const users = await User.find({}).sort({ "_id": -1 })
        res.status(201).json({ message: " get user sucess", user: users });
    } catch (error) {
        res.status(400).json({ error: error });
    }
}


module.exports.adduser = async function (req, res) {
    const { first_name, last_name, email, password, phone, user_type, user_pic, dob, address, designation } = req.body;

    if (!first_name || !last_name || !email || !password) {
        return res.status(422).json({ erorr: "Please filled the fild properly" });

    } try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).send({ erorr: "Email already Exist", status: 422 });
        } else {
            const user = new User({
                first_name,
                last_name,
                user_type,
                email,
                phone,
                password,
                user_pic,
                dob, 
                address, 
                designation
            });
            await user.save();

            res.status(201).send({ message: "User Added Successfully.", status: 201 });
        }
    } catch (err) {
        console.log(err);

    }
};


module.exports.get_user_id = async function (req, res) {
    try {
        const _id = req.params.id;
        const user = await User.findById({ _id })
        res.send(user)
    } catch (err) {
        res.status(500).send(err)
    }
};

module.exports.update_user = async function (req, res) {
    try {
        const _id = req.params.id;
        const user = await User.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
};

module.exports.delete_user = async function (req, res) {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
            return res.status(400).send();
        } else {
            return res.send({ status: (201), message: "User Deleted Success.", user });
        }
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
};
