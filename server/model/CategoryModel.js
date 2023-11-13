import mongoose from "mongoose";
const Schema = new mongoose.Schema()

const CategorySchema = Schema({
    name: { type: String, required: true, default: "category default" },
    description: { type: String, required: true, default: "category default" },
    image: { type: String, default: "/img/" },
    attrs: [{ key: { type: String }, value: [{ type: string }] }]
})

export const Category = mongoose.model('Category', CategorySchema)
