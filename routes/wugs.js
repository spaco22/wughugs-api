import express from "express";
import * as wugsController from "../controllers/wugs-controller.js";
import multer from "multer";
import path from "path";

const upload = multer({
    dest: path.resolve('public/images'),
});

const router = express.Router();

router.route("/").get(wugsController.wugs).post(upload.single("img"), wugsController.addWug);

router
  .route("/:id")
  .get(wugsController.wugById)
  .put(wugsController.editWug)
  .delete(wugsController.delWug);

export default router;
