// Iteration #1

const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const droneSchema = new Schema({
  // unless you are defining more than the "type" property, you don't have to use {} e.g.:
  // firstName: {type: String, require: true}
  name: String,
  propellers: Number,
  maxSpeed: Number,
});

module.exports = model('Drone', droneSchema);
