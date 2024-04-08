import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
export function ImgBaseUrl(id) {
  if (id && id.indexOf('http') === 0) {
    return id;
  }
  const ImgUrl = `https://outmaker.b-cdn.net/${id}`;
  return ImgUrl; // Return inside the function
};