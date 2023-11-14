import express from "express"
const app = express()
import productRoutes from "./productsRoutes.js"
app.use("/product", productRoutes)

export default app