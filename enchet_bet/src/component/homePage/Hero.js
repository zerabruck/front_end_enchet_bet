import React from 'react'
import first_img from "../../Image/hero_third_img.jpg"
import second_img from "../../Image/hero_second_img.jpg"
import '../../assets/css/hero.css'
function Hero() {
  return (
    <div className='hero_container'>
        <div className='inner_hero_container'>

            <div className='left_hero_container'>
                <p className='hero_left_text_head'>Enchet Bet</p>
                <p className='hero_left_text_big'>Get the right Furniture for your Home</p>

                <p className='hero_left_text_transparent'>lorem upsum dolor sit omet consectetur adipiscing elit in aget gravida lea nec laculls diam.</p>

                <button className='hero_left_button'>Shop Now</button>

            </div>

            <div className='right_hero_container'>
                <div className='hero_first_img_container'>
                    <img className='hero_first_img' src={first_img} alt='chair' />
                </div>
                <div className='hero_second_img_container'>
                    <img className='hero_second_img' src={second_img} alt='chair' />
                </div>

            </div>
        

        </div>
       
    </div>
  )
}

export default Hero