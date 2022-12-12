import React from 'react'
import '../../assets/css/service.css'
import {BsTrophyFill} from "react-icons/bs"
import {HiOutlineShieldCheck} from "react-icons/hi"
import {FaCarSide,FaHeadset} from "react-icons/fa"
function Service() {
  return (
    <div className='service_container'>
        <div className='inner_service_container'>
            <div className='inner_left_service_container'>
                <div className='inner_left_service_child'>
                    <BsTrophyFill className='service_side_icons' />
                    <p>High Quality <span className='service_inbetween_text'>Material is strong</span></p>
                </div>

                <div className='inner_left_service_child'>
                    <HiOutlineShieldCheck className='service_side_icons' />
                    <p>warranty Protection <span className='service_inbetween_text'>Over 3 years</span></p>
                </div>
            </div>

            <div className='inner_right_service_container'>
                <div className='inner_left_service_child'>
                    <FaCarSide className='service_side_icons' />
                    <p>Free Shipping <span className='service_inbetween_text'>Safety garenteed</span></p>
                </div>

                <div className='inner_left_service_child'>
                    <FaHeadset className='service_side_icons' />
                    <p>24/Support<span className='service_inbetween_text'>Dedicated support</span></p>
                </div>
            </div>

        </div>

        
    </div>
  )
}

export default Service