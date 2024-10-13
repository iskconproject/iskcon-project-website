import crypto from "crypto";

const AES_KEY = process.env.AES_KEY || ""; // AES encryption key from env
const MERCHANT_ID = process.env.MERCHANT_ID || ""; // Merchant ID from env

export const encryptData = (data: string): string => {
  const cipher = crypto.createCipheriv("aes-128-ecb", AES_KEY, null);
  let encrypted = cipher.update(data, "utf8", "base64");
  encrypted += cipher.final("base64");
  return encrypted;
};

export const generatePaymentUrl = (amount: number, email?: string): string => {
  const mandatoryFields = "123abc|45|10|x|9876543210";
  const optionalFields = email ? email : "";
  const referenceNo = "123abc";
  const returnUrl = "https://iskconproject.com/payment/callback";
  const transactionAmount = amount;
  const subMerchantId = "45";
  const payMode = "9";

  const plainText = `merchantid=${MERCHANT_ID}&mandatory fields=${mandatoryFields}&optional fields=${optionalFields}&returnurl=${returnUrl}&Reference No=${referenceNo}&submerchantid=${subMerchantId}&transaction amount=${transactionAmount}&paymode=${payMode}`;
  const encryptedPayload = encryptData(plainText);

  return `https://eazypay.icicibank.com/EazyPG?${encryptedPayload}`;
};

export const verifySignature = (data: string, signature: string): boolean => {
  const hash = crypto.createHash("sha512").update(data).digest("hex");
  return hash === signature;
};
