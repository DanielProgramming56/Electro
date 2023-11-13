import express from "express"
import dotenv from "dotenv"

// configuration
dotenv.config()

// Create application
const app = express()

const port = process.env.PORT || 5500
app.listen(port, () => {
    console.log(`Your application is server in Port ${port}`);
})