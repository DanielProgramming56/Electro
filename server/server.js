import express from "express"
import dotenv from "dotenv"
import { ConnectDatabase } from "./config/database.js"
import api from "./routes/api.js"
import { errorResponseHandler } from "./middleware/errorHandler.js"

// configuration
dotenv.config()

// Create application
const app = express()

// middleware
app.use(express.json())
app.use("/api", api)
app.use(errorResponseHandler)

ConnectDatabase()
const port = process.env.PORT || 5500
app.listen(port, () => {
    console.log(`Your application is server in Port ${port}`);
})