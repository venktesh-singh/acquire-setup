const mongooose = require("mongoose")
const Schema = mongooose.Schema;

const surveySchema = new Schema({
    // survey_id	: {
    //     type: Number,
    //     required: true
    // },  
    // order_group	: {
    //     type: String,
    //     required: true
    // },
    // latest_drawing	: {
    //     type: String,
    //     required: true
    // },
    // measurement_done	: {
    //     type: String,
    //     required: true
    // },
    // elevation_photos_with_comment	: {
    //     type: String,
    //     // required: true
    // },
    // floor_finish_level_from_client_side	: {
    //     type: String,
    //     required: true
    // },
    // building_saul_for_projection_difference	: {
    //     type: String,
    //     required: true
    // },
    // water_level_for_every_floor	: {
    //     type: String,
    //     required: true
    // },
    // take_full_height_and_weight	: {
    //     type: String,
    //     required: true
    // },
    // check_floor_height_separately	: {
    //     type: String,
    //     required: true
    // },
    // check_beam_slab_height	: {
    //     type: String,
    //     required: true
    // },
    // take_false_celling	: {
    //     type: String,
    //     required: true
    // },
    // mail_to_all_site_condition	: {
    //     type: String,
    //     required: true
    // },
    images:{
        type:String
    },
    values:{
        type:Map
    }
},
    {
        timestamps: true
    }
)

const Survey = mongooose.model('Survey', surveySchema)
module.exports = Survey;