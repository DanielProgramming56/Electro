import express from "express"
const app = express()
import productRoutes from "./productsRoutes.js"
import categoryRoutes from "./categoryRoutes.js"
app.use("/product", productRoutes)
app.use("/category", categoryRoutes )
export default app