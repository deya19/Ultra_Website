import { errorUser, startUser, successUser } from "./webSlice"
import axios from "axios"


export const addUser = async (web , dispatch) =>{
     dispatch(startUser())
     try{
      const res = await axios.post("http://localhost:4000/api/users",web);
       console.log(res.data);
      dispatch(successUser(res.data))

     }catch (err){
        dispatch(errorUser())
     }
}