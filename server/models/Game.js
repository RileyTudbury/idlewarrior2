import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Game = new Schema(
  {
    creatorEmail: { type: String, required: true },
    honor: { type: Number, default: 0 },
    clickPower: { type: Number, default: 1 }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

Game.virtual("creator", {
  localField: "creatorEmail",
  ref: "Profile",
  foreignField: "email",
  justOne: true
});

export default Value;
