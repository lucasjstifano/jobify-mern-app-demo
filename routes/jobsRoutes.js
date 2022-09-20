// ----- CONTROLLERS ----- //
import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  showStats,
} from "../controllers/jobsController.js";

// ----- EXPRESS ----- //
import express from "express";
const router = express.Router();

// ----- ROUTER ----- //
router.route("/").post(createJob).get(getAllJobs);
router.route("/stats").get(showStats);
router.route("/:id").delete(deleteJob).patch(updateJob);

export default router;
