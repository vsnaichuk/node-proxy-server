import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import axios from "axios";

const PORT = process.env.PORT;
const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

(async () => {
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

	try {
		const startDate = "2015-09-07";
		const endDate = "2015-09-08";
		const res = await axios.get(
			`${API_URL}/feed?start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY}`,
		);
		console.log(JSON.stringify(res.data, null, 4));
	} catch (err) {
		console.error("Error fetching nasa feed:", err);
	}

	// Start server
	app.listen(PORT, () => {
		console.log(`[server]: Server is running at http://localhost:${PORT}`);
	});
})().catch(console.error);
