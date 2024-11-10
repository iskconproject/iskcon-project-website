// lib/crypto.ts

const SECRET_KEY = process.env.AES_KEY!;
const DELIMITER = "|||";

/**
 * PaymentData interface defines the structure of the payment information.
 */
export interface PaymentData {
  uniqueRefNumber: string;
  responseCode: string;
  totalAmount: string;
  transactionAmount: string;
  paymentMode: string;
  id: string;
  timestamp: number;
}

/**
 * Converts a string to an ArrayBuffer.
 */
const str2ab = (str: string): ArrayBuffer => {
  const encoder = new TextEncoder();
  return encoder.encode(str);
};

/**
 * Converts an ArrayBuffer to a hex string.
 */
const ab2hex = (buffer: ArrayBuffer): string => {
  const byteArray = new Uint8Array(buffer);
  const hexCodes = Array.from(byteArray).map((value) => {
    return value.toString(16).padStart(2, "0");
  });
  return hexCodes.join("");
};

/**
 * Imports the secret key for HMAC.
 */
const importKey = async (key: string) => {
  return await crypto.subtle.importKey(
    "raw",
    str2ab(key),
    {
      name: "HMAC",
      hash: { name: "SHA-256" },
    },
    false,
    ["sign", "verify"]
  );
};

/**
 * Generates a token using HMAC.
 */
export const generateToken = async (data: PaymentData): Promise<string> => {
  const timestamp = Date.now();
  const payload = JSON.stringify({ ...data, timestamp });

  const key = await importKey(SECRET_KEY);
  const signature = await crypto.subtle.sign("HMAC", key, str2ab(payload));

  const hexSignature = ab2hex(signature);
  return Buffer.from(`${payload}${DELIMITER}${hexSignature}`).toString(
    "base64"
  );
};

/**
 * Verifies the token and returns the PaymentData if valid.
 */
export const verifyToken = async (
  token: string
): Promise<PaymentData | null> => {
  try {
    const decoded = Buffer.from(token, "base64").toString();
    const [payload, signature] = decoded.split(DELIMITER);

    if (!payload || !signature) {
      return null;
    }

    const key = await importKey(SECRET_KEY);
    const isValid = await crypto.subtle.verify(
      "HMAC",
      key,
      str2ab(signature),
      str2ab(payload)
    );

    if (!isValid) {
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
