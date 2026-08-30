
import { ArrowRight } from 'lucide-react'
import { useAppDispatch } from '../../app/hooks'
import { removeData } from '../../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const handleLogout = ()=>{
        dispatch(removeData())
        navigate("/login")
    }
  return (
    <div className='relative'>
       <button type="button" className='text-white font-bold bg-red-500 hover:bg-red-600 cursor-pointer p-2 px-4 md:px-12 rounded-lg' onClick={handleLogout}>
        <span className='text-sm md:text-xl'>Logout</span>
       </button> 
        <span className='absolute top-2 right-4 text-white hidden md:block1'><ArrowRight/></span> 
    </div>
  )
}

export default Logout
