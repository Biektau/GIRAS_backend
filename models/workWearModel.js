import mongoose from "mongoose";

const workWearSchema = mongoose.Schema({
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
  set: {
    type: String,
  },
  series: {
    type: String,
  },
  protectionClass: {
    type: String,
  },
  material: {
    type: String,
  },
  veryfied: {
    type: String,
  },
  sizes: {
    type: String,
  },
  heights: {
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

export const WorkWear = mongoose.model("workWear", workWearSchema);
