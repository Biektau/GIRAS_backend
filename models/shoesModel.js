import mongoose from "mongoose";

const shoesSchema = mongoose.Schema({
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
  pad: {
    type: String,
  },
  toeCap: {
    type: String,
  },
  insole: {
    type: String,
  },
  sole: {
    type: String,
  },
  fasteningMethod: {
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
  season: {
    type: String,
    required: true,
  },
  gender: {
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

export const Shoes = mongoose.model("shoes", shoesSchema);
