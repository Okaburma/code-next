import type { NextApiRequest, NextApiResponse } from "next";

// Serverless function
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;
  if (method === "GET") {
    return res.status(200).send("OK GET Menu");
  } else if (method === "POST") {
    return res.status(200).send("OK POST Menu");
  } else if (method === "PUT") {
    return res.status(200).send("OK PUT Menu");
  } else if (method === "DELETE") {
    return res.status(200).send("OK DELETE Menu");
  }
  return res.status(405).send("Invalid Method");
}
