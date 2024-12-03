import express from "express";
import * as wugsController from "../controllers/wugs-controller.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: "public/images",
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    const uploadedfileName = uniqueSuffix + "-" + file.originalname;
    cb(null, uploadedfileName);
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

router.route("/").get(wugsController.wugs).post(upload.single("wug_img"), wugsController.addWug);

router
  .route("/:id")
  .get(wugsController.wugById)
  .put(upload.single("wug_img"), wugsController.editWug)
  .delete(wugsController.delWug);


router
.route("/:id/journals").get(wugsController.wugJournals);

export default router;
