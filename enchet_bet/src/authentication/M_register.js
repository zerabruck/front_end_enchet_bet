import React, { useEffect, useRef, useState } from 'react'
import axios from '../api/axios'
import {faCheck,faTimes,faInfoCircle} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
function M_register() {
    const userRef=useRef()

    const [userconfirm,setuserconfirm]=useState(false)
    const [pwdconfirm,setpwdconfirm]=useState(false)
    const [pwdconfirmconfirm,setpwdconfirmconfirm]=useState(false)
    const [emailconfirm,setemailconfirm]=useState(false)

    const [focususerconfirm,setfocususerconfirm]=useState(false)
    const [focuspwdconfirm,setfocuspwdconfirm]=useState(false)
    const [focuspwdconfirmconfirm,setfocuspwdconfirmconfirm]=useState(false)
    const [focusemailconfirm,setfocusemailconfirm]=useState(false)


    const [initaluser,setinitaluser]=useState(false)
    const [initalemail,setinitalemail]=useState(false)
    const [initalpwd,setinitalpwd]=useState(false)
    const [initalconfirm,setinitalconfirm]=useState(false)
    


    const [user,setuser]=useState('')
    const [pwd,setpwd]=useState('')
    const [confirm,setconfirm]=useState('')
    const [email,setemail]=useState('')
    const [errmsg,seterrmsg]=useState('')
    const LONEURL='/register'

    


    useEffect(()=>{
        userRef.current.focus()
        
        
    },[])

    useEffect(()=>{
        seterrmsg('')
    },[pwd,email,confirm,user])


    const submithandler=async(e)=>{
        e.preventDefault()

        try{
            

            await axios.post(LONEURL,JSON.stringify(
                {
                    username:user,
                    password:pwd,
                    email:email
                }
                
            ),
            {
                headers:{"Content-Type":"application/json"},
                withCredentials:true
            }
            )

            console.log(`welcome${user}`)
            setuser('')
            setemail('')
            setpwd('')
            seterrmsg('')
            setconfirm('')

        }catch(err){
            seterrmsg(`${err.response.data.message}`)

            
            

        }
    }

    const handleuser=(e)=>{
        const value=e.target.value
        setuser(value)
        setinitaluser(true)
        const letters_numbers_signs=/^[A-Za-z0-9_-]+$/ 
        
        if(value.match(letters_numbers_signs)  && 4<=value.length && 24>=value.length ){
            setuserconfirm(true)
        }
        else{
            setuserconfirm(false)
        }
        
        
    }

    const handlecomfirm=(e)=>{
        const value=e.target.value
        

        setconfirm(value)
        setinitalconfirm(true)
        
        

        if(value===pwd){
            setpwdconfirmconfirm(true)
        }
        else{
            setpwdconfirmconfirm(false)
        }
    }

    const handlepwd=(e)=>{
        const value=e.target.value
        setpwd(value)
        setinitalpwd(true)
        const letters_numbers_signs=/^[A-Za-z0-9_-]+$/ 
        const PWD_REGEX=/^(?=.*[a-z]) (?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

        
        

        if(PWD_REGEX.test(value) ){
            setpwdconfirm(true)

        }
        else{

            setpwdconfirm(false)

        }

        if(value===pwd){
            setpwdconfirmconfirm(true)
        }
        else{
            setpwdconfirmconfirm(false)
        }

        

    }
    

    useEffect(()=>{

        const REG=/^[@]+$/

        setemailconfirm(REG.test(email))

    },[email])

    


  return (
    <div className='login_container register_container'>
         <p>
        company logo
    </p>
        <div className='login_inner_container register_inner_container'>
        <p className='login_top_err_msg'>
            {errmsg}
        </p>
        <div className='login_header_container'>
    <div className='login_header_left'>
    <p>
        Welcome to <span className='company_name'>EnchetBet</span>
    </p>
    <h1>
        Sign up
    </h1>
    </div>
    <div className='login_header_right'>
        <p>
            Have an Account?

        </p>
        <p>
            Sign in
        </p>
    </div>
    </div>

        <form className='form_container' onSubmit={submithandler}>
            
            <label className='form_label' htmlFor='username'>Enter your username:{initaluser? userconfirm?<FontAwesomeIcon className='register_check_green' icon={faCheck} />:<FontAwesomeIcon className='register_check_red' icon={faTimes} />:''}</label>
            <input placeholder='username'  className='form_input_feild' autoComplete='off' onBlur={()=>setfocususerconfirm(!true)} onFocus={()=>setfocususerconfirm(true)} id='usernmae' ref={userRef} required  type='text' value={user} onChange={handleuser} />
            <div>
                {focususerconfirm?<div>
            {userconfirm?" ":<p className='register_validation_msg'>
                <FontAwesomeIcon className='register_waring_icon' icon={faInfoCircle} />
                4 to 24 Characters <br /> Must begin with a letter.<br/>Letters,numbers,uderscores,hypens allowed.</p>}
            </div>:
            ""}
            </div>

            


            <label  className='form_label' htmlFor='email'>Enter your email:  {initalemail?emailconfirm?<FontAwesomeIcon className='register_check_green' icon={faCheck} />:<FontAwesomeIcon className='register_check_red' icon={faTimes} />:''}</label>


            <input placeholder='email'  className='form_input_feild' onFocus={()=>{
                setfocusemailconfirm(true)
                
            }} onBlur={()=>setfocusemailconfirm(!true)} id='email' required  type='text' value={email} onChange={(e)=>{
                setemail(e.target.value)
                setinitalemail(true)
            }
             } />
            
            <div>
                {focusemailconfirm?<div>
            {emailconfirm?"":<p className='register_validation_msg'><FontAwesomeIcon className='register_waring_icon' icon={faInfoCircle} /> must be a valid email</p>}
            </div>:
            ""}
            </div>
            

            



            <label  className='form_label' htmlFor='password'>Enter your password:   {initalpwd?pwdconfirm?<FontAwesomeIcon className='register_check_green' icon={faCheck} />:<FontAwesomeIcon className='register_check_red' icon={faTimes} />:''}</label>


            <input placeholder='password'  className='form_input_feild' onBlur={()=>setfocuspwdconfirm(!true)} onFocus={()=>setfocuspwdconfirm(true)}  id='password' required  type='password' value={pwd} onChange={handlepwd} />
            <div>
                {focuspwdconfirm?<div>
            {pwdconfirm?" ":<p className='register_validation_msg'><FontAwesomeIcon className='register_waring_icon' icon={faInfoCircle} /> 8 to 24 charaters.<br/> Must include uppercase and lowercase letters, a number and a special charater.<br/>Allowed specital characters: ! @ # $ % </p>}
            </div>:
            ""}
            </div>

            <br />


            <label  className='form_label' htmlFor='confirmPwd'>Confirm Password:  {initalconfirm?pwdconfirmconfirm?<FontAwesomeIcon className='register_check_green' icon={faCheck} />:<FontAwesomeIcon className='register_check_red' icon={faTimes} />:''}</label>

            
            <input placeholder='confirm password'  className='form_input_feild' onFocus={()=>setfocuspwdconfirmconfirm(true)} onBlur={()=>setfocuspwdconfirmconfirm(!true)} id='confirmpwd' required  type='password' value={confirm} onChange={handlecomfirm} />
            <div>
                {focuspwdconfirmconfirm?<div>
            {pwdconfirmconfirm?" ":<p className='register_validation_msg'><FontAwesomeIcon className='register_waring_icon' icon={faInfoCircle} /> Must match the password input field.</p>}
            </div>:
            ""}
            </div>
            <br />


            <button  className={userconfirm&&emailconfirm&&pwdconfirm&&pwdconfirmconfirm?'form_button':'form_button form_button_disabled'} disabled={userconfirm&&emailconfirm&&pwdconfirm&&pwdconfirmconfirm?false:true}>sign up {}</button>


        </form>




    </div>
    </div>
  )
}

export default M_register