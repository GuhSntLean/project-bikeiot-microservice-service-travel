import mongoose, { Schema } from "mongoose";

const AdminUserSchema = new Schema({
  idAdmin: String,
  userName: String,
  email: String,
  role: String,
});

const AdminUser = mongoose.model("AdminUser", AdminUserSchema);

export { AdminUser };
