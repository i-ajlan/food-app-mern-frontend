import { useAuth0 } from "@auth0/auth0-react"
import { Navigate, Outlet } from "react-router-dom"




const ProtectedRoute = () => {
    
    const {isAuthenticated, isLoading} = useAuth0();

    if(isLoading){
        return null;
    }

    if(isAuthenticated){
        
        return <Outlet/>
    }
    return (
        <Navigate to='/' replace state={{message:'Log in or sign in before accessing this page'}}/>
        // <Navigate to='/'/>
  )
}

export default ProtectedRoute