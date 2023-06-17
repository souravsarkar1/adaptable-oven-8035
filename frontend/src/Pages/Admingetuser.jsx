import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getproduct } from '../Redux/ProductReducer/action';
import AdminUserCard from './AdminUserCard';

const Admingetuser = () => {
    const dispatch = useDispatch()

   const {data} = useSelector((store)=>store.productReducer)


   const handleDelete = (id)=>{
    dispatch(deleteProduct(id)).then(()=>{dispatch(getproduct())})
  }

   useEffect(()=>{
    // dispatch(get)
    dispatch(getproduct())
   },[])




  return (
    <div>
    {
        data.map((el)=>{
            return (
               
                    
              //  <AdminUserCard key={el.id} {...el}/>
              <AdminUserCard handleDelete={handleDelete} key={el.id} {...el}/>
                
            )
        })
    }    
    </div>
  )
}

export default Admingetuser