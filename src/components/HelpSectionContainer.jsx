import React from 'react'
import { Link } from 'react-router-dom'

export default function HelpSectionContainer() {
    return (
        <div className='aboutAndOthersContainer'>
            <span className='aboutSubmenuTitle'>HELP</span>
            <ul className='aboutSubmenuList'>
                <Link to="/how-to-buy">
                <li className='aboutSubmenuItem'>How To Buy</li>
                </Link>
            </ul>
        </div>
    )
}
