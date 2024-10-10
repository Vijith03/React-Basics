import React from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
function Register() {
  return (
    <div>
         <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
  <div className="col6" style={{ flex: '1', textAlign: 'center' }}>
    <img 
      width={'450px'} 
      height={'400px'} 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTfQ0Hno8PFVoPgdqkoEWtgkRFQbixu95AWw&s" 
      alt="" 
      style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
    />
  </div>
  
  <div className="col6" style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <form className='p-5 mt-5 shadow text-center' style={{ width: '80%', maxWidth: '400px', padding: '20px', background: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <h3>Register Here...</h3>
      <MDBInput label="Username" id="typeEmail" type="email" className="mb-3" />
      <MDBInput label="Email input" id="typeEmail" type="email" className="mb-3" />
      <MDBInput label="Password" id="typePass" type="password" className="mb-3" />
      <button className='btn btn-primary mb-3' style={{ width: '100%', padding: '10px 0' }}>Register</button>
    </form>
  </div>
</div>

    </div>
  )
}

export default Register