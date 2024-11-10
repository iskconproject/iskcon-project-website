import { createHmac } from "crypto";

const SECRET_KEY = process.env.AES_KEY!;
const DELIMITER = "|||";

interface PaymentData {
  uniqueRefNumber: string;
  responseCode: string;
  totalAmount: string;
  transactionAmount: string;
  paymentMode: string;
  id: string;
  timestamp: number;
}

export const generateToken = (data: PaymentData) => {
  const timestamp = Date.now();
  const payload = JSON.stringify({ ...data, timestamp });

  const hmac = createHmac("sha256", SECRET_KEY);
  hmac.update(payload);
  const signature = hmac.digest("hex");

  return Buffer.from(`${payload}${DELIMITER}${signature}`).toString("base64");
};

export const verifyToken = async (
  token: string
): Promise<PaymentData | null> => {
  try {
    const decoded = Buffer.from(token, "base64").toString();
    const [payload, signature] = decoded.split(DELIMITER);

    if (!payload || !signature) {
      return null;
    }

    const hmac = createHmac("sha256", SECRET_KEY);
    hmac.update(payload);
    const expectedSignature = hmac.digest("hex");

    if (signature !== expectedSignature) {
      return null;
    }

    const payloadData = JSON.parse(payload) as PaymentData;
    const now = Date.now();

    // Token expires in 15 minutes
    if (now - payloadData.timestamp > 15 * 60 * 1000) {
      return null;
    }

    return payloadData;
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
};
