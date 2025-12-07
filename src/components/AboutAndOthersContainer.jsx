import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutAndOthersContainer() {
    return (
        <div className='aboutAndOthersContainer'>
            <span className='aboutSubmenuTitle'>ABOUT</span>
            <ul className='aboutSubmenuList'>
                <Link to="/about-us"><li className='aboutSubmenuItem'>About us</li></Link>
                <Link to="/contact-us"><li className='aboutSubmenuItem'>Contact us</li></Link>
            </ul>
        </div>
    )
}
