const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaName = new Schema(
  {
    name: String,
    ocupation: String,
    catchPhrase: String
  },
  {
    timestamps: true
  }
);

const Model = mongoose.model("Celebrity", schemaName);
module.exports = Model;