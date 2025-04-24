import { use, useState } from 'react'
import React from 'react'
import { auth,createUserWithEmailAndPassword as createUser } from '../config/firsebaseConfig'
function Signup() {

 // 2 usestate create
const [formData , setFormData]=useState({
    name:"",
    email:"",
    password:""

})   
//3
const handelChange =(e)=>{
// console.log(e.target.name ,e.target.value);
setFormData((prev)=>{
    const update={
        ...prev,
        [e.target.name]:e.target.value
    }
    console.log("Updated Form Data:", update)
    return update
}
)


}

const handleSubmit =async(e)=>{
e.preventDefault()
// console.log('submit', formData);

try {
    const userCrediental= await createUser( auth,formData.name, formData.email, formData.password)
    let user = userCrediental.uid
    console.log('user -----',user);
     
} catch (error) {
    console.log('error ...', error);
    
}

}

  return (
<>
<form onSubmit={handleSubmit}>
<div className="row mb-3">
    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input type="text" value={formData.name} name ="name"className="form-control" id="name"onChange={handelChange}/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email"name ="email"value={formData.email} className="form-control" id="email"
      onChange={handelChange}
      />
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor='password' className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="text"name ="password"value={formData.password} className="form-control" id="password"onChange={handelChange}/>
    </div>
  </div>

  
  <button type="submit" className="btn btn-primary">Register</button>
</form>
</>

  )
}

export default Signup
