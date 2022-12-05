import { Schema } from "mongoose";

const User = new Schema({
  id: String,
  userName: String,
  email: String,
});

export { User };
