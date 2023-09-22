import * as crypto from "crypto-js";

export default function calculateHash(
  index: number,
  previousHash: string,
  timestamp: string,
  data: string
): string {
  return crypto.SHA256(index + previousHash + timestamp + data).toString();
}
