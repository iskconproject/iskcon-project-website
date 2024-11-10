// lib/crypto.ts

import { SignJWT, jwtVerify } from "jose";

const SECRET_KEY = process.env.JWT_SECRET_KEY!; // Ensure to set this in your environment variables
const EXPIRATION_TIME = "15m"; // Token validity duration

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
}

/**
 * Generates a JWT with the payment data.
 */
export const generateToken = async (data: PaymentData): Promise<string> => {
  const jwt = await new SignJWT({ ...data })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime(EXPIRATION_TIME)
    .sign(new TextEncoder().encode(SECRET_KEY));

  return jwt;
};

/**
 * Verifies the JWT and returns the payment data if valid.
 */
export const verifyToken = async (token: string): Promise<PaymentData | null> => {
  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(SECRET_KEY));
    
    // Optionally, you can add more validation on the payload here
    return payload as unknown as PaymentData;
  } catch (error) {
    console.error("JWT verification failed:", error);
    return null;
  }
};