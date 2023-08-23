import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
export default function Homepage() {
 var [str,setstr]=useState(false) 
  

var nav=useNavigate()
const ApiCall=()=>{
  axios.post("https://voosh-0027.onrender.com/add-user",obj).then((res)=>{
    
  
  alert(`Welcome user  Now Sign In`)
  
  }).catch((err)=>{
    console.log(err);
  })
}

const ApiCall2=()=>{
  axios.post("https://voosh-0027.onrender.com/login-user",obj).then(res=>{
   sessionStorage.setItem("jwt",res.data)
   sessionStorage.setItem("phoneNumber",obj.phoneNumber)
   alert("Welcome to Add-Order")
   nav("/addorder") 

   }).catch(err=>{
    alert(err)
  })
}

 var [obj,setobj]=useState({
  username:"",
  phoneNumber:"",
  password:""
 })



 const setvalue=(e)=>{
  const {name, value}=e.target
  
  setobj((prev)=>({
    ...prev,
    [name]:value
  }))


 }
  return (
    <div>
 


<section class="vh-100 bg-image"
  style={{"background-image": 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp'}}>
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style={{"border-radius": "15px"}}>
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">{str==false?"Sign Up":"Sign In"}</h2>

              <form>
                {
                  str==false?<div class="form-outline mb-4">
                  <input onChange={setvalue} name='fullname' type="text" id="form3Example1cg" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example1cg">Your Name</label>
                </div>:<></>

                }
                
                <div class="form-outline mb-4">
                  <input onChange={setvalue} name="phoneNumber" type="tel" id="form3Example3cg" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example3cg">Phone Number</label>
                </div>

                <div class="form-outline mb-4">
                  <input onChange={setvalue}  name='password' type="password" id="form3Example4cg" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example4cg">Password</label>
                </div>


                <div class="form-check d-flex justify-content-center mb-5">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label class="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div class="d-flex justify-content-center">
                  <button onClick={str==false?ApiCall:ApiCall2} type="button"
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">{str==false?"Register":"LogIn"}</button>
                </div>

                <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                    class="fw-bold text-body"><u onClick={()=>{
                      setstr(!str)
                    }}>{str==false?"Sign-In Here":"Sign-Up Here"}</u></a></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
