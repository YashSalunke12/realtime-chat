import express from "express";
const app = express();

app.get("/health", (req, res) => res.send("ok"));

const port = Number(process.env.PORT) || 4000;
app.listen(port, () => console.log(`http srever running on port: ${port}`));
