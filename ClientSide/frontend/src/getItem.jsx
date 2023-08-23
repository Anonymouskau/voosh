import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonAlignTopRight from './Logout'

export default function GetItem() {

 var nav =useNavigate()  
  var [arr1,setarr]=useState([])
    const headers={
        Authorization:sessionStorage.getItem('jwt')
    }
   const api=()=>{
      axios.get('https://voosh-0027.onrender.com/get-order',{headers}).then((res)=>{
           setarr(res.data.orders)
      }).catch((err)=>{console.log(err);})
   }

useEffect(()=>{
api()
},[])
  return (
    <div>
        <ButtonAlignTopRight></ButtonAlignTopRight>
     
 <table class="table caption-top">
  <caption>
    List of Orders
  </caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">userId</th>
      <th scope="col">phoneNumber</th>
      <th scope="col">subTotal</th>
    </tr>
  </thead>
  <tbody>
    {
        arr1.map((props)=>{
            return(
                <tr>
                <th scope="row">🎁🎁</th>
                <td>{props.user}</td>
                <td>{props.phoneNumber}</td>
                <td>{props.subTotal}</td>
              </tr>
            )

        })

    }
    
    
  </tbody>
</table>
<br/>

<button onClick={()=>{
                    nav("/addorder")
                }} class="btn btn-dark btn-block">Add order</button>


    </div>
  )
}
