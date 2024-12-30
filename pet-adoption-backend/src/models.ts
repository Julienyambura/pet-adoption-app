import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "user" },
});

const petSchema = new Schema({
  name: { type: String, required: true },
  breed: { type: String },
  description: { type: String },
  imageUrl: { type: String },
});

export const User = mongoose.model("User", userSchema);
export const Pet = mongoose.model("Pet", petSchema);
