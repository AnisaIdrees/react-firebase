import React from 'react'

const LoginForm = () => {

    
  return (
<>
<form onSubmit={handleSubmit}>

        <div className="row mb-3">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              name="email"
              value={formData.email}
              className="form-control"
              id="email"
              onChange={handelChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="password" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="password"
              value={formData.password}
              className="form-control"
              id="password"
              onChange={handelChange}
            />
          </div>
        </div>
{/* <p>do you have already account ? <Link to={'/login'}>login</Link></p> */}
        <button type="submit" className="btn btn-primary">
          Login 
        </button>

      </form>
</>
  )
}

export default LoginForm
