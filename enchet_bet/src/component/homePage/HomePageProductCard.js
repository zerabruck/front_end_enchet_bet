import React from 'react'
import img from "../../Image/hero_third_img.jpg"
import '../../assets/css/homePageProductCard.css'
function HomePageProductCard() {
  return (
    <div className='home_page_card_container'>
        <div className='inner_home_page_card_container'>

            <div className='home_page_card_img_container'>
                <img src={img} alt="furniture" />
            </div>
            <div className='home_page_card_text_container'>
                <div className='home_page_card_text_left_container'>
                    <p>meja kerja(kantoran)</p>
                    <p>Best Quality</p>
                </div>

                <div className='home_page_card_text_right_container'>
                    <p>1200birr</p>  
                </div>

            </div>

        </div>

    </div>

  )
}

export default HomePageProductCard