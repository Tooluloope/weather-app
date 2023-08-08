import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { input } = req.query;

	try {
		const response = await axios.get(
			`https://maps.googleapis.com/maps/api/place/autocomplete/json`,
			{
				params: {
					input,
					key: process.env.GOOGLE_API_KEY, // Stored as an environment variable
				},
			}
		);

		res.status(200).json(response.data);
	} catch (error) {
		console.error(error);
		res.status(500).send("Error connecting to Google API");
	}
};

export default handler;
