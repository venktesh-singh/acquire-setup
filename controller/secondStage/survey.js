
const SiteSurvey = require("../../modal/secondStage/siteSurveySchema")

module.exports.add_survey = async function (req, res) {
console.log("body data", req.body);
// const   latest_architecture_drawing= req?.file?.filename;
    const { 
        images,
        values,
        site_incharge,
        survey_deadline,
        building_saul,
        ordergroup,
        lad_add_commnet,
        floor_finishing_from_client,
        mail_to_client,
        celling_height,
        latest_architecture,
        elevation_images,
        img_el_add_commnet,
        floorfinishings,
        welevations,
        waterls,
        approve_status,
        site_survey_images,
    } = req.body;
    try {
        const survey = new SiteSurvey({
            images,
            values,
            site_incharge,
            building_saul,
            survey_deadline,
            ordergroup,
            lad_add_commnet,
            floor_finishing_from_client,
            mail_to_client,
            celling_height,
            latest_architecture,
            elevation_images,
            img_el_add_commnet,
            floorfinishings,
            welevations,
            waterls,
            approve_status,
            site_survey_images,
        });
        await survey.save();
        res.status(201).send({ message: "Survey  Added Successfully.", status: 201 });
    } catch (err) {
        console.log(err);

    }
};

module.exports.add_site_survey_image = async function (req, res) {
    console.log("body data", req.body);
    const   site_survey_images= req?.file?.filename;
        const { 
        } = req.body;
        try {
            const survey = new SiteSurvey({
                site_survey_images,
                
            });
            await survey.save();
            res.status(201).send({ message: "Survey images Successfully.", status: 201 });
        } catch (err) {
            console.log(err);
    
        }
    };

// module.exports.get_surveys = async function (req, res) {
//     try {
//         const employees = await SiteSurvey.find({}).sort( {"_id": -1 } )
//         res.status(201).json({ message: " Get Survey success", Survey: employees });
//     } catch (error) {
//         res.status(400).json({ error: error });
//     }
// }

module.exports.get_surveys = async function (req, res) {
    try {
        const survey = await SiteSurvey.find({}).sort( {"_id": -1 } )
        res.send(survey)
    } catch (err) {
        res.status(400).send(err)
    }
};

module.exports.get_survey_by_emp_name = async function (req, res) {
    try {
        const name = req.params.id;
        const survey = await SiteSurvey.find({"site_incharge":name}) 
        res.send(survey)
    } catch (err) {
        res.status(500).send(err)
    }
}; 


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
        const survey = await SiteSurvey.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.send(survey)
    } catch (e) {
        res.status(500).send(e)
    }
};


module.exports.delete_survey = async function (req, res) {
    try {
        const survey = await SiteSurvey.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
            return res.status(400).send();
        }
        res.send(survey)
    } catch (e) {
        res.status(500).send(e)
    }
};
