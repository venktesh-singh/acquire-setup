const Glass = require("../modal/glassSchema")

module.exports.add_glass = async function (req, res) {
    console.log(req.body);
    const   upload_photos= req.files.filename;
    console.log("file name", upload_photos);
    const { glass_id,aluminium_id,check_all_glass,check_colour,check_thickness,ensure_other, check_received_wastage,check_fixing_silicone,remove_glass} = req.body;
    if (  !check_all_glass || !check_colour) {
        return res.status(422).json({ erorr: "Please fill the field properly" });
    }
     try {   
        const glass = new Glass({glass_id,aluminium_id,check_all_glass,check_colour,check_thickness,ensure_other, check_received_wastage,check_fixing_silicone,remove_glass});
        await glass.save();

        res.status(201).json({ message: "Add Approval drawing Succefully" });

    } catch (err) {
        console.log(err);
    }
};

module.exports.get_glass = async function (req, res) {
    try {
        const glass = await Glass.find({}).sort( {"_id": -1 } )
        res.send(glass)
    } catch (err) {
        res.status(400).send(err)
    }
};  

module.exports.get_glass_id = async function (req, res) {
    try {
        const _id = req.params.id;
        const glass = await Glass.findById({_id}) 
        res.send(glass)
    } catch (err) {
        res.status(500).send(err)
    }
};    

module.exports.update_glass = async function (req, res){
    try {
        const _id = req.params.id;
        const glass = await Glass.findByIdAndUpdate(_id, req.body, {
            new: true
        } )
        res.send(glass)
    } catch (e) {
        res.status(500).send(e)
    }
};

module.exports.delete_glass = async function (req, res){
    try {
        const glass = await Glass.findByIdAndDelete(req.params.id);
        if(!eq.params.id){
            return res.status(400).send();
        } 
        res.send(glass)  
    } catch (e) {
        res.status(500).send(e)
    }
};
