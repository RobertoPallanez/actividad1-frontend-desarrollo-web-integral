import React from 'react'
import GameGenre from './GameGenre'
import { Link } from 'react-router-dom'

export default function NavBarSections({setSelectedGenre}) {
  return (
    <ul className='sectionsContainer'>
        <Link to="/"><GameGenre genre={'AAA'} setSelectedGenre={setSelectedGenre} /></Link>
        <Link to="/"><GameGenre genre={'RPGS'} setSelectedGenre={setSelectedGenre} /></Link>
        <Link to="/"><GameGenre genre={'Shooters'} setSelectedGenre={setSelectedGenre} /></Link>
        <Link to="/"><GameGenre genre={'Open World'} setSelectedGenre={setSelectedGenre} /></Link>
        <Link to="/"><GameGenre genre={'Arcade'} setSelectedGenre={setSelectedGenre} /></Link>
    </ul>
  )
}
