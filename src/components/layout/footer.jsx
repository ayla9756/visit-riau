import Link from "next/link";
import {
   Facebook,
   Instagram,
   Youtube,
   Heart,
   ChefHat,
   Utensils,
   MapPin,
   Phone,
   Mail,
   Leaf,
   Coffee,
   Salad,
   Clock,
} from "lucide-react";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/env";
import Logo from "../logo";

export default function Footer() {
   const currentYear = new Date().getFullYear();
   const primaryColor = "#5ea500";
   const primaryHover = "#4d8500";

   return (
      <footer
         className="relative bg-gradient-to-b from-[#0a2000] to-[#0c2900] text-white overflow-hidden border-t-2"
         style={{ borderColor: primaryColor }}
      >
         {/* Decorative top border */}
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5ea500] via-[#7bc62e] to-[#9de95c]"></div>

         {/* Floating decorative elements */}
         <div className="absolute top-10 right-10 opacity-10">
            <Leaf className="w-24 h-24" style={{ color: primaryColor }} />
         </div>
         <div className="absolute bottom-10 left-10 opacity-10">
            <ChefHat className="w-20 h-20" style={{ color: primaryColor }} />
         </div>

         <div className="max-w-7xl w-full mx-auto px-4 py-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
               {/* Brand Column */}
               <div className="lg:col-span-5">
                  <div className="flex items-start gap-4 mb-6">
                     <div
                        className="p-3 backdrop-blur-sm rounded-xl border"
                        style={{
                           backgroundColor: "rgba(94, 165, 0, 0.1)",
                           borderColor: "rgba(94, 165, 0, 0.3)",
                        }}
                     >
                        <Logo className="size-16" />
                     </div>
                     <div>
                        <h2
                           className="text-2xl font-bold"
                           style={{ color: primaryColor }}
                        >
                           {SITE_NAME}
                        </h2>
                        <p className="text-sm text-[#c6f0a3] mt-1">
                           {SITE_DESCRIPTION}
                        </p>
                     </div>
                  </div>
                  <p className="text-[#e8ffd4] mb-6 leading-relaxed">
                     Jelajahi kekayaan kuliner Riau yang autentik. Temukan cita
                     rasa Melayu yang segar dan alami, dengan bahan-bahan
                     pilihan lokal berkualitas.
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-3 mb-6">
                     <div className="flex items-center gap-3 text-[#e8ffd4]">
                        <MapPin
                           className="w-5 h-5"
                           style={{ color: primaryColor }}
                        />
                        <span className="text-sm">
                           Pekanbaru, Riau - Surga Kuliner Organik
                        </span>
                     </div>
                     <div className="flex items-center gap-3 text-[#e8ffd4]">
                        <Phone
                           className="w-5 h-5"
                           style={{ color: primaryColor }}
                        />
                        <span className="text-sm">
                           +62 812 3456 7890 (Reservasi)
                        </span>
                     </div>
                     <div className="flex items-center gap-3 text-[#e8ffd4]">
                        <Mail
                           className="w-5 h-5"
                           style={{ color: primaryColor }}
                        />
                        <span className="text-sm">hello@kulinerriau.com</span>
                     </div>
                     <div className="flex items-center gap-3 text-[#e8ffd4]">
                        <Clock
                           className="w-5 h-5"
                           style={{ color: primaryColor }}
                        />
                        <span className="text-sm">
                           Buka Setiap Hari 08:00 - 22:00
                        </span>
                     </div>
                  </div>

                  {/* Social Media */}
                  <div className="flex gap-3">
                     {[
                        {
                           icon: Facebook,
                           color: "hover:bg-[#5ea500]",
                           border: "rgba(94, 165, 0, 0.3)",
                           label: "Facebook",
                        },
                        {
                           icon: Instagram,
                           color: "hover:bg-gradient-to-br from-[#5ea500] to-[#3d6e00]",
                           border: "rgba(94, 165, 0, 0.3)",
                           label: "Instagram",
                        },
                        {
                           icon: Youtube,
                           color: "hover:bg-[#4d8500]",
                           border: "rgba(94, 165, 0, 0.3)",
                           label: "YouTube",
                        },
                     ].map((social) => (
                        <a
                           key={social.label}
                           href="#"
                           className={`p-3 backdrop-blur-sm rounded-xl border transition-all hover:scale-110 hover:shadow-lg`}
                           style={{
                              backgroundColor: "rgba(94, 165, 0, 0.1)",
                              borderColor: social.border,
                           }}
                           aria-label={social.label}
                        >
                           <social.icon className="w-5 h-5" />
                        </a>
                     ))}
                  </div>
               </div>

               {/* Links Columns */}
               {[
                  {
                     title: "Menu Organik",
                     icon: (
                        <Leaf
                           className="w-5 h-5 inline mr-2"
                           style={{ color: primaryColor }}
                        />
                     ),
                     links: [
                        {
                           label: "Gulai Ikan Patin Segar",
                           href: "/menu/gulai-patin",
                        },
                        {
                           label: "Sayur Asam Pucuk Pakis",
                           href: "/menu/sayur-asam",
                        },
                        {
                           label: "Pepes Daun Singkong",
                           href: "/menu/pepes-singkong",
                        },
                        {
                           label: "Sambal Terasi Lokal",
                           href: "/menu/sambal-terasi",
                        },
                        { label: "Jus Buah Tropis", href: "/menu/jus-buah" },
                     ],
                  },
                  {
                     title: "Restoran Hijau",
                     icon: (
                        <ChefHat
                           className="w-5 h-5 inline mr-2"
                           style={{ color: primaryColor }}
                        />
                     ),
                     links: [
                        {
                           label: "Restoran Ramah Lingkungan",
                           href: "/restoran/eco-friendly",
                        },
                        {
                           label: "Kafe Organik",
                           href: "/restoran/organic-cafe",
                        },
                        {
                           label: "Warung Tradisional",
                           href: "/restoran/warung",
                        },
                        {
                           label: "Fine Dining Lokal",
                           href: "/restoran/fine-dining",
                        },
                        {
                           label: "Konsep Farm to Table",
                           href: "/restoran/farm-to-table",
                        },
                     ],
                  },
                  {
                     title: "Layanan Fresh",
                     icon: (
                        <Salad
                           className="w-5 h-5 inline mr-2"
                           style={{ color: primaryColor }}
                        />
                     ),
                     links: [
                        { label: "Reservasi Online", href: "/reservasi" },
                        { label: "Catering Sehat", href: "/catering-sehat" },
                        {
                           label: "Kelas Memasak Organik",
                           href: "/kelas-memasak",
                        },
                        { label: "Tur Kuliner Lokal", href: "/tur-kuliner" },
                        {
                           label: "Delivery Bahan Segar",
                           href: "/delivery-bahan",
                        },
                     ],
                  },
               ].map((section, idx) => (
                  <div key={idx} className="lg:col-span-2">
                     <h3
                        className="text-lg font-semibold mb-6 flex items-center"
                        style={{ color: primaryColor }}
                     >
                        {section.icon}
                        {section.title}
                     </h3>
                     <ul className="space-y-3">
                        {section.links.map((link) => (
                           <li key={link.label}>
                              <Link
                                 href={link.href}
                                 className="text-[#c6f0a3] hover:text-[#5ea500] transition-all group flex items-center gap-2 hover:translate-x-1"
                              >
                                 <span
                                    className="w-0 h-0.5 transition-all group-hover:w-3"
                                    style={{ backgroundColor: primaryColor }}
                                 ></span>
                                 {link.label}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>

            {/* Newsletter Section */}
            <div
               className="mt-12 p-6 rounded-2xl backdrop-blur-sm border"
               style={{
                  backgroundColor: "rgba(94, 165, 0, 0.05)",
                  borderColor: "rgba(94, 165, 0, 0.2)",
               }}
            >
               <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                     <h3
                        className="text-xl font-bold mb-2"
                        style={{ color: primaryColor }}
                     >
                        🌱 Tetap Fresh dengan Kuliner Riau!
                     </h3>
                     <p className="text-[#e8ffd4]">
                        Dapatkan resep sehat, promo organik, dan event kuliner
                        ramah lingkungan
                     </p>
                  </div>
                  <div className="flex gap-2 w-full md:w-auto">
                     <input
                        type="email"
                        placeholder="Email kamu..."
                        className="px-4 py-3 rounded-xl text-white placeholder-[#9de95c] focus:outline-none focus:ring-2 focus:border-transparent flex-grow md:w-64"
                        style={{
                           backgroundColor: "rgba(12, 41, 0, 0.7)",
                           border: "1px solid rgba(94, 165, 0, 0.3)",
                           focusRingColor: primaryColor,
                        }}
                     />
                     <button
                        className="px-6 py-3 text-white font-semibold rounded-xl transition-all hover:scale-105"
                        style={{
                           backgroundColor: primaryColor,
                        }}
                        onMouseEnter={(e) =>
                           (e.currentTarget.style.backgroundColor =
                              primaryHover)
                        }
                        onMouseLeave={(e) =>
                           (e.currentTarget.style.backgroundColor =
                              primaryColor)
                        }
                     >
                        Subscribe
                     </button>
                  </div>
               </div>
            </div>

            {/* Bottom Section */}
            <div
               className="mt-12 pt-8"
               style={{ borderTop: "1px solid rgba(94, 165, 0, 0.3)" }}
            >
               <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="text-[#c6f0a3] text-sm flex items-center gap-2">
                     <span>
                        © {currentYear} {SITE_NAME}
                     </span>
                     <span className="hidden md:inline">•</span>
                     <span className="flex items-center gap-1">
                        Dibuat dengan
                        <Heart className="w-4 h-4 text-[#ff6b6b] fill-[#ff6b6b] mx-1" />
                        di Riau
                     </span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm">
                     <Link
                        href="/privacy"
                        className="text-[#c6f0a3] hover:text-[#5ea500] transition-colors hover:underline"
                     >
                        Kebijakan Privasi
                     </Link>
                     <Link
                        href="/terms"
                        className="text-[#c6f0a3] hover:text-[#5ea500] transition-colors hover:underline"
                     >
                        Syarat Layanan
                     </Link>
                     <Link
                        href="/sustainability"
                        className="text-[#c6f0a3] hover:text-[#5ea500] transition-colors hover:underline"
                     >
                        Komitmen Hijau
                     </Link>
                     <Link
                        href="/sitemap"
                        className="text-[#c6f0a3] hover:text-[#5ea500] transition-colors hover:underline"
                     >
                        Peta Situs
                     </Link>
                  </div>
               </div>
            </div>
         </div>

         {/* Decorative background elements */}
         <div
            className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-3xl"
            style={{
               backgroundColor: "rgba(94, 165, 0, 0.1)",
            }}
         ></div>
         <div
            className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full blur-3xl"
            style={{
               backgroundColor: "rgba(125, 198, 46, 0.1)",
            }}
         ></div>
      </footer>
   );
}
