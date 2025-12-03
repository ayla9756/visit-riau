"use client";

import { useAuthStore } from "@/store/auth";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { PencilIcon, TrashIcon } from "lucide-react";

export function TambahMakanan() {
   const { isLoggedIn } = useAuthStore();

   if (!isLoggedIn) return null;

   return (
      <Link href="/makanan/new/form" className={buttonVariants()}>
         Tambah
      </Link>
   );
}

export function EditMakanan({ id }) {
   const { isLoggedIn } = useAuthStore();

   if (!isLoggedIn) return null;

   return (
      <Link
         href={`/makanan/${id}/form`}
         className={buttonVariants({ variant: "outline", size: "icon" })}
      >
         <PencilIcon className="size-4" />
      </Link>
   );
}

export function HapusMakanan() {
   const { isLoggedIn } = useAuthStore();

   if (!isLoggedIn) return null;

   return (
      <Button variant="destructive" size="icon">
         <TrashIcon className="size-4" />
      </Button>
   );
}
