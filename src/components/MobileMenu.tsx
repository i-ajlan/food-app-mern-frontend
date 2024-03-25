import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from './ui/separator';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

 
const MobileMenu = () => {
  const {isAuthenticated, logout} = useAuth0();

  return (
    <div className='sm:hidden'>
    <Sheet>
  <SheetTrigger><Menu/></SheetTrigger>
  <SheetContent className='flex flex-col items-center text-orange-500'>
    <SheetHeader>
      <SheetTitle className='text-inherit text-2xl'>Menu</SheetTitle>
      <SheetDescription className='text-inherit'>
        Click On The button to Log in or Sign up
      </SheetDescription>
    </SheetHeader>
    <Separator />
    {isAuthenticated?
    <div className='flex flex-col'>
        <Link to='/order-status'>
                <Button variant="link" className="text-xl text-orange-500">
        Order Status
        </Button>
            </Link>
      <Link to="/user-profile">
        <Button variant="link" className="text-xl text-orange-500">
        user-profile
        </Button>
      </Link>

      <Button variant="outline" className="mt-4 border-orange-500 text-orange-500 hover:border-white hover:text-white hover:bg-orange-500" onClick={()=>logout()}>Log out</Button>
    </div>
    :<button className="text-white bg-orange-500 p-2 rounded-xl">Log in</button>}
  </SheetContent>
</Sheet>
    </div>

  )
}

export default MobileMenu