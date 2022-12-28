const Safetyequipment = require('../../modal/masterModal/safetyequipmentSchema');

module.exports.add_safetyequipment = async function (req, res) {
  console.log(req.body);
  const { name } = req.body;
  if (!name) {
    return res.status(422).json({ Erorr: 'Please fill the field properly' });
  }
  try {
    const safetyequipment = new Safetyequipment({ name });
    await safetyequipment.save();

    res.status(201).json({ Message: 'Add Safety Equipment Succefully' });
  } catch (err) {
    console.log(err);
  }
};

module.exports.get_safetyequipment = async function (req, res) {
  try {
    const safetyequipment = await Safetyequipment.find({}).sort({ _id: -1 });
    res.send(safetyequipment);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports.get_safetyequipment_id = async function (req, res) {
  try {
    const _id = req.params.id;
    const safetyequipment = await Safetyequipment.findById({ _id });
    res.send(safetyequipment);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.update_safetyequipment = async function (req, res) {
  try {
    const _id = req.params.id;
    const safetyequipment = await Safetyequipment.findByIdAndUpdate(
      _id,
      req.body,
      {
        new: true,
      }
    );
    res.send(safetyequipment);
  } catch (e) {
    res.status(500).send(e);
  }
};

// module.exports.delete_safetyequipment = async function (req, res) {
//   try {
//     const safetyequipment = await Safetyequipment.findByIdAndDelete(
//       req.params.id
//     );
//     if (!eq.params.id) {
//       return res.status(400).send();
//     }
//     res.send(safetyequipment);
//   } catch (e) {
//     res.status(500).send(e);
//   }
// };

module.exports.delete_safetyequipment = async function (req, res) {
  try {
      const safetyequipment = await Safetyequipment.findByIdAndDelete(req.params.id);
      if (!req.params.id) {
          return res.status(400).send();
      }
      res.send(safetyequipment)
  } catch (e) {
      res.status(500).send(e)
  }
};
