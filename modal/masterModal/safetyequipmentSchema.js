const mongooose = require('mongoose');
const Schema = mongooose.Schema;

const safetyequipmentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Safetyequipment = mongooose.model(
  'Safetyequipment',
  safetyequipmentSchema
);
module.exports = Safetyequipment;
