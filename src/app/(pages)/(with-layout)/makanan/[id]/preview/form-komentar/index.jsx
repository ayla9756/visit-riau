"use client";
import { Button } from "@/components/ui/button";
import { action } from "./action";
import { useState } from "react";
import { InputRating, InputText, InputTextarea } from "@/components/input";
import { toastAlert } from "@/lib/utils";

export default function FormKomentar({ makananId }) {
   const [form, setForm] = useState({ makananId });
   const [errors, setErrors] = useState({});
   const [loading, setLoading] = useState(false);

   return (
      <div className="space-y-6">
         <h2 className="text-lg">Ulasan Anda</h2>
         <form onSubmit={submit} className="space-y-4">
            <div className="space-y-2">
               <InputText
                  label="Nama"
                  name="nama"
                  value={form?.nama}
                  setValue={setForm}
                  errors={errors}
               />
               <InputRating
                  label="Rating"
                  name="rating"
                  value={form?.rating}
                  setValue={setForm}
                  errors={errors}
               />
               <InputText
                  label="Email"
                  name="email"
                  value={form?.email}
                  setValue={setForm}
                  errors={errors}
               />
               <InputTextarea
                  label="Komentar"
                  name="komentar"
                  value={form?.komentar}
                  setValue={setForm}
                  errors={errors}
               />
            </div>
            <Button disabled={loading}>{loading ? "Mengirim" : "Kirim"}</Button>
         </form>
      </div>
   );
   async function submit(e) {
      e.preventDefault();
      setLoading(true);

      const res = await action({ ...form, rating: Number(form?.rating) });

      if (!res.success) {
         setErrors(res.errors);
         toastAlert("error", "Ulasan gagal dikirim");
         setLoading(false);

         return;
      }

      toastAlert("success", "Ulasan berhasil dikirim");
      setForm({ makananId });
      setErrors({});
      setLoading(false);
   }
}
