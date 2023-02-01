import { client } from "@/sanity";
import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

import { Experience, Skill } from "./typings";
const query = groq`
*[_type == "experience"]
`;

type Data = {
  experience: Experience[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experience: Experience[] = await client.fetch(query);
  res.status(200).json({ experience });
}
