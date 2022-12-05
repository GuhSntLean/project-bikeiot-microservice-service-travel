import { Schema } from "mongoose";

const AdminUser = new Schema({
  id: String,
  userName: String,
  email: String,
  role: String,
});

export { AdminUser };
