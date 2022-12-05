import { Schema } from "mongoose";

const DataBike = new Schema({
  id: String,
  serialnumber: String,
  mac: String,
  status: String,
  modelbike: String,
});

export { DataBike };
