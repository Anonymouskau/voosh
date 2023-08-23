import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import ButtonAlignTopLeft from './Logout'
export default function Order() {
   
    var nav=useNavigate()
    const headers={
        Authorization:sessionStorage.getItem('jwt')
    }
   var apicall=()=>{
    axios.post("https://voosh-0027.onrender.com/add-order",obj1,{headers}).then((res)=>{
      alert(res.data.message)
    }).catch(err=>{
        console.log(err);
    })
   }
    
    var [obj1, setobj1]=useState({
        subTotal:0,
        phoneNumber:sessionStorage.getItem("phoneNumber")
    })
    var event1=(e)=>{
        const {name, value}=e.target
      setobj1((prev)=>({
        ...prev,
        [name]:value

      }))
        

    }

    return (
        <>
        <ButtonAlignTopLeft></ButtonAlignTopLeft>
    <div><section style={{"background-color": "#f9c9aa;"}}>
    <div class="container py-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-9 col-lg-7 col-xl-5">
          <div class="card">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-forms/img1.webp"
              class="card-img-top" alt="Black Chair" />
            <div class="card-body">
              <div class="card-title d-flex justify-content-between mb-0">
                <p class="text-muted mb-0">Retro Chair</p>
                <p class="mb-0">$760</p>
              </div>
            </div>
            <div class="rounded-bottom" style={{"background-color": "#eee;"}}>
              <div class="card-body">
                <p class="mb-4">Your payment details</p>
  
                <div class="form-outline mb-3">
                  <input onChange={event1} name='subTotal' type="text" id="formControlLgXM8" class="form-control"
                    placeholder="1234" />
                  <label class="form-label" for="formControlLgXM8">Amount</label>
                </div>
                 
                <div class="row mb-3">
                   <div class="col-6">
                    <div class="form-outline">
                      <input readOnly type="Number" id="formControlLgExpk8" class="form-control"
                         placeholder={sessionStorage.getItem('phoneNumber')}/>
                      <label class="form-label" for="formControlLgExpk8" >{sessionStorage.getItem("phoneNumber")}</label>
                    </div>
                  </div>
                  {/* <div class="col-6">
                    <div class="form-outline">
                      <input type="password" id="formControlLgcvv8" class="form-control" placeholder="Cvv" />
                      <label class="form-label" for="formControlLgcvv8">Cvv</label>
                    </div>
                  </div> */}
                </div>
  
                <button onClick={apicall} class="btn btn-info btn-block">Add Order</button>
                
                <button onClick={()=>{
                    nav("/getItem")
                }} class="btn btn-dark btn-block">Get Details of Order</button>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</>
  )
}
