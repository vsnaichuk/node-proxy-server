import { Request, Response } from "express";
import axios from "axios";
import config from "../config/config.js";
import { transformMeteorData } from "../utils/meteor.js";

export const getMeteors = async (req: Request, res: Response) => {
	try {
		const { data } = await axios.get(`${config.API_URL}/feed`, {
			params: {
				start_date: "2025-01-07",
				end_date: "2025-01-08",
				api_key: config.API_KEY,
			},
		});

		const meteors = Object.values(data.near_earth_objects).flat();
		res.json(meteors.map(transformMeteorData));
	} catch (err) {
		const msg = "Error fetching data from NASA";
		console.error(msg, err);
		res.status(500).json({ error: msg });
	}
};
