import "dotenv/config";
import express from "express";

const app = express();

// middlewares
app.use(express.json());

//routes
app.get("/", (req, res) => res.send("ok"));

const port = Number(process.env.PORT) || 4000;
app.listen(port, () => console.log(`server is running on port:${port}`));
