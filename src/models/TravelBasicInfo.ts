import { v4 as uuid } from "uuid";
import mongoose, { Schema } from "mongoose";

const TravelBasicInfoSchema = new Schema({
  _id: {
    type: String,
    default: uuid,
  },
  idUser: { type: String, require: true },
  idBike: { type: String, require: true },
  initRunning: { type: Date, require: true },
  finishRunning: { type: Date, require: true },
  statusRunning: {},
});

const TravelBasicInfo = mongoose.model("Travel", TravelBasicInfoSchema);

export { TravelBasicInfo };
