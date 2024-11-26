import express from "express";
import usersRoute from "./routes/users.js";
import wugsRoute from "./routes/wugs.js";
import cors from "cors";

const app = express();

const { BACKEND_URL, CORS_ORIGIN } = process.env;
const PORT = process.env.PORT || 8000;

app.use(cors({ origin: CORS_ORIGIN }));

app.get("/", (req, res) => {
    res.send("Welcome to the WugHugs backend!");
})

app.use("/users", usersRoute);
app.use("/wugs", wugsRoute);
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Listening at PORT ${PORT}`);
})