import express from "express"
const router = express.Router()
import {getOrders} from "../controller/OrderController.js"

router.get("/", getOrders)

export default router