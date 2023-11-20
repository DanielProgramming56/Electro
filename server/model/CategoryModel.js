import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({
    name: { type: String, required: true, default: "category default" },
    description: { type: String, required: true, default: "category default" },
    image: { type: String, default: "/img/" },
    attrs: [{ key: { type: String }, value: [{ type: String }] }]
})

export const Category = mongoose.model('Category', CategorySchema)

