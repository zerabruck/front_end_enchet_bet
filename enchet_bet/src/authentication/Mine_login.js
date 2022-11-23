import React, { useContext, useEffect, useRef, useState } from 'react'
// import axios from '../api/Mine_axios'
import { context } from './context/Mine_authprovider'
import axios from '../api/axios'
function Mine_login() {
    const [errmsg,setErrmsg]=useState('')
    const userRef=useRef()
    const [user,setuser]=useState('')
    const [pwd,setpwd]=useState('')
    const LONEURL="/login"

    const {setauth}=useContext(context)


    useEffect(()=>{
        userRef.current.focus()

    },[])

    useEffect(()=>{
        setErrmsg('')

    },[pwd,user])


    const handlesubmit=async(e)=>{
        e.preventDefault()

        

            try{
                const result=await axios.post(LONEURL,
                    JSON.stringify({
                        password:pwd,
                        username:user
                    }),
                    {
                        headers:{"Content-Type":"application/json"},
                        withCredentials:true
                    })
                const accesstoken=result.data.accesstoken
                const role=result.data.role
                console.log(result.data)
                setauth({user,pwd,role,accesstoken})
                setuser('')
                setpwd('')

            }catch(err){

                if(!err.response){
                    setErrmsg("server error")
                }
                else if(err.response.status===400){
                    setErrmsg('Missing username or password')

                }
                else if(err.response.status===401){
                    setErrmsg('Unauthorized')

                }
                else{
                    setErrmsg("log in failed")
                }
                

            }



        
        

    }
  return (
    <div>
        <h1 className={errmsg?'alert':'hide alert'}>
            {errmsg}
        </h1>

        <h1>sign in</h1>

        <form onSubmit={handlesubmit}>
            <label htmlFor='username' >Username:</label>
            <input id='username' onChange={(e)=>setuser(e.target.value)} type='text' required ref={userRef} value={user} />

            <label htmlFor='password' >Password:</label>
            <input id='password' onChange={(e)=>setpwd(e.target.value)} type='password' required  value={pwd} />

            <button>submit</button>


        </form>
    </div>
  )
}

export default Mine_login