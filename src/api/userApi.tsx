import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { UserType } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "sonner";

const userInstance = axios.create({
    baseURL: import.meta.env.VITE_USER_API_BASE_URL

}) 

export const useGetCurrentUser = () => {
    const {getAccessTokenSilently} = useAuth0()

    const getCurrentUserReq = async () => {
       
            const tokenAccess = await getAccessTokenSilently()
            const response = await userInstance.get('/api/v1/my/user/',{
            headers: {
            Authorization: `Bearer ${tokenAccess}`,
            'Content-Type': 'application/json'    
            }})

            if(!response.data){
                throw new Error("We didn't fetch The user")
            }

            return response.data
            
    
   
    }

    const {
        data: currentUser,
        isLoading,
        error
    } = useQuery("fetchCurrentUser", getCurrentUserReq);
    console.log("hello")
    if(error){
        toast.error(error.toString())
        console.log("There's error")
    }

    return{
        currentUser,
        isLoading,
        error
    }

}


export const useCreateUser = () => {
    const {getAccessTokenSilently}= useAuth0()
    const createUserReq = async (user: UserType) => {
        try {
            const tokenAccess = await getAccessTokenSilently();
            const response = await userInstance.post('/api/v1/my/user/', user,{
            headers: {
            Authorization: `Bearer ${tokenAccess}`,
            'Content-Type': 'application/json'    
            }})
            console.log('response: ',response)
        } catch (error) {
            console.log(error)
        }
    }

    const {mutateAsync: createUser,
        isError,
        isLoading, 
        isSuccess
    } = useMutation(createUserReq)

    return {
        createUser,
        isError,
        isLoading,
        isSuccess
    }
}

type UpdateDataType = {
    name?:string,
    addressLine1?: string,
    city?: string,
    country?: string
}

export const useUpdateUser = () =>{
    const {getAccessTokenSilently} = useAuth0();

    const updateUserRequest = async (data:UpdateDataType) => {
        const tokenAccess = await getAccessTokenSilently();
        const response = await userInstance.put('/api/v1/my/user/',data,{
            headers: {
            Authorization: `Bearer ${tokenAccess}`,
            'Content-Type': 'application/json'    
            }})

            return response.data
    }

    const {
        mutateAsync: updateUser,
        isLoading,
        error,
        isSuccess, 
        reset
    } = useMutation(updateUserRequest)

    if(isSuccess){
        toast.success("User's information updated")
        reset()
    }

    if(error){
        toast.error(error.toString())
        reset()
    }

    return {updateUser, isLoading}
}

