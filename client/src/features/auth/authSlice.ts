import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import type { shapeOfAuth } from "./authTypes";
import { login, register } from "../../services/authApi";
import { getSavedUser, logout, saveUser } from "../../services/authLocalStorage";


const initialState :shapeOfAuth = {
    user:null,
    isAuthenticated:false,
    loading:false,
    error:null,
    authInitialized:false
}

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }: { email: string; password: string }) => {
    const user = login(email, password);
    return user;
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({name,email,password}:{ email: string; password: string ; name:string})=>{
     const newUser = register(name,email,password)
  return newUser
  }
 
)

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{

      getDataAfterRefresh:(state)=>{
        const user = getSavedUser()

        if(user){
          state.user = user
          state.isAuthenticated = true
        }
          state.authInitialized = true
      },

      removeData:(state)=>{
        logout()
          state.user = null;
          state.isAuthenticated = false;
      },


    },

      extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
    state.loading = true;
    state.error = null;
  });

  builder.addCase(loginUser.fulfilled, (state, action) => {
  state.loading = false;
  state.user = action.payload;
  state.isAuthenticated = true;

  saveUser(action.payload)
});

builder.addCase(loginUser.rejected, (state, action) => {
  state.loading = false;
  state.error = action.error.message || "Login failed";
  state.isAuthenticated = false;
});

builder.addCase(registerUser.pending,(state)=>{
  state.loading = true
  state.error = null
})

 builder.addCase(registerUser.fulfilled, (state, action) => {
  state.loading = false;
  state.user = action.payload;
  state.isAuthenticated = true;

  saveUser(action.payload)
});

builder.addCase(registerUser.rejected, (state, action) => {
  state.loading = false;
  state.error = action.error.message || "Registration failed";
  state.isAuthenticated = false;
});
  },

  
  
})

export const {getDataAfterRefresh,removeData}  = authSlice.actions
export default authSlice.reducer;


