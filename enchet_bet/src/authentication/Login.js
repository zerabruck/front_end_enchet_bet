import React from 'react'
import {useRef,useState,useEffect,useContext} from 'react'
import AuthContext from './context/Authprovider';
import axios from '../api/axios';
import "../assets/css/login.css"

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
   <div className='login_container'>
    <p>
        company logo
    </p>
     <div className='login_inner_container'>
    <p ref={errRef} className="login_top_err_msg"aria-live="assertive" >
        {errMsg}
    </p>
    <div className='login_header_container'>
    <div className='login_header_left'>
    <p>
        Welcome to <span className='company_name'>EnchetBet</span>
    </p>
    <h1>
        Sign in
    </h1>
    </div>
    <div className='login_header_right'>
        <p>
            No Account?

        </p>
        <p>
            Sign up
        </p>
    </div>
    </div>

    <form className='form_container' onSubmit={handlesubmit}>
        <label className='form_label' htmlFor='username'>Enter your username</label>
        <input placeholder='username' className='form_input_feild'
        required 
         autoComplete='off' value={user} onChange={(e)=>{setUser(e.target.value)}} name='username' id='username' ref={userRef} type='text' />

        
        <label className='form_label' htmlFor='password'>Enter your password</label>
        <input placeholder='password' className='form_input_feild'
        required
         value={pwd} onChange={(e)=>{setPwd(e.target.value)}} name='password' id='password' type='password' />

        <button className='form_button'> sign in   </button>

        
    </form>

</div>
   </div>
   }
   </>
  )
}

export default Login