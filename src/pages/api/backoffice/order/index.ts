import type { NextApiRequest, NextApiResponse } from "next";

// Serverless function
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;
  if (method === "GET") {
    return res.status(200).send("OK GET Order");
  } else if (method === "POST") {
    return res.status(200).send("OK POST Order");
  } else if (method === "PUT") {
    return res.status(200).send("OK PUT Order");
  } else if (method === "DELETE") {
    return res.status(200).send("OK DELETE Order");
  }
  return res.status(405).send("Invalid Method");
}
