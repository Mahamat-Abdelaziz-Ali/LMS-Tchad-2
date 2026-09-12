export { cn } from "cn"
export { cn } from "@/lib/utils"

import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}