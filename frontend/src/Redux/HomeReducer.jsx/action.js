import { BOLLEAN_FALIURE, BOLLEAN_REQUEST, BOLLEAN_SUCCESS } from "./actionTypes"

export const request_action=()=>{
    return {type:BOLLEAN_REQUEST}
  }
  export const success_action=(payload)=>{
     return {type:BOLLEAN_SUCCESS,payload}
   }
  
   export const faliure_action=()=>{
     return {type:BOLLEAN_FALIURE}
   }