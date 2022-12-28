const mongooose = require('mongoose');
const Schema = mongooose.Schema;

const uploadImagesSchema2 = new Schema(
  {
    elevation_survey_images: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const UploadImages2 = mongooose.model('UploadImages2', uploadImagesSchema2);
module.exports = UploadImages2;
