import React from 'react'
import {useRef,useState,useEffect,useContext} from 'react'
import AuthContext from './context/Authprovider';
import axios from '../api/axios';

const LOGINURL='/login'
function Login() {
    const {setAuth}=useContext(AuthContext)


    const userRef=useRef();
    const errRef=useRef();

    const [user,setUser]=useState('')
    const [pwd,setPwd]=useState('')
    const [errMsg,setErrMsg]=useState('')
    const [success,setSuccess]=useState(false);


    useEffect(()=>{
        userRef.current.focus()
    },[])

    useEffect(()=>{
        setErrMsg('')

    },[user,pwd])

    const handlesubmit= async (e)=>{
        e.preventDefault();
        try{

            const value=await axios.post(LOGINURL,JSON.stringify({username:user,password:pwd}),{
                headers:{"Content-Type":"application/json"},
                withCredentials:true
            })

            console.log(value.data)
            console.log(JSON.stringify(value.data))
            
            const accesstoken=value.data?.accesstoken
           


            const role=value.data?.role
            

            setAuth({user,pwd,role,accesstoken})
            



            // setUser('')
            setPwd('')
            setSuccess(true)
            

        }catch(err){

            if(!err.response){
                setErrMsg('No Server Response')
            }
            else if(err.response.status===400){
                setErrMsg('Missing username or password')
            }
            else if(err.response.status===401){
                setErrMsg('Unauthorized')
            }
            else{
                setErrMsg("Login Failed")
            }

            errRef.current.focus();
            
        }
    }

  return (
   <>{
    success? <h1>you have logged in {user}</h1>:
    <div>
    <p ref={errRef} className={errMsg?"errmsg":"offscreen" } aria-live="assertive" >
        {errMsg}
    </p>
    <h1>
        sign in
    </h1>

    <form onSubmit={handlesubmit}>
        <label htmlFor='username'>Username</label>
        <input
        required 
         autoComplete='off' value={user} onChange={(e)=>{setUser(e.target.value)}} name='username' id='username' ref={userRef} type='text' />

        
        <label htmlFor='password'>Password</label>
        <input
        required
         value={pwd} onChange={(e)=>{setPwd(e.target.value)}} name='password' id='password' type='password' />

        <button> sign in   </button>

        
    </form>

    <p>
        Neeed an Account?<br/>
        <span>
            <a href='#'>
                Sign Up
            </a>
        </span>
    </p>





</div>
   }
   </>
  )
}

export default Login