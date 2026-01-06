import { getCategories } from "@/lib/query";
import Data from "./data";

export async function MakananByCategory() {
   const query = await getCategories({});

   return <Data query={query} />;
}
