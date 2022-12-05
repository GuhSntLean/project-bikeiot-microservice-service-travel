import { v4 as uuid } from "uuid";
import mongoose, { Schema } from "mongoose";

const DataBikeSchema = new Schema({
  id: {
    type: String,
    default: uuid,
  },
  serialnumber: String,
  mac: String,
  status: String,
  modelbike: String,
});

const DataBike = mongoose.model("DataBike", DataBikeSchema);

export { DataBike };
