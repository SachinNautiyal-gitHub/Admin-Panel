import React, { useContext, useState } from 'react'
import styles from './Login.module.css'
import {Link} from 'react-router-dom'
import { dataContext } from '../../Context';

function Login() {

  const [values , setValues] = useState({email : " " ,password:" "});
  const {login} = useContext(dataContext);

  const handleOnchange  =(e)=>{
    setValues({...values, [e.target.name]:e.target.value});
  }

  const handleClick =(e)=>{
    login(values.email , values.password);
  }

  return (
    <>
    <div className={styles.SignUp}>
    
    <div className={styles.main}>
     
        <h1>Log In</h1>
        <div className={styles.inputs}>
        <input type="email" placeholder='Email'  onChange={handleOnchange} name='email' />
        <input type="password"  palaceholder='Enter Password' onChange={handleOnchange} name='password' />
        </div>

        <div className={styles.Submit}>
          <p> Don't have account ? <Link to="/">Create an account</Link></p>
         <button className={styles.button}  onClick={handleClick}>Log In</button>
        </div>

    </div>
   </div>
    
    
    </>
  )
}

export default Login
