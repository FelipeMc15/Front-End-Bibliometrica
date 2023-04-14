import { InputsRegister } from "app/register/models/register.models";
import axios from "axios";

export async function registerUserAction(credentials: InputsRegister){
        const user = await axios.post(`http://localhost:3001/user/`, credentials)
}