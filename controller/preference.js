
const Preference = require("../modal/preferenceSchema")

module.exports.add_preference = async function (req, res) {
    const { property_type, property_sub_type, area_looking_for, price_range, no_of_bedroom, no_of_bathroom,description, first_name,last_name,email,phone,looking_to_move,reason_to_move} = req.body;
    try {

        const preference = new Preference({
            property_type,
            property_sub_type,
            area_looking_for,
            price_range,
            no_of_bedroom,
            no_of_bathroom,
            description,
            first_name,
            last_name,
            email,
            phone,
            looking_to_move,
            reason_to_move
        });
        await preference.save();
        res.status(201).json({ message: "Preference Add Success..." });
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

module.exports.get_preferences = async function (req, res) {
    try {
        const preferences = await Preference.find({})
        res.status(201).json({ message: " Preference get success", preference: preferences });
    } catch (error) {
        res.status(400).json({ error: error });
    }
}