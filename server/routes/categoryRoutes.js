import express from "express"
import { deleteCategory, getCategory, newCategory } from "../controller/category.js"
const route = express.Router()

route.get("/", getCategory)
route.post("/", newCategory)
route.delete("/:category", deleteCategory)

export default route