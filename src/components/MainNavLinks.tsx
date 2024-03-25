import { Link } from "react-router-dom"
import UsernameMenu from "./UsernameMenu"
import { useAuth0 } from "@auth0/auth0-react"


const MainNavLinks = () => {
    const {loginWithRedirect, isAuthenticated} = useAuth0();

  return (
    <div className="hidden sm:block">
        {
            isAuthenticated?
            <div className="flex items-center gap-2">

                <Link to='/order-status'>
                <button>Order Status</button>
            </Link>
            <UsernameMenu/>
            </div>:
             <button className="hidden sm:block" onClick={()=>loginWithRedirect()}>Log in</button>
        }
        
       
    </div>
  )
}

export default MainNavLinks