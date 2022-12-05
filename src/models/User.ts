import { v4 as uuid } from "uuid";
import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  idUser: {
    type: String,
    default: () => uuid,
  },
  userName: String,
  email: String,
});

const User = mongoose.model("User", UserSchema);

export { User };
