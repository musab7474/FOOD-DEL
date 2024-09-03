import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

export const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState('Login')

    return (
    
   <div className='login-popup'>
    <form className='login-popup-container'>
     <div className="login-popup-title">
      <h2>{currState}</h2>
      <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
     </div>
     <div className="login-popup-inputs">
      {currState==='Login'?<></>:<input type="text" placeholder='Your name' required/> }
      <input type="text" placeholder='Your name' required/>
      <input type="email" placeholder='Your email' required/>
      <input type="Password" placeholder='Password' required/>
     </div>
     <button>{currState==='Sign Up'?'Creat account':'Login'}</button>
    <div className="login-popup-condition">
      <input type="checkbook" required/>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta optio repellat voluptatibus sed odio labore eos, vitae quis veritatis est ipsam minima sit neque animi officiis sequi ipsum exercitationem provident. </p>
    </div>
    {currState==='Login'
    
    ?<p>create a new account <span onClick={()=>setCurrState('Sign Up')}>click hrer</span></p>
    :<p>create a new account <span onClick={()=>setCurrState('Login')}>Login here</span></p>
}
    </form>
   </div>
    
  )
}

export default LoginPopup