
import { useAppDispatch } from '../../app/hooks'
import { removeData } from '../../features/auth/authSlice'

const Logout = () => {
    const dispatch = useAppDispatch()
    const handleLogout = ()=>{
        dispatch(removeData())

    }
  return (
    <div>
       <button type="button" className='text-white font-bold bg-red-500 hover:bg-red-600 cursor-pointer ' onClick={handleLogout}>
        Logout
       </button>
    </div>
  )
}

export default Logout
