import express from "express";
import userRoute from "./routes/users.js";

const app = express();

const PORT = 2222;

app.get("/", (req, res) => {
    res.send("Welcome to the WugHugs backend!");
})

app.use("/users", userRoute);

app.listen(PORT, () => {
    console.log(`Listening at PORT ${PORT}`);
})