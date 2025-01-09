import express from "express";
import cors from "cors";
import config from "./config/config.js";
import * as healthControllers from "./controllers/health.controller.js";
import * as meteorControllers from "./controllers/meteor.controller.js";

const app = express();

// Middleware
app.use(cors());

// Routes
const router = express.Router();
router.get("/health", healthControllers.checkHealth);
router.get("/meteors", meteorControllers.getMeteors);
app.use("/api", router);

// Start server
app.listen(config.PORT, () => {
	console.log(`[server]: Server is running at http://localhost:${config.PORT}`);
});
