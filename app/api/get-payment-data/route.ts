import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const paymentData = req.headers["x-payment-data"] as string | undefined;

  if (!paymentData) {
    return res.status(400).json({ error: "Invalid payment data." });
  }

  try {
    const parsedData = JSON.parse(paymentData);
    res.status(200).json(parsedData);
  } catch (error) {
    console.error("Error parsing payment data:", error);
    res.status(400).json({ error: "Malformed payment data." });
  }
}
