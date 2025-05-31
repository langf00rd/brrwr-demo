import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toNumber(value: string | number | bigint | undefined): number {
  if (value === undefined) return 0;
  return Number(value);
}

export function toBigInt(value: string | number | bigint | undefined): bigint {
  if (value === undefined) return BigInt(0);
  return BigInt(value);
}
