import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useGetCurrentUser, useUpdateUser } from "@/api/userApi"
import { useEffect } from "react"
import { Loader2 } from "lucide-react"

const UserProfile = () => {

    const {currentUser, isLoading} = useGetCurrentUser()
    const {updateUser, isLoading:isLoadingUpdate} = useUpdateUser();

    const formSchema = z.object({
        email: z.string({invalid_type_error: "letters and numbers only"}).min(0).max(25,{message:"The maximum number of characters is 25"}).optional(),
        name: z.string({invalid_type_error:"letters and numbers only"}).min(0).max(25,{message:"The maximum number of characters is 25"}).optional(),
        addressLine1: z.string({invalid_type_error:"letters and numbers only"}).min(0).max(25,{message:"The maximum number of characters is 25"}).optional(),
        city: z.string({invalid_type_error:"letters and numbers only"}).min(0).max(25,{message:"The maximum number of characters is 25"}).optional(),
        country: z.string({invalid_type_error:"letters and numbers only"}).min(0).max(25,{message:"The maximum number of characters is 25"}).optional(),
    })

    type FormSchemaType = z.infer<typeof formSchema>

    const form = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema),
        defaultValues:currentUser
    })

    useEffect(()=>{
      form.reset(currentUser)
    },[currentUser,form])


    if(isLoading){
      return <div>Your data is loading...</div>
    }

    
  return (
    <Form {...form}>
       <form className="min-w-56 container mx-auto bg-gray-200 " onSubmit={form.handleSubmit((data)=>{updateUser(data)})}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email: </FormLabel>
              <FormControl>
                <Input readOnly placeholder="Enter email.." {...field} className="text-gray-500" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username:</FormLabel>
              <FormControl>
                <Input placeholder="Enter name.." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="addressLine1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address:</FormLabel>
              <FormControl>
                <Input placeholder="Enter address.." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col gap-1 [&>*]:flex-1 sm:flex-row">
            <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Country:</FormLabel>
                <FormControl>
                    <Input placeholder="Enter country..." {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>City: </FormLabel>
                    <FormControl>
                    <Input placeholder="Enter city..." {...field}/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
        </div>
        {
          isLoadingUpdate?
          <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
          :
          <Button className="m-4" type="submit">Submit</Button>
        }
        </form>
    </Form>
  )
}

export default UserProfile

