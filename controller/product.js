const Product = require("../modal/productSchema")

module.exports.add_product = async function (req, res) {
    console.log("body",req.body)
    // console.log("file",req.files.map((a)=>a.filename))
//  const photo = req.files.map((a)=>a.filename);
const   product_pic= req?.file?.filename;
    const { name,brand,color,size,price,grade,remark,delivery_time,wastage_percentage,insurance} = req.body;
    if (!name || !brand|| !color || !size) {
        return res.status(422).json({ erorr: "Please fill the field properly" });
    }
     try {   
        const product = new Product({name,brand,color,size,price,product_pic,grade,delivery_time,wastage_percentage,insurance,remark});
        await product.save();

        res.status(201).json({ message: "Add product Succefully" });

    } catch (err) {
        console.log(err);
    }
};

module.exports.get_product = async function (req, res) {
    try {
        const product = await Product.find({}).sort( {"_id": -1 } )
        res.send(product)
    } catch (err) {
        res.status(400).send(err)
    }
};  

module.exports.delete_product = async function (req, res){
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if(!eq.params.id){
            return res.status(400).send();
        } 
        res.send(product)  
    } catch (e) {
        res.status(500).send(e)
    }
};

module.exports.get_product_id = async function (req, res) {
    try {
        const _id = req.params.id;
        const product = await Product.findById({_id}) 
        res.send(product)
    } catch (err) {
        res.status(500).send(err)
    }
};    

module.exports.update_product = async function (req, res){
    try {
        const _id = req.params.id;
        const product = await Product.findByIdAndUpdate(_id, req.body, {
            new: true
        } )
        res.send(product)
    } catch (e) {
        res.status(500).send(e)
    }
};

