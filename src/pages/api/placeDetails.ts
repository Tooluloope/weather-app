import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { place_id } = req.query;

	if (!place_id) {
		return res.status(400).send("Place ID is required");
	}

	try {
		const response = await axios.get(
			`https://maps.googleapis.com/maps/api/place/details/json`,
			{
				params: {
					key: process.env.GOOGLE_API_KEY,
					place_id: place_id,
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
