import express from "express";
import * as usersController from "../controllers/users-controller.js";
import multer from "multer";
import path from "path";

// const upload = multer({
//     dest: path.resolve('public/images'),
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now();
//       const uploadedfileName = uniqueSuffix + '-' + file.originalname;
//       cb(null, uploadedfileName)
//   }
// });

const storage = multer.diskStorage({
  destination: 'public/images',
  filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      const uploadedfileName = uniqueSuffix + '-' + file.originalname;
      cb(null, uploadedfileName)
  }
})

const upload = multer({ storage: storage })

const router = express.Router();

router
  .route("/")
  .get(usersController.users)
  .post(upload.single("user_img"), usersController.addUser);

router
  .route("/:id")
  .get(usersController.userByID)
  .delete(usersController.delUser);

router.route("/:id/wugs").get(usersController.userWugs);

export default router;
