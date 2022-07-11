import express from "express";
import cors from "cors";
import logger from "./api/middleware/logger.js";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.get("/api", (req, res) => {
	res.status(200).json({ msg: "OK" });
});

app.listen(port, () => {
	console.log(`Service running on port ${port}`);
});

export default app;
