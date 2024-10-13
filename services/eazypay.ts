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

export const generatePaymentUrl = (amount: number, email?: string): string => {
  const mandatoryFields = MANDATORY_FIELDS;
  const optionalFields = email ? email : " ";
  const referenceNo = REFERENCE_NO;
  const returnUrl = "https://iskconproject.com/payment/callback";
  const transactionAmount = amount;
  const subMerchantId = SUB_MERCHANT_ID;
  const payMode = PAY_MODE;

  const plainText = `merchantid=${MERCHANT_ID}&mandatory fields=${mandatoryFields}&optional fields=${optionalFields}&returnurl=${returnUrl}&Reference No=${referenceNo}&submerchantid=${subMerchantId}&transaction amount=${transactionAmount}&paymode=${payMode}`;
  const encryptedPayload = encryptData(plainText);

  return `https://eazypay.icicibank.com/EazyPG?${encryptedPayload}`;
};

export const verifySignature = (data: string, signature: string): boolean => {
  const hash = crypto.createHash("sha512").update(data).digest("hex");
  return hash === signature;
};
