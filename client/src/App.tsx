// import { useAppDispatch, useAppSelector } from "./app/hooks";
// import { loginUser } from "./features/auth/authSlice";

import { useEffect } from "react"
import { useAppDispatch } from "./app/hooks"
import Login from "./pages/auth/Login"
import { getDataAfterRefresh } from "./features/auth/authSlice"
import Logout from "./components/common/Logout"

// function App() {
//   const dispatch = useAppDispatch();

//   const { user, isAuthenticated, loading, error } = useAppSelector(
//     (state) => state.auth
//   );

//   return (
//     <div>
//       <button
//         onClick={() =>
//           dispatch(
//             loginUser({
//               email: "test@example.com",
//               password: "12345678",
//             })
//           )
//         }
//       >
//         Test Login
//       </button>

//       {loading && <p>Loading...</p>}
//       {error && <p>{error}</p>}

//       {isAuthenticated && user && (
//         <p>Welcome, {user.name}</p>
//       )}
//     </div>
//   );
// }

// export default App;





const App = () => {

  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(getDataAfterRefresh())
  },[dispatch])
  return (
    <div>
      <Login/>
      <Logout/>
    </div>
  )
}

export default App
