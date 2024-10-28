import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";

const AES_KEY = process.env.AES_KEY || ""; // AES encryption key from env
const MERCHANT_ID = process.env.MERCHANT_ID || ""; // Merchant ID from env
const REFERENCE_NO = process.env.REFERENCE_NO || ""; // Reference number from env
const SUB_MERCHANT_ID = process.env.SUB_MERCHANT_ID || ""; // Sub merchant ID from env
const PAY_MODE = process.env.PAY_MODE || ""; // Pay mode from env
const MANDATORY_FIELDS = "123abc|45|10|x|9876543210"; // Mandatory fields from env

export const encryptData = (data: string): string => {
  const cipher = crypto.createCipheriv("aes-128-ecb", AES_KEY, null);
  let encrypted = cipher.update(data, "utf8", "base64");
  encrypted += cipher.final("base64");
  return encrypted;
};

export const generateEncryptedPaymentUrl = (
  params: Record<string, string>
): string => {
  const baseUrl = "https://eazypay.icicibank.com/EazyPG";
  const encryptedParams = Object.entries(params).map(([key, value]) => {
    const encryptedValue = encryptData(value);
    return `${encodeURIComponent(key)}=${encodeURIComponent(encryptedValue)}`;
  });

  return `${baseUrl}?${encryptedParams.join("&")}`;
};

export const generateUnencryptedPaymentUrl = (
  params: Record<string, string>
): string => {
  const baseUrl = "https://eazypay.icicibank.com/EazyPG";
  const encryptedParams = Object.entries(params).map(([key, value]) => {
    return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
  });

  return `${baseUrl}?${encryptedParams.join("&")}`;
};

export const generateEazypayPaymentUrl = (
  amount: string,
  email?: string
): string => {
  const params: Record<string, string> = {
    merchantid: MERCHANT_ID,
    "mandatory fields": "123abc|45|10|x|9876543210",
    "optional fields": email || "test@gmail.com",
    returnurl: "https://iskconproject.com/api/payment/callback",
    "Reference No": REFERENCE_NO,
    submerchantid: SUB_MERCHANT_ID,
    "transaction amount": amount,
    paymode: PAY_MODE.toString(),
  };

  console.log("unencrypted payment url", generateUnencryptedPaymentUrl(params));

  console.log("Non Encrypted Payload:", params);
  return generateEncryptedPaymentUrl(params);
};

export const verifySignature = (data: string, signature: string): boolean => {
  const hash = crypto.createHash("sha512").update(data).digest("hex");
  return hash === signature;
};
