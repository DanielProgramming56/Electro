import mongoose from "mongoose";
import { Review } from "./ReviewModel";
const Schema = new mongoose.Schema()
const imageSchema = mongoose.Schema({
    path: { type: String, required: true }
})
const ProductSchema = Schema({
    name: {
        type: String,
        required: true,
        unqiue: true
    },
    description: {
        name: {
            type: String,
            required: true,
        }
    },
    category: { type: String, required: true },
    count: { type: Number, required: true },
    price: { type: Number, required: true },
    rating: { type: Number },
    reviewsNumber: { type: Number },
    sales: {
        type: Number,
        default: 0
    },
    attr: [
        { key: { type: String }, value: { type: String } }
    ],
    image: [imageSchema],
    reviews: {
        type: mongoose.Schema.ObjectId,
        ref: Review
    }

})

ProductSchema.index()
export const Product = mongoose.model('Product', ProductSchema)
ProductSchema.index({ name: "text", description: "text" }, { name: "textIndex" })
ProductSchema.index({ "attrs.key": 1, "attrs.value": 1 })
