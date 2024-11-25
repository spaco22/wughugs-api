import express from "express";

const app = express();

const PORT = 2222;

app.get("/", (req, res) => {
    res.send("Welcome to the WugHugs backend!");
})

app.listen(PORT, () => {
    console.log(`Listening at PORT ${PORT}`);
})