// import { User } from 'lucide-react'
// // import React from 'react'
// // import { useSearchParams } from 'react-router-dom'
// import { useAppSelector } from '../../app/hooks'

// const Setting = () => {
//   const {user} = useAppSelector((state)=>state.auth)
//   return (
//     <div className='flex  items-center justify-center bg-gray-900 w-full h-screen'>
//       <div className='flex flex-col'>
//         <div className='w-sm border border-gray-400 rounded-lg'>
//           <div className='flex flex-col p-4 items-center pt-10'>
//             <span className='w-10 h-10 rounded-full bg-blue-500 text-center'><User /></span>
//             <span>{user.name}</span>
//           </div>
//         </div>
//         {/** old name */}
//         <div>
//           <input type="text" />
//         </div>

//         {/**change nme */}
//         <div>
//           <input type="text" />
//         </div>        
//       </div>
//     </div>
//   )
// }

// export default Setting




import { User } from 'lucide-react'
import {useState} from 'react'
// import { useSearchParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { userNameUpdate } from '../../features/auth/authSlice'
// import { updateUserName } from '../../features/auth/authSlice'
// import { saveUser } from '../../services/auth/authLocalStorage'
// import { useActionData } from 'react-router-dom'

const Setting = () => {
  const {user} = useAppSelector((state)=>state.auth)

  const [change,setChange] = useState("")

  const dispatch = useAppDispatch()
  const handleChange = ()=>{
    dispatch((userNameUpdate({userId:user.id,newName:change})))
    setChange("")

  }
   return (
    <div className='flex items-center justify-center bg-gray-900 w-full min-h-screen p-4'>
      <div className='flex flex-col w-full max-w-sm'>
        {/** profile card */}
        <div className='w-full border border-gray-400 rounded-lg bg-gray-800'>
          <div className='flex flex-col p-6 items-center gap-2'>
            <span className='w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center'>
              <User className='text-white w-7 h-7' />
            </span>
            <span className='text-white text-lg font-semibold'>{user?.name}</span>
            <span className='text-gray-400 text-sm'>{user?.email}</span>
          </div>
        </div>

        {/** edit form */}
        <div className='w-full border border-gray-400 rounded-lg bg-gray-800 mt-4 p-6 flex flex-col gap-4'>
          <h2 className='text-white text-base font-semibold mb-1'>Edit Profile</h2>

          {/** old name */}
          <div className='flex flex-col gap-1'>
            <label className='text-gray-300 text-sm'>Current Name</label>
            <input
              type="text"
              disabled
              value={user?.name ?? ""}
              className='bg-gray-700 text-gray-400 rounded-md px-3 py-2 text-sm border border-gray-600 cursor-not-allowed'
            />
          </div>

          {/** change name */}
          <div className='flex flex-col gap-1'>
            <label className='text-gray-300 text-sm'>New Name</label>
            <input
              type="text"
              value={change}
              onChange={(e)=>setChange(e.target.value)}
              placeholder="Enter new name"
              className='bg-gray-700 text-white rounded-md px-3 py-2 text-sm border border-gray-600 focus:outline-none focus:border-blue-500'
            />
            
          </div>

          <button 
          onClick={handleChange}
          type="submit" className='mt-2 bg-blue-500 hover:bg-blue-600 transition-colors text-white text-sm font-medium rounded-md py-2'>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}

export default Setting