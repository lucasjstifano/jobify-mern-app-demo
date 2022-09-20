// ----- CONTROLLERS ----- //
import { login, register, updateUser } from "../controllers/authController.js";

// ----- EXPRESS ----- //
import express from "express";
const router = express.Router();

// ----- ROUTER ----- //
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/updateUser").patch(updateUser);

export default router;
