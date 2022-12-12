import React, { useEffect, useState } from 'react'
import axios from '../../api/axios'
function HomePageProduct() {
    const [data,setData]=useState([])
    

    useEffect(()=>{
        const fetchData=async()=>{

            await axios.get('/customer', {
                headers:{"Content-Type":"application/json"},
                withCredentials:true
            }).then((result)=>{
                setData([...result.data])
            })
    
        }

        


    },[])



  return (
    <div className='home_page_Product_container'>
        <p>Post List</p>
        <div className='home_page_product_header_left'>
            <p>Post List</p>
            <p>Our Best Seller Product</p>
        </div>

        <div className='home_page_product_header_right'>
            <button>see more</button>
        </div>

        <div>
            {data.map(single=>{
                return (
                    <p>
                        single.name
                    </p>
                )
            })}
                
            

        </div>




    </div>
  )
}

export default HomePageProduct