import axios from "axios";
import { DELETE_PRODUCT_SUCCESS, Get_Product_sucess, PATCH_PRODUCT_SUCESS, Post_Product_sucess, Product_failure, Product_request } from "./actionType";

export const URL = "http://localhost:3000/data"
export const addproduct =(newData)=> (dispatch)=>{
    dispatch({type:Product_request})
    axios.post(URL,newData).then((res)=>{
        console.log(res.data)
        dispatch({type:Post_Product_sucess})
    })
    .catch((err)=>{
        console.log(err.message)
        dispatch({type:Product_failure})
    })
}

export const getproduct =(paramobj)=> (dispatch)=>{
    dispatch({type:Product_request})


    axios.get(URL,paramobj).then((res)=>{
        dispatch({type:Get_Product_sucess
            ,payload:res.data})
    })
    .catch(()=>{
        dispatch({type:Product_failure})
    })
}



export const editproduct = (dataobj,id)=>(dispatch)=>{
    dispatch({type:Product_request})

    return axios.patch(`http://localhost:3000/data/${id}`,dataobj).then(()=>{
        dispatch({type:PATCH_PRODUCT_SUCESS})
    })
    .catch(()=>{
        dispatch({type:Product_failure})
    })
}



export const deleteProduct = (id) => (dispatch) => {
    dispatch({type:Product_request})
    return axios
      .delete(`http://localhost:3000/data/${id}`)
      .then((res) => {
        console.log(res.data);
        dispatch({ tpye: DELETE_PRODUCT_SUCCESS });
      })
      .catch((err) => {
        dispatch({type:Product_failure});
      });
  };