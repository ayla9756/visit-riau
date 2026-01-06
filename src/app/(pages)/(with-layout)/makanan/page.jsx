import { getFood } from "@/lib/query";
import Data from "./data";
import { withMetadata } from "@/lib/metadata";
import SearchBar from "@/components/search-bar";
import { TambahMakanan } from "@/components/button/form-button";

export const generateMetadata = withMetadata("Makanan");

export default async function Page({ searchParams }) {
   const { search, page, limit, kategori } = await searchParams;

   const query = await getFood({ search, page, limit, kategori });

   return (
      <div className="max-w-6xl mx-auto w-full space-y-4 p-8">
         <div className="flex justify-between gap-4">
            <h1 className="text-xl">Galeri Kuliner</h1>
            <TambahMakanan />
         </div>
         <div>{kategori && `Kategori : ${kategori}`} </div>
         <SearchBar />
         <Data query={query} />
      </div>
   );
}
