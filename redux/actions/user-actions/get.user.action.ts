// import { LoginUser } from "app/login/models/login.models";
import axios from "axios";
import { Dispatch } from "redux";

export const GET_USER = "GET USER";

export function getUserAction(id:number){
    return async function(dispatch: Dispatch){
        const user = await axios(`http://localhost:3001/user/${id}`)
        if(!localStorage.getItem("user")){
            localStorage.setItem("user",JSON.stringify(user.data))
        }
        //return dispatch({type:GET_USER,payload:user.data})
    }
}