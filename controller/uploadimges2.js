const UploadImages2 = require("../modal/uploadimagesSchema2");

module.exports.add_image2 = async function (req, res) {
    console.log("body data", req.body);
    const elevation_survey_images = req?.file?.filename;
    const {
    } = req.body;
    try {
        const uploadImages2 = new UploadImages2({
            elevation_survey_images,
        });
        await uploadImages2.save();
        res.status(201).send({ message: "images upload Successfully.", status: 201 });
    } catch (err) {
        console.log(err);

    }
};


module.exports.get_image2 = async function (req, res) {
    try {
        const uploadImages2 = await UploadImages2.find({}).sort({ "_id": -1 })
        res.send(uploadImages2)
    } catch (err) {
        res.status(400).send(err)
    }
};



