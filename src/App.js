import React from 'react'
import './App.css'
import user from './images/user.jpeg'
import email from './images/email.jpeg'
import password from './images/lock.jpeg'

const App = () => {
  return (
    <div className='main'>
      <div className='sub-main'>
        <div>
          <div className='imgs'>
            <div className='img-container'>
              <img src={user} alt='user' className='user'/>
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
            <div>
              <img src={email} alt='email' className='email' />
              <input type='text' placeholder='Enter your emial'  className='name'/>
            </div>
            <div className='second-input'>
              <img src={password} alt='password' className='email' />
              <input type='password' placeholder='Enter your password'  className='name'/>
            </div>
            <div className='button' > 
            <button> Login</button>
            </div>
            
              <p className='link'>
                <a href='#'>Forgot Password</a> Or <a href='#'> Sign Up</a>
              </p>
          
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

