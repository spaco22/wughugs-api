import express from "express";
import * as wugsController from "../controllers/wugs-controller.js";

const router = express.Router();

router.route("/").get(wugsController.index);

export default router;