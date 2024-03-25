import { useAuth0 } from "@auth0/auth0-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem,   
DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";


{/*  */}

const UsernameMenu = () => {
  const {user, logout}= useAuth0();
  
  return (
    <DropdownMenu>
        <DropdownMenuTrigger className="gap-2 items-center hidden sm:flex"><Avatar><AvatarFallback>{(user?.family_name?.charAt(0)?.toUpperCase() as string)+(user?.given_name?.charAt(0)?.toUpperCase())}</AvatarFallback></Avatar>{user?.email}</DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link  to="/user-profile">
                <Button variant="link" className="text-xl text-orange-500">
                  user-profile
                </Button>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button variant="outline" className="border-orange-500 text-orange-500 hover:border-white hover:text-white hover:bg-orange-500" onClick={()=>logout()}>Log out</Button>
            </DropdownMenuItem>
            
        </DropdownMenuContent>  
    </DropdownMenu>
  )
}

export default UsernameMenu