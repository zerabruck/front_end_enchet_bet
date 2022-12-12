import React, { useState } from 'react'
import '../assets/css/header.css'
import {GiHamburgerMenu} from "react-icons/gi"
import {ImCross} from "react-icons/im"
function Header() {
    const [burger,setBurger]=useState('false')
  return (
        <div className={burger?'header_holder':'header_burger_holder'}>
        <div className={burger?'header_left':'header_burger_left'}>
            <p className={burger?'header_company':"header_burger_company"}>EnchetBet</p>
            <ul>
            {
                    burger?'':<ImCross className='nav_burger header_cross_sign' onClick={()=>setBurger(!burger)}   />
                }
                
                <li>Home</li>
                <li>About Us</li>
                <li>Shop</li>
                <li>Contact</li>
            </ul>
        </div>

        <div className={burger?'header_right':'header_burger_right'}>
            <ul>
                <li>
                    <button className={burger?'header_button':'header_burger_button'}>Sign in </button>
                </li>
                <li>
                    <button className={burger?'header_button':'header_burger_button'}>Ordernow </button>
                </li>
                {
                    burger?<GiHamburgerMenu className='nav_burger header_burger_sign' onClick={()=>setBurger(!burger)}   />:
                    ''

                }


            </ul>
            
            
        </div>
        
    </div>

  )
}

export default Header