// import { useAppDispatch, useAppSelector } from "./app/hooks";
// import { loginUser } from "./features/auth/authSlice";

import Login from "./pages/auth/Login"

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
  return (
    <div>
      <Login/>
    </div>
  )
}

export default App
