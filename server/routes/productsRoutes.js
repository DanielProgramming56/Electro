import express from 'express'
import { createProduct, getProduct } from '../controller/products.js'

const route = express.Router()

route.get("/", getProduct)
route.post("/", createProduct)


export default route