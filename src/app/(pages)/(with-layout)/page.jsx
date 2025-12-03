import { DestinationByCategory, MostPopular } from "@/components/destinations";
import SearchBar from "@/components/search-bar";

export default async function Page() {
   return (
      <div>
         <div className="bg-primary/20 py-15 px-4 flex justify-center items-center">
            <SearchBar className="max-w-xl" inputClass="border-primary/40" />
         </div>
         <MostPopular />
         <DestinationByCategory />
      </div>
   );
}
