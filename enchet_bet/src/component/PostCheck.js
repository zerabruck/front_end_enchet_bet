import React, { useEffect, useState } from 'react'

import axios from '../api/axios'


function PostCheck() {
    const [allpost,setAllPost]=useState([])

    const [values,setValues]=useState({})
    const [errms,setErrmsg]=useState('')

    const [info,setInfo]=useState('')
    const [price,setPrice]=useState('')
    const [photo,setPhoto]=useState('')
    const [id,setId]=useState('')


    const handleAllPost=async(e)=>{

        await axios.get('/customer',{
            headers:{"Content-Type":"application/json"},
            withCredentials:true
        }).then((response)=>{
            setAllPost(response.data)
        }).catch((err)=>{
            setErrmsg(err.response.data.message)
        })

    }


    const submitHandler=async(e)=>{
        e.preventDefault()

        const formdata=new FormData()
        formdata.append("information",info)
        formdata.append("price",price)
        
        formdata.append("photo",photo)
        formdata.append("customer_id",id)

        await axios.post('/customer',
        formdata,
        {
            headers:{"Content-Type":"multipart/form-data"},
            withCredentials:true
        }
        ).then((response)=>{
            // console.log(response)
            setValues({
                info:response.data.information,
                price:response.data.price,
                avatar:response.data.avatar,
                id:response.data.customer_id
                
            })
        }
            
        ).catch((e)=>{
            // console.log(e)
            setErrmsg(e.response.data.message)

        })


    }
  return (
    <div>
        <button onClick={handleAllPost}>get all post</button>
        <p>
        PostCheck
        </p>

        <form  onSubmit={submitHandler}>
            <label>info</label> <br />
            <input value={info} onChange={(e)=>setInfo(e.target.value)} type='text' />
            <label>price</label> <br />
            <input value={price} onChange={(e)=>setPrice(e.target.value)} type='text' />
            <label>photo</label> <br />
            <input onChange={(e)=>setPhoto(e.target.files[0])} name='photo' type='file' />
            {/* <input value={photo} onChange={(e)=>setPhoto(e.target.value)} type='text' /> */}
            <label>id</label> <br />
            <input value={id} onChange={(e)=>setId(e.target.value)} type='text' />

            <button type='submit'>submit</button>
        </form>

        <p>
            {values.info}
        </p>
        <img src={values.avatar} alt="..." />
        <p>
            {values.price}
        </p>
        <p>
            {values.id}
        </p>

        <p>
            {errms}
        </p>

        {
            // console.log(allpost)
            allpost.map((value)=>{
                return (<img key={value._id} src={value.avatar} alt="...." />)
            })
        }



    </div>
  )
}

export default PostCheck