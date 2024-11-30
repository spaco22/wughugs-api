import express from "express";
import * as usersController from "../controllers/users-controller.js";

const router = express.Router();

router.route("/").get(usersController.users).post(usersController.addUser);

router.route("/:id").get(usersController.userByID);

router.route("/:id/wugs").get(usersController.userWugs);

export default router;