import landing from '../assets/landing.png'
import appDownload from '../assets/appDownload.png'
import { useLocation } from 'react-router-dom'
import { toast } from 'sonner'

const Home = () => {
    const {state} = useLocation()
    // console.log(location)
    if(state && state?.message){
        toast.warning(state.message)
       }
  return (
    <div className='flex flex-col items-center'>
        <div className='bg-white shadow-md p-4 flex flex-col gap-4 rounded-xl -mt-10 '>
            <p className='text-center text-orange-500 font-bold'>Enter your city here!</p>
            <form action="" className='flex gap-2'>
            <input type="text" placeholder='Type city here ...' className='p-2 border-orange-500 border-2 rounded-xl'/>
            <button className='bg-orange-500 text-white p-2 rounded-xl'>Search</button>
            </form>
        </div>
        <div className='flex flex-1 flex-col items-center sm:flex-row p-2 gap-4'>
            <div className='max-w-[700px]'>
                <img src={landing} alt="" />
            </div>
            <div>
                <img src={appDownload} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home