import React, { useContext, useState } from 'react'
import styles from './SignUp.module.css'
import { Link } from 'react-router-dom'
import { dataContext } from '../../Context'

function SignUp() {

  const {signup} = useContext(dataContext);

  const [credential , setCredential] = useState({name:" ", email:" ", password:" " })
  
  const onChange = (e)=>{
    setCredential({...credential,[e.target.name]:e.target.value});
  }
  
  const handleOnClick =(e)=>{
    signup(credential.name , credential.email, credential.password);
  }



  return (
   <>
   <div className={styles.SignUp}>
    <div className={styles.main}>
     
        <h1>Sign Up</h1>
        <div className={styles.inputs}>
        <input type="text" placeholder='Enter your Name' onChange={onChange} name='name'/>
        <input type="email" placeholder='Enter your Gmail'onChange={onChange} name='email' />
        <input type="text" placeholder='Create a strong Password' onChange={onChange} name='password' />
        </div>

        <div className={styles.Submit}>
          <p>Already have an account ? <Link to="/login">Login</Link></p>
        <button className={styles.button}  onClick={handleOnClick}>Sign UP</button>
        </div>

    </div>
   </div>
   </>
  )
}

export default SignUp
