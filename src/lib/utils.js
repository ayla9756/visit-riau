import { clsx } from "clsx";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function toastAlert(status = "success", message) {
  const defaultMessage = status === "success" ? "Berhasil" : "Gagal";
  toast[status](message || defaultMessage);
}

export function numberFormat(value) {
  if (!value) return 0;
  return new Intl.NumberFormat("id-ID").format(value);
}

export function strToUnderscore(text) {
  return text
    .toLowerCase() // lowercase semua huruf
    .replace(/[^\w\s-]/g, "") // hapus karakter aneh (selain huruf/angka/spasi)
    .replace(/\s+/g, "_") // ganti spasi jadi underscore
    .replace(/_+/g, "_") // hindari underscore berlebih
    .trim(); // hapus spasi di awal/akhir jika ada
}

export function slugToTitle(slug) {
  if (!slug) return null;
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
