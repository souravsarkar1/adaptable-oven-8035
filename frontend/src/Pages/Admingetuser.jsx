import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getproduct } from '../Redux/ProductReducer/action';
import AdminUserCard from './AdminUserCard';

const Admingetuser = () => {
    const dispatch = useDispatch()

   const {data} = useSelector((store)=>store.productReducer)

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
              <AdminUserCard key={el.id} {...el}/>
                
            )
        })
    }    
    </div>
  )
}

export default Admingetuser