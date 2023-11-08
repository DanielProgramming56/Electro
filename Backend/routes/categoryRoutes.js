import express from "express"
const router = express.Router()
import { getCategories } from "../controller/CategoryController.js"

router.get("/", getCategories)

export default router