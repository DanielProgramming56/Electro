import express from "express"
const app = express();
const port = 3000;
import api from "./routes/API.js"
import { connectDb } from "./config/db.js";
import { errorResponseHandler, invalidPathResponseHandler } from "./middleware/errorResponse.js";
connectDb()
app.use("/api", api)
app.use(express.json())
app.use(invalidPathResponseHandler)
app.use(errorResponseHandler)
app.listen(port, () => console.log(`port running in ${port}`));