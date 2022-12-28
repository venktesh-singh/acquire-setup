const Survey = require("../modal/surveySchema")

module.exports.add_survey = async function (req, res) {
    console.log(req.body)
    const latest_drawing = req?.file?.filename;
    console.log("file log", req.file);
    const {
        stage,
        building_saul,
        order_group,
        floor_finishing_from_client,
        mail_to_client,
        celling_height,
        latest_architecture,
        elevation_images,
        floor_finishing,
        h_w_elevation_wise,
        water_lavel
    } = req.body;
    if (!stage ) {
        return res.status(422).json({ erorr: "Please fill the field properly" });
    }
    try {
        const survey = new Survey({
            stage,
            building_saul,
            order_group,
            floor_finishing_from_client,
            mail_to_client,
            celling_height,
            latest_architecture,
            elevation_images,
            floor_finishing,
            h_w_elevation_wise,
            water_lavel
        });
        await survey.save();

        res.status(201).json({ message: "Add Survey Succefully" });

    } catch (err) {
        console.log(err);
    }
};

module.exports.get_survey = async function (req, res) {
    try {
        const survey = await Survey.find({}).sort( {"_id": -1 } )
        res.send(survey)
    } catch (err) {
        res.status(400).send(err)
    }
};

module.exports.get_survey_id = async function (req, res) {
    try {
        const _id = req.params.id;
        const survey = await Survey.findById({ _id })
        res.send(survey)
    } catch (err) {
        res.status(500).send(err)
    }
};

module.exports.update_survey = async function (req, res) {
    try {
        const _id = req.params.id;
        const survey = await Survey.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.send(survey)
    } catch (e) {
        res.status(500).send(e)
    }
};

module.exports.delete_survey = async function (req, res) {
    try {
        const survey = await Survey.findByIdAndDelete(req.params.id);
        if (!eq.params.id) {
            return res.status(400).send();
        }
        res.send(survey)
    } catch (e) {
        res.status(500).send(e)
    }
};
