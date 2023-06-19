import { BOLLEAN_FALIURE, BOLLEAN_REQUEST, BOLLEAN_SUCCESS } from "./actionTypes"

export const initialvalue={
    profilebar:false,
    isLoading:false,
    isError:false
}

export const reducer=(state=initialvalue,{type,payload})=>{
   switch (type){
      case BOLLEAN_REQUEST :{
        return {
            ...state,
            isLoading:true
        }
      }
      case BOLLEAN_SUCCESS :{
        return {
            ...state,
            isLoading:false,
            profilebar:payload
        }
      }
      case BOLLEAN_FALIURE :{
        return {
            ...state,
            isLoading:false,
            isError:true
        }
      }
   }
}