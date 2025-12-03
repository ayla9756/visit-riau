import { requiredEmail, requiredField } from "@/lib/validator";
import { z } from "zod";

export const Schema = z.object({
   makananId: requiredField("makanan"),
   nama: requiredField("Nama"),
   rating: z.number().min(1, "Rating harus diisi"),
   email: requiredEmail("Email"),
   komentar: requiredField("Komentar"),
});
