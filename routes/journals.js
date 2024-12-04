import express from "express";
import * as journalsController from "../controllers/journals-controller.js";
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

router
  .route("/").get(journalsController.journals).post(journalsController.addJournal);

router
  .route("/:id").get(journalsController.journalById).put(journalsController.editJournal).delete(journalsController.delJournal);

  export default router;