import { useAuthStore } from "@/store/auth";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header({ user }) {
   const { logout } = useAuthStore();
   return (
      <header className="flex justify-between w-full bg-amber-300 px-6 py-4">
         <div>Logo</div>
         <div className="flex">
            <DropdownMenu>
               <DropdownMenuTrigger>{user?.name}</DropdownMenuTrigger>
               <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
               </DropdownMenuContent>
            </DropdownMenu>
         </div>
      </header>
   );
}
