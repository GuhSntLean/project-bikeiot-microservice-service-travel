import mongoose, { Schema } from "mongoose";

const PointsCoordenatesSchema = new Schema({
  lat: { type: Number, require: true },
  log: { type: Number, require: true },
  dateHour: { type: Date, require: true },
});

const TravelRouterSchema = new Schema({
  
  coordenates: [
    {
      type: Schema.Types.ObjectId,
      ref: "PointsCoordenates",
    },
  ],
});

const PointsCoordenates = mongoose.model(
  "PointsCoordenates",
  PointsCoordenatesSchema
);
const TravelRouter = mongoose.model("TravelRouter", TravelRouterSchema);

export {PointsCoordenates, TravelRouter}
