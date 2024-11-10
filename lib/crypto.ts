import { createHmac } from "crypto";

const SECRET_KEY = process.env.AES_KEY!;

export const generateToken = (data: any) => {
  const timestamp = Date.now();
  const payload = JSON.stringify({ ...data, timestamp });

  const hmac = createHmac("sha256", SECRET_KEY);
  hmac.update(payload);
  const signature = hmac.digest("hex");

  return Buffer.from(`${payload}.${signature}`).toString("base64");
};

export const verifyToken = async (token: string) => {
  try {
    const decoded = Buffer.from(token, "base64").toString();
    const [payload, signature] = decoded.split(".");
    console.log({ payload, signature });

    const hmac = createHmac("sha256", SECRET_KEY);
    hmac.update(payload);
    const expectedSignature = hmac.digest("hex");
    console.log({ expectedSignature });

    if (signature !== expectedSignature) {
      return false;
    }

    const { timestamp } = JSON.parse(payload);
    const now = Date.now();

    // Token expires in 15 minutes
    return now - timestamp < 15 * 60 * 1000;
  } catch {
    return false;
  }
};
