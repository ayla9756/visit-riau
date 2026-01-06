import { MakananByCategory, MostPopular } from "@/components/makanan";
import SearchBar from "@/components/search-bar";

export default async function Page() {
   return (
      <div>
         <div className="bg-linear-180 from-primary/20 to-background py-15 px-4 flex flex-col gap-6 justify-center items-center">
            <h1 className="text-3xl">Mengenal Budaya Lewat Hidangan</h1>
            <SearchBar className="max-w-xl" inputClass="border-primary/40" />
         </div>
         <MostPopular />
         <MakananByCategory />
      </div>
   );
}
