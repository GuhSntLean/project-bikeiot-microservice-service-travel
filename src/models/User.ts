import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  id: String,
  userName: String,
  email: String,
});

const User = mongoose.model("User", UserSchema);

export { User };
