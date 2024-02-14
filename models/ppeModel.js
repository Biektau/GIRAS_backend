import mongoose from "mongoose";

const ppeSchema = mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  standard: {
    type: String,
  },
  series: {
    type: String,
  },
  veryfied: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  averageVolume: {
    type: String,
  },
  averageWeight: {
    type: String,
  },
  mainImg: { type: String },
  allImages: { type: Array },
  date: {
    type: String,
  },
});
export const Ppe = mongoose.model("ppe", ppeSchema);
