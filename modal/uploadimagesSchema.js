const mongooose = require("mongoose")
const Schema = mongooose.Schema;

const uploadImagesSchema = new Schema({
    site_survey_images: {
        type: Array,
    }
},
    {
        timestamps: true
    }
)


const UploadImages = mongooose.model('UploadImages', uploadImagesSchema)
module.exports = UploadImages;