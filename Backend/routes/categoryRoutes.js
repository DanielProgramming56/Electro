import express from "express"
const router = express.Router()
import { deleteCategory, getCategories, newCategory, saveAttr } from "../controller/CategoryController.js"

router.get("/", getCategories)
router.post("/", newCategory)
router.post("/:category", deleteCategory)
router.post("/attr", saveAttr)
export default router