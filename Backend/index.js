import express from "express"
const app = express();
const port = 3000;
import { connectDb } from "./config/db.js";
connectDb()
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => console.log(`port running in ${port}`));