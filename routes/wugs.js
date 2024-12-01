import express from "express";
import * as wugsController from "../controllers/wugs-controller.js";
// import multer from "multer";
// const upload = multer({ dest: '../public/images' });

const router = express.Router();

router.route("/").get(wugsController.wugs).post(wugsController.addWug);

router
  .route("/:id")
  .get(wugsController.wugById)
  .put(wugsController.editWug)
  .delete(wugsController.delWug);

export default router;
