const Productorder = require("../modal/productorderSchema")
const Product = require("../modal/productSchema")

module.exports.add_productorder = async function (req, res) {
    console.log(req.body)
    const { id,product_id,price,safety_equipments} = req.body;
    if (!id || !price ) {
        return res.status(422).json({ Erorr: "Please fill the field properly" });
    }
     try {   
        const productorder = new Productorder({id,product_id,price,safety_equipments});
        await productorder.save();

        res.status(201).json({ Message: "Add Product Order Succefully" });

    } catch (err) {
        console.log(err);
    }
};


module.exports.get_productorder = async function (req, res) {
    try {
        const productorder = await Productorder.find({}).sort( {"_id": -1 } )
        res.send(productorder)
    } catch (err) {
        res.status(400).send(err)
    }
}; 

module.exports.get_lookupproductorder = async function (req, res) {
    Productorder.aggregate([{
        $lookup: {
            from: 'Product',
            localField: 'product_id',
            foreignField: 'price',
            as: 'output'
        }
    }]).then(result => res.json(result)).catch(err => console.log(err))
}; 
