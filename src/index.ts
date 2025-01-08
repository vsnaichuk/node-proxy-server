import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

// Middleware
app.use(cors());

// Routes
const router = express.Router();
router.get("/health", (req, res) => {
	res.status(200).send("Server is healthy");
});
app.use("/api", router);

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
