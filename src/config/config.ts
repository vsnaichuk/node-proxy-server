import dotenv from "dotenv";
dotenv.config();

const config = {
	PORT: process.env.PORT,
	API_URL: process.env.API_URL,
	API_KEY: process.env.API_KEY,
};
export default config;
