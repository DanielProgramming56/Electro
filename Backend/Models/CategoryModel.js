import mongoose from "mongoose";
const categorySchema = mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, default: "default category descriprion" },
    image: { type: String, default: "/img/" },
    attrs: [{ key: { type: String }, value: [{ type: String }] }]
})

export const Category = mongoose.model('Categoty', categorySchema)
