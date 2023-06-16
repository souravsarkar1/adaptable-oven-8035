import { Get_Product_sucess, PATCH_PRODUCT_SUCESS, Post_Product_sucess, Product_failure, Product_request } from "./actionType"

const initialstate = {
    isLoading:false,
    isError:false,
    data:[],
}


export const reducer = (state = initialstate,{type,payload})=>{
  switch (type) {
    case Product_request:
        return {
            ...state,isLoading:true
        }
    case Product_failure:
        return {
            ...state,isError:true,isLoading:false
        }
    case Post_Product_sucess:
        return {
            ...state,isLoading:false,
        }
    case Get_Product_sucess:
        return {
            ...state,isLoading:false,data:payload
        }    
        case PATCH_PRODUCT_SUCESS:
            return {
                ...state, isLoading: false
            }
    default:
        return state
  }
}