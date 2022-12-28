const UploadImages = require('../modal/uploadimagesSchema');

module.exports.add_image = async function (req, res) {
  console.log('body data', req.body);
  const site_survey_images = req?.file?.filename;
  const {} = req.body;
  try {
    const uploadImages = new UploadImages({
      site_survey_images,
    });
    await uploadImages.save();
    res
      .status(201)
      .send({ message: 'images upload Successfully.', status: 201 });
  } catch (err) {
    console.log(err);
  }
};
module.exports.addElevationImage = async function (req, res) {
  console.log('body data', req.body);
  const site_survey_images = req?.file?.filename;
  const {} = req.body;
  try {
    const uploadImages = new UploadImages({
      elevation_survey_images,
    });
    await uploadImages.save();
    res
      .status(201)
      .send({ message: 'images upload Successfully.', status: 201 });
  } catch (err) {
    console.log(err);
  }
};

module.exports.get_image = async function (req, res) {
  try {
    const uploadImages = await UploadImages.find({}).sort({ _id: -1 });
    res.send(uploadImages);
  } catch (err) {
    res.status(400).send(err);
  }
};
