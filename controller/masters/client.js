const Client = require("../../modal/masterModal/clientSchema")

module.exports.add_client = async function (req, res) {
    console.log(req.body)
    const { first_name,last_name,email,phone,group_name} = req.body;
    if (!first_name || !last_name|| !email || !phone) {
        return res.status(422).json({ erorr: "Please fill the field properly" });
    }
    try {   
        const client = new Client({first_name,last_name,email,phone,group_name});
        await client.save();

        res.status(201).json({ Message: "Add Client Succefully" });

    } catch (err) {
        console.log(err);
    }
};


module.exports.get_client = async function (req, res) {
    try {
        const client = await Client.find({}).sort( {"_id": -1 } )
        res.send(client)
    } catch (err) {
        res.status(400).send(err)
    }
}; 

module.exports.get_client_id = async function (req, res) {
    try {
        const _id = req.params.id;
        const client = await Client.findById({_id}) 
        res.send(client)
    } catch (err) {
        res.status(500).send(err)
    }
};    

module.exports.update_client = async function (req, res){
    try {
        const _id = req.params.id;
        const client = await Client.findByIdAndUpdate(_id, req.body, {
            new: true
        } )
        res.send(client)
    } catch (e) {
        res.status(500).send(e)
    }
};

module.exports.delete_client = async function (req, res){
    try {
        const client = await Client.findByIdAndDelete(req.params.id);
        if(!eq.params.id){
            return res.status(400).send();
        } 
        res.send(client)  
    } catch (e) {
        res.status(500).send(e)
    }
};
