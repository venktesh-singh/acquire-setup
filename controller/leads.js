
const Leads = require("../modal/leadsSchema")

module.exports.add_lead = async function (req, res) {
    const { category, description, notes, remainder, name, contact_no, email, type_of_lead, deal_name } = req.body;
    try {

        const leads = new Leads({
            category,
            description,
            notes,
            remainder,
            contact_no,
            email,
            type_of_lead,
            name,
            deal_name,
        });
        await leads.save();
        res.status(201).json({ message: "Lead Add Success..." });
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

module.exports.get_leads = async function (req, res) {
    try {
        const leads = await Leads.find({})
        res.status(201).json({ message: " get leads success", lead: leads });
    } catch (error) {
        res.status(400).json({ error: error });
    }
}