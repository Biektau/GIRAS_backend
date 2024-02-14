import mongoose from "mongoose";

const glovesSchema = mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  color: {
    type: String,
  },
  standard: {
    type: String,
  },
  material: {
    type: String,
  },
  base: {
    type: String,
  },
  coating: {
    type: String,
  },
  cuff: {
    type: String,
  },
  sizes: {
    type: String,
  },
  averageVolume: {
    type: String,
  },
  averageWeight: {
    type: String,
  },
  packing: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  mainImg: {
    type: String,
  },
  allImages: {
    type: Array,
  },
  date: {
    type: String,
  },
});
export const Gloves = mongoose.model("gloves", glovesSchema);
