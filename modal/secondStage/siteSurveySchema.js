const mongoose = require('mongoose');

const siteSurveySchema = new mongoose.Schema({
    site_incharge: {
        type: String,
    
    }, 
    building_saul: {
        type: String,
    },
    survey_deadline:{
        type: Date,
    },
    ordergroup: {
        type: String,
    },
    lad_add_commnet:{
        type: String,
    },
    latest_architecture_drawing:{
        type: Array,
    },
    floor_finishing_from_client: {
        type: String,
    },
    mail_to_client: {
        type: String,
    },
    celling_height: {
        type: String,
    },
    latest_architecture: {
        type: Array
    },
    elevation_images: {
        type: Array
    },
    img_el_add_commnet:{
        type: Array,
    },
    floorfinishings: {
        type: Array,
    },
    welevations: {
        type: Array,
    },
    waterls: {
        type: Array,
    },
    images:{
        type:String,
    },
    values:{
        type:Array,
    },
    approve_status:{
        type:Boolean,
    },
    site_survey_images:{
        type: String,
    }
}, {
    timestamps: true
})

const SiteSurvey = mongoose.model('SiteSurvey', siteSurveySchema);

module.exports = SiteSurvey;