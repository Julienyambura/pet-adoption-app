import { Schema, model, Document } from "mongoose";

const PetSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  breed: { type: String, required: true },
  description: { type: String, required: true },
  profilePic: { type: String, default: "" },
  ownerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
});

interface IPet extends Document {
  name: string;
  type: string;
  breed: string;
  description: string;
  profilePic: string;
  ownerId: string;
  createdAt: Date;
}

const Pet = model<IPet>("Pet", PetSchema);

export default Pet;
