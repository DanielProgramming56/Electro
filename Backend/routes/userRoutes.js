import express from "express"
const router = express.Router()
import {getUsers} from "../controller/UserController.js"

router.get("/", getUsers)

export default router