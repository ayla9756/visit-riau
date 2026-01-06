"use server";

import { revalidatePath } from "next/cache";
import prisma from "./prisma";

export async function deleteMakanan(id) {
   const images = await prisma.image.findMany({
      where: {
         makananId: id,
      },
      select: {
         fileId: true,
      },
   });

   try {
      await fetch("/api/image/delete-many", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            fileIds: images.map((img) => img.fileId),
         }),
      });
   } catch (error) {
      console.log("error delete", error);
   }

   await prisma.makanan.delete({
      where: { id },
   });

   revalidatePath("/makanan");
}

export async function deleteKategori(id) {
   await prisma.kategori.delete({
      where: { id },
   });

   revalidatePath("/kategori");
}
