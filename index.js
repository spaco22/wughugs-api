import express from "express";
import usersRoute from "./routes/users.js";
import wugsRoute from "./routes/wugs.js";

const app = express();

const PORT = 2222;

app.get("/", (req, res) => {
    res.send("Welcome to the WugHugs backend!");
})

app.use("/users", usersRoute);
app.use("/wugs", wugsRoute);

app.listen(PORT, () => {
    console.log(`Listening at PORT ${PORT}`);
})