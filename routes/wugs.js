import express from "express";
import * as wugsController from "../controllers/wugs-controller.js";

const router = express.Router();

router.route("/").get(wugsController.wugs).post(wugsController.addWug);

router.route("/:id").get(wugsController.wugById).put(wugsController.editWug);

export default router;