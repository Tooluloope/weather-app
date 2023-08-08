import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { q, days } = req.query;

	if (!q) {
		return res
			.status(400)
			.send({ error_message: 'Query parameter "q" is required' });
	}

	if (!days) {
		return res
			.status(400)
			.send({ error_message: 'Query parameter "days" is required' });
	}

	try {
		const response = await axios.get(
			"https://api.weatherapi.com/v1/forecast.json",
			{
				params: {
					q,
					days,
					key: process.env.WEATHER_API_KEY, // Stored as an environment variable
				},
			}
		);

		res.status(200).json(response.data);
	} catch (error) {
		res.status(500).send({ error_message: "Error connecting to Weather API" });
	}
};

export default handler;
