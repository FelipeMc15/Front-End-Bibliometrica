import axios from "axios"

export async function getUserAction(id:number){
        const user = await axios(`http://localhost:3001/user/${id}`)
        if(!localStorage.getItem("user")){
            localStorage.setItem("user",JSON.stringify(user.data))
        }
}