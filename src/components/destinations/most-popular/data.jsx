"use client";
import Link from "next/link";
import { Star, Eye, MapPin } from "lucide-react";

export function Data({ query }) {
   const { data = [] } = query;

   if (!data || data.length === 0) return null;

   return (
      <div className="w-full max-w-6xl mx-auto px-4 py-6">
         <h1 className="mb-10 text-center text-xl font-semibold underline underline-offset-4">
            Most Popular
         </h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((makanan) => {
               const imageUrl = makanan.images?.[0]?.imageUrl;
               const approvedReviews = makanan.reviews || [];
               const avgRating =
                  approvedReviews.length > 0
                     ? approvedReviews.reduce(
                          (sum, r) => sum + (r.rating || 0),
                          0
                       ) / approvedReviews.length
                     : 0;

               return (
                  <Link
                     key={makanan.id}
                     href={`/makanan/${makanan.id}/preview`}
                     className="group relative overflow-hidden rounded-xl bg-white shadow hover:shadow-xl transition-shadow"
                  >
                     {/* Image */}
                     <div className="aspect-video overflow-hidden">
                        <img
                           src={
                              imageUrl ||
                              "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop"
                           }
                           alt={makanan.nama}
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                        {/* Top Info */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                           {makanan.kategori && (
                              <span className="px-2 py-1 bg-black/70 text-white text-xs rounded">
                                 {makanan.kategori.nama}
                              </span>
                           )}
                           <div className="flex items-center gap-1 text-white text-xs">
                              <Eye className="w-3 h-3" />
                              <span>{makanan.view || 0}</span>
                           </div>
                        </div>
                     </div>

                     {/* Content */}
                     <div className="p-4">
                        <div className="mb-2">
                           <h3 className="font-semibold text-gray-900 line-clamp-1">
                              {makanan.nama}
                           </h3>
                           {makanan.asal && (
                              <div className="flex items-center gap-1 text-gray-600 text-sm mt-1">
                                 <MapPin className="w-3 h-3" />
                                 <span>{makanan.asal}</span>
                              </div>
                           )}
                        </div>

                        <div className="flex items-center justify-between">
                           {/* Rating */}
                           {avgRating > 0 ? (
                              <div className="flex items-center gap-1">
                                 <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                 <span className="text-sm font-medium text-black">
                                    {avgRating.toFixed(1)}
                                 </span>
                                 <span className="text-gray-500 text-xs">
                                    ({approvedReviews.length})
                                 </span>
                              </div>
                           ) : (
                              <span className="text-gray-400 text-sm">
                                 Belum ada rating
                              </span>
                           )}

                           {/* View More */}
                           <span className="text-amber-600 text-sm font-medium group-hover:underline">
                              Lihat →
                           </span>
                        </div>
                     </div>
                  </Link>
               );
            })}
         </div>
      </div>
   );
}
