import express from "express"
import dotenv from "dotenv"
import { ConnectDatabase } from "./config/database.js"
// configuration
dotenv.config()

// Create application
const app = express()



ConnectDatabase()
const port = process.env.PORT || 5500
app.listen(port, () => {
    console.log(`Your application is server in Port ${port}`);
})