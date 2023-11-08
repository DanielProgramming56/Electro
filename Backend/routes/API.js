import express from "express"
const app = express()


// const orderRoutes = require("./orderRoutes")
import productRoutes from "./productsRoutes.js"
import categoryRoutes from "./categoryRoutes.js"
import  userRoutes from "./userRoutes.js"
import orderRoutes from "./orderRoutes.js"
app.use("/products", productRoutes)
app.use("/categories", categoryRoutes)
app.use("/users", userRoutes)
app.use("/orders", orderRoutes)

export default app