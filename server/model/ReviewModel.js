import mongoose from "mongoose";
import { User } from "./UserModel.js";


const ReviewModel = mongoose.Schema({
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
    user: {
        id: { type: mongoose.Schema.Types.ObjectId, required: true },
        name: { type: String, required: true }
    }
})


export const Review = mongoose.model('Review', ReviewModel)