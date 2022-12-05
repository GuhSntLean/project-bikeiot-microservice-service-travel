import mongoose, { Schema } from "mongoose";

const DataBikeSchema = new Schema({
  id: String,
  serialnumber: String,
  mac: String,
  status: String,
  modelbike: String,
});

const DataBike = mongoose.model("DataBike", DataBikeSchema);

export { DataBike };
