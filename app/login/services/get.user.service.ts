import axios from "axios"
import { InputsLogin } from "../models/login.models"
export async function getUserAction(formData:InputsLogin){
        const user = await axios.post(`http://localhost:3001/auth/login`,formData);
        if(user){
            if(!localStorage.getItem("user")){
                localStorage.setItem("user",JSON.stringify(user.data))
            }
            return user;
        }
}