/*
    * checks token
    * validates token with backend
    * restores user session
    * logs out invalid users automatically
*/
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { jwtDecode } from "jwt-decode";
import { getCurrentUser } from "../api/auth";
import {
  setCredentials,
  setAuthInitialized,
  logout,
} from "../store/slices/authSlice"

const useAuthInit = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem("token")
      if (token){
        try {
          //get user from from server
          const response = await getCurrentUser()
          const user = response.data;

          // Optional expiration check
          /*if (user.exp * 1000 < Date.now()) {
            localStorage.removeItem("token");
            dispatch(logout());
            return;
          }*/
      
          dispatch(setCredentials({user,token}));
        } catch (error) {
          dispatch(logout())
        }finally {
          dispatch(setAuthInitialized());
        }
      } else {
        dispatch(setAuthInitialized());
        return;
      }
    }

    initializeAuth()
  }, [dispatch])
}

export default useAuthInit