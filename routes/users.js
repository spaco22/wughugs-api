import express from "express";
import * as usersController from "../controllers/users-controller.js";

const router = express.Router();

router.route("/").get(usersController.index);

router.route("/:id").get(usersController.userByID);

export default router;