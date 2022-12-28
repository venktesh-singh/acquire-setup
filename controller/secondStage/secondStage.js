
const SiteSurvey = require("../../modal/secondStage/siteSurveySchema")

module.exports.add_survey = async function (req, res) {

    const { orderGroup, latestDrawing,survey_deadline, elevationPhotosComments,floor_finishing_from_client,building_saul} = req.body;
    try {
        const survey = new SiteSurvey({
            orderGroup, latestDrawing,survey_deadline, elevationPhotosComments,floor_finishing_from_client,building_saul
        });
        await survey.save();
        res.status(201).send({ message: "Survey  Added Successfully.", status: 201 });
    } catch (err) {
        console.log(err);

    }
};

module.exports.get_surveys = async function (req, res) {
    try {
        const employees = await SiteSurvey.find({})
        res.status(201).json({ message: " Get Survey success", Survey: employees });
    } catch (error) {
        res.status(400).json({ error: error });
    }
}


// module.exports.get_employee_id = async function (req, res) {
//     try {
//         const _id = req.params.id;
//         const employee = await Employee.findById({ _id })
//         res.send(employee)
//     } catch (err) {
//         res.status(500).send(err)
//     }
// };

module.exports.update_survey = async function (req, res) {
    try {
        const _id = req.params.id;
        const employee = await SiteSurvey.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.send(employee)
    } catch (e) {
        res.status(500).send(e)
    }
};

// module.exports.delete_employee = async function (req, res) {
//     try {
//         const employee = await Employee.findByIdAndDelete(req.params.id);
//         if (!eq.params.id) {
//             return res.status(400).send();
//         }
//         res.send({ message: "Employee Deleted Success.", employee });

//     } catch (e) {
//         res.status(500).send({ message: "error", e })
//     }
// };