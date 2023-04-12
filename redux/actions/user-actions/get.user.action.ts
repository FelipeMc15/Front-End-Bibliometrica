import { LoginUser } from "app/login/models/login.models";
import axios from "axios";

export const GET_USER = "GET USER";

export function getUserAction(id:number){
    return async function() {
            const user = await axios(`http://localhost:3001/user/${id}`)
    }
}