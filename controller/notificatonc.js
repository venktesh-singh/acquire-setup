const Notification = require('../modal/notification');

module.exports.add_notification = async function (req, res) {
  console.log(req.body);
  const {
    newwork_notification,
    sitesurvey_notification,
    drawing_notification,
    aluiminium_notification,
    glass_notification,
    handover_notification,
    n_siteName,
    n_path,
    site_incharge,
    d_approve,
    st_approve,
    al_approve,
    gl_approve,
    hd_approve,
    status,
    user_type_notifaction,
  } = req.body;
  try {
    const notification = new Notification({
      newwork_notification,
      sitesurvey_notification,
      drawing_notification,
      aluiminium_notification,
      glass_notification,
      handover_notification,
      n_siteName,
      n_path,
      site_incharge,
      d_approve,
      st_approve,
      al_approve,
      gl_approve,
      hd_approve,
      status,
      user_type_notifaction,
    });
    await notification.save();
    res.status(201).json({ message: 'Handover Added Successfully.' });
  } catch (err) {
    console.log(err);
  }
};

module.exports.get_notification = async function (req, res) {
  try {
    const notification = await Notification.find({}).sort({ _id: -1 });
    res.send(notification);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports.get_notification_by_emp_name = async function (req, res) {
  try {
    const name = req.params.id;
    const notification = await Notification.find({ site_incharge: name });
    res.send(notification);
  } catch (err) {
    res.status(500).send(err);
  }
};


module.exports.update_notification = async function (req, res) {
  try {
    const _id = req.params.id;
    const notification = await Notification.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(notification);
  } catch (e) {
    res.status(500).send(e);
  }
};


module.exports.delete_notification = async function (req, res) {
  try {
    const notification = await Notification.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(400).send();
    }
    res.send(notification);
  } catch (e) {
    res.status(500).send(e);
  }
};
