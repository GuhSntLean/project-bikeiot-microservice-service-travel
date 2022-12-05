import { v4 as uuid } from "uuid";
import mongoose, { Schema } from "mongoose";

// enum statusRunning {
//   running = "running",
//   finish = "finish",
// }

const TravelBasicInfoSchema = new Schema({
  iduser: { type: String, require: true },
  idbike: { type: String, require: true },
  initRunning: { type: Date, require: true },
  finishRunning: { type: Date, require: true },
  statusRunning: { type: Boolean, require: true },
});

const TravelBasicInfo = mongoose.model(
  "TravelBasicInfo",
  TravelBasicInfoSchema
);

export { TravelBasicInfo };
