
import React, { useEffect, useState } from 'react'

import { useNavigate } from "react-router-dom";


const dataContext = React.createContext();


let host = 'http://localhost:5000';

const AppProvider =({children})=>{
    
    const [theme , setTheme] = useState('white');
    const [isLoading , setIsLoading] = useState(false);
    const [array , setArray] = useState([]);
    const navigate =useNavigate();



    // Login Component 

 const login = async(email, password)=>{
     const res = await fetch(`${host}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password}),
    })
    const json = await res.json();
    console.log(json);

    if(json.success){
        localStorage.setItem('token', json.authtoken);
         navigate("/home");
        alert("Login Successfull")
    }
    else{
        alert('invalide credentials');
    }
}





//  SignIn Component 

const signup = async (name , email , password)=>{
    const res = await fetch(`${host}/api/auth/signup`, {
        method : "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({name, email, password})
    }) 

    const json = await res.json();
    console.log(json);
    
    if(json.success){
        localStorage.setItem('token', json.authtoken);
        navigate("/home");
        alert("SignUP succesfull");
        console.log(localStorage.getItem('token'));
    }
    else{
        alert('User Already exist');
    }
}



// function for loading content of homepage

const loadData = async()=>{
   setIsLoading(true)
  const res = await fetch(`${host}/api/data/events`,{
    method: "GET",
    headers:{
           "Content-Type" : " application/json",
           "auth-token": localStorage.getItem('token')
        }
  });

  const json = await res.json();
  console.log(json);
  setArray(json);
  setIsLoading(false)
}


//  logOut function 

const handleLogout =()=>{
    alert("Logout : Are You Sure ? ")
    navigate('/login');
}



//  useEffect for rendering the data 

useEffect(()=>{
 loadData()
},[])



//  Function for changing Theme

const handleOnclick = (colour)=>{
   setTheme(colour);
}

const handleMode =()=>{
    if(theme === 'white'){
        setTheme('#605E5C')
    }
    else{
        setTheme('white')
    }
}


 return <dataContext.Provider value={{isLoading , setIsLoading, login, loadData, array, handleLogout, signup, handleOnclick, theme, handleMode}}>
        {children}
    </dataContext.Provider>
}


export {dataContext , AppProvider};