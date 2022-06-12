import mongoose from "mongoose";
const MessSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  photos: {
    type: [String],
  },
 
  desc: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
});

export default mongoose.model("Mess", MessSchema)