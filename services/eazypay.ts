import crypto from "crypto";

const AES_KEY = process.env.AES_KEY || ""; // AES encryption key from env
const MERCHANT_ID = process.env.MERCHANT_ID || ""; // Merchant ID from env
const REFERENCE_NO = process.env.REFERENCE_NO || ""; // Reference number from env
const SUB_MERCHANT_ID = process.env.SUB_MERCHANT_ID || ""; // Sub merchant ID from env
const PAY_MODE = process.env.PAY_MODE || ""; // Pay mode from env
const MANDATORY_FIELDS = process.env.MANDATORY_FIELDS || ""; // Mandatory fields from env

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

export const generatePaymentUrl = (amount: string, email?: string): string => {
  const mandatoryFields = MANDATORY_FIELDS;
  const optionalFields = email ? email : " ";
  const referenceNo = REFERENCE_NO;
  const returnUrl = "https://iskconproject.com/api/payment/callback";
  const transactionAmount = amount;
  const subMerchantId = SUB_MERCHANT_ID;
  const payMode = PAY_MODE;

  const encryptedPayload = `merchantid=${MERCHANT_ID}&mandatory fields=${encryptData(
    mandatoryFields
  )}&optional fields=${encryptData(optionalFields)}&returnurl=${encryptData(
    returnUrl
  )}&Reference No=${encryptData(referenceNo)}&submerchantid=${encryptData(
    subMerchantId
  )}&transaction amount=${encryptData(transactionAmount)}&paymode=${encryptData(
    payMode
  )}`;

  return `https://eazypay.icicibank.com/EazyPG?${encryptedPayload}`;
};

export const verifySignature = (data: string, signature: string): boolean => {
  const hash = crypto.createHash("sha512").update(data).digest("hex");
  return hash === signature;
};
