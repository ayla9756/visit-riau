"use client";
import EmptyData from "@/components/empty-data";
import { HapusKategori } from "@/components/button/form-kategori";

export default function Data({ data = [] }) {
   return (
      <div className="space-y-2 w-full max-w-lg mx-auto">
         {data?.length > 0 ? (
            data?.map((item, i) => (
               <div
                  key={i}
                  className="border p-4 rounded-lg flex justify-between gap-4"
               >
                  <div>{item.nama}</div>
                  <HapusKategori id={item.id} />
               </div>
            ))
         ) : (
            <EmptyData />
         )}
      </div>
   );
}
