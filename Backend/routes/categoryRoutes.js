import express from "express"
const router = express.Router()
import { deleteCategory, getCategories, newCategory } from "../controller/CategoryController.js"

router.get("/", getCategories)
router.post("/", newCategory)
router.post("/:category", deleteCategory)
export default router