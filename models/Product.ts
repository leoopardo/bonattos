import mongoose from "mongoose";

const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String },
    colors: { type: [String], required: true },
    quantity: { type: Number, required: true },
    collection: { type: String, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    gender: { type: String },
    p: { type: Boolean },
    m: { type: Boolean },
    g: { type: Boolean },
    gg: { type: Boolean },
  },
  { timestamps: true, strictQuery: "throw" }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
