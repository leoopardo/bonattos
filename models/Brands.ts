import mongoose from "mongoose";

const { Schema } = mongoose;

const BrandsSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
  },
  { timestamps: true, strictQuery: "throw" }
);

export default mongoose.models.Brands ||
  mongoose.model("Brands", BrandsSchema);
