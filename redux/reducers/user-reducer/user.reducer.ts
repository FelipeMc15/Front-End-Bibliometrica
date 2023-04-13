import { GET_USER } from "redux/actions/user-actions/get.user.action";

const initialState = {
    user:{}
}

export function userReducer(state = initialState, action:any){
    switch (action.type) {
        case GET_USER:
          console.log("entre")
          return {
            ...state,
            user: action.payload,
          };
        default:
          return state;
      }
}