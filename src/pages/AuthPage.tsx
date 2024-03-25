import { useCreateUser } from "@/api/userApi"
import { useAuth0 } from "@auth0/auth0-react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const AuthPage = () => {

    const navigate = useNavigate()
    const {user} = useAuth0();
    const {createUser} = useCreateUser()


    useEffect(()=>{
        createUser({auth0Id:user?.sub as string, email:user?.email as string})
        navigate("/")
    },[createUser, user?.email, user?.sub, navigate])
    
  return (
    <div>Loading...</div>
  )
}

export default AuthPage