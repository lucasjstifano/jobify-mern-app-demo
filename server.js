import express from "express";
import cors from "cors";
import "express-async-errors";
import morgan from "morgan";

// ----- DOT ENV ----- //
import dotenv from "dotenv";
dotenv.config();

// ----- DATABASE ----- //
import connectDB from "./db/connect.js";
const app = express();

// ----- MIDDLEWARE ----- //
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

// ----- ROUTERS ----- //
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";

// ----- ROUTES ----- //
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// ----- DB CONNECTION ----- //
const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
