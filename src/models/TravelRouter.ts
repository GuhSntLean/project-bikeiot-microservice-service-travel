import mongoose, { Schema } from "mongoose";

const TravelRouterSchema = new Schema({
  idtravelbasic: String,
  coordenates: [
    {
      lat: { type: Number, require: true },
      log: { type: Number, require: true },
      dateHour: { type: Date, require: true },
    },
  ],
});

const TravelRouter = mongoose.model("TravelRouter", TravelRouterSchema);

export { TravelRouter };
