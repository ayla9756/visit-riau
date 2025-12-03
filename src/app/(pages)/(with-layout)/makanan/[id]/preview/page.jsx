import MapEmbed from "@/components/map";
import { getFood, getFoodById } from "@/lib/query";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getFoodMetadata } from "@/lib/metadata";
import FormKomentar from "./form-komentar";
import { format } from "date-fns";
import { EditMakanan } from "@/components/button/form-button";
import { StarIcon } from "lucide-react";

export async function generateMetadata({ params }) {
   const { id } = await params;
   return await getFoodMetadata(id);
}

export async function generateStaticParams() {
   const res = await getFood({ limit: 10 });
   const { data = [] } = res;
   return data.map((dt) => ({
      id: dt.id.toString(),
   }));
}

export default async function Page({ params }) {
   const { id } = await params;
   const data = await getFoodById(id, "add-view");

   if (!data) {
      notFound();
   }

   return (
      <div className="container mx-auto px-4 py-8 max-w-6xl">
         {/* Header Section */}
         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
            <div className="flex-1">
               <h1 className="text-3xl lg:text-4xl font-bold mb-2">
                  {data.nama}
               </h1>
            </div>
            <EditMakanan id={data.id} />
         </div>

         {/* Gallery Section */}
         {data.images && data.images.length > 0 && (
            <div className="mb-8">
               {data.images.length === 1 ? (
                  // Single Image
                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden">
                     <Image
                        src={data.images[0]?.imageUrl}
                        alt={data.nama}
                        fill
                        className="object-cover"
                        priority
                     />
                  </div>
               ) : (
                  // Multiple Images Grid
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                     {data.images.map((dt, index) => (
                        <div
                           key={index}
                           className="relative aspect-video rounded-xl overflow-hidden"
                        >
                           <Image
                              src={dt.imageUrl}
                              alt={`${data.nama} - Gambar ${index + 1}`}
                              fill
                              sizes="100%"
                              className="object-cover hover:scale-105 transition-transform duration-300"
                           />
                        </div>
                     ))}
                  </div>
               )}
            </div>
         )}

         {/* Content Grid */}
         <div className="grid gap-8">
            {/* Main Content */}
            <div className="space-y-6">
               {/* Description */}
               <section className="bg-card rounded-2xl p-6 shadow-sm border">
                  <h2 className="text-xl font-semibold mb-4">Deskripsi</h2>
                  <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed">
                     {data.deskripsi ? (
                        <p className="whitespace-pre-line">{data.deskripsi}</p>
                     ) : (
                        <p className="text-gray-500 italic">
                           Tidak ada deskripsi tersedia.
                        </p>
                     )}
                  </div>
               </section>
               <div className="text-primary">Asal Makanan : {data?.asal}</div>
               <div className="bg-blue-400 text-white rounded-full py-1 px-4 w-fit">
                  {data?.kategori?.nama}
               </div>
            </div>

            {/* Sidebar */}
            <div className="grid gap-6">
               {/* Map Section */}

               <section className="space-y-4">
                  <div className="grid grid-cols-2 gap-6">
                     <FormKomentar makananId={data?.id} />
                     <div className="space-y-4">
                        <h1 className="text-xl">Ulasan</h1>
                        <div className="space-y-2">
                           {data?.reviews?.length > 0
                              ? data?.reviews?.map((dt, i) => (
                                   <div
                                      key={i}
                                      className="bg-card p-4 rounded-lg space-y-1"
                                   >
                                      <div className="flex">
                                         {[...Array(dt.rating || 0)].map(
                                            (_, index) => {
                                               return (
                                                  <StarIcon
                                                     className="text-amber-600 size-4"
                                                     key={index}
                                                  />
                                               );
                                            }
                                         )}
                                      </div>
                                      <div className="text-xs text-foreground/50">
                                         {format(dt.createdAt, "dd/M/yyyy")}
                                      </div>
                                      <div className="font-semibold">
                                         {dt.nama}
                                      </div>
                                      <div className="text-sm text-foreground/80">
                                         {dt.komentar}
                                      </div>
                                   </div>
                                ))
                              : "Belum ada komentar terkait makanan ini"}
                        </div>
                     </div>
                  </div>
               </section>
            </div>
         </div>
      </div>
   );
}
