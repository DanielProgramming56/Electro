import express from "express"
const router = express.Router()
import {getProducts} from "../controller/ProductController.js"
router.get("/category/:categoryName", getProducts)
router.get("/", getProducts)

export default router