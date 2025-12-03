"use client";
import { AccountButton, ToggleTheme } from "@/components/button";
import { Button, buttonVariants } from "@/components/ui/button";
import { useNavigate } from "@/hooks/use-navigate";
import { SITE_NAME } from "@/lib/env";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/auth";
import { MapPin, MoreHorizontalIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "../logo";

export default function Header() {
   const { isLoggedIn, isLoading } = useAuthStore();
   const navigate = useNavigate();
   const [isScrolled, setIsScrolled] = useState(false);
   const pathname = usePathname();
   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 10);
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();

      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <header
         className={cn(
            "sticky top-0 z-50 transition-all duration-300 bg-gradient-to-b from-primary/70 to-primary/30 backdrop-blur-md shadow-lg"
         )}
      >
         <div className="flex justify-between gap-4 max-w-6xl mx-auto items-center px-4 py-5">
            <Link
               href="/"
               className={cn(
                  "cursor-pointer text-lg font-bold text-black inline-flex items-center gap-2"
               )}
            >
               <Logo className="size-10" /> {SITE_NAME}
            </Link>
            <div className="flex gap-3 items-center">
               <ToggleTheme />
               {isLoading ? (
                  <Button variant="outline" size="icon" disabled>
                     <MoreHorizontalIcon />
                  </Button>
               ) : isLoggedIn ? (
                  <AccountButton />
               ) : (
                  <Button
                     className={cn(
                        "rounded-full border px-4 bg-transparent",
                        isScrolled
                           ? "border-primary text-primary hover:text-primary-foreground"
                           : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                     )}
                     onClick={() => navigate("/login")}
                  >
                     Login
                  </Button>
               )}
            </div>
         </div>
      </header>
   );
}
