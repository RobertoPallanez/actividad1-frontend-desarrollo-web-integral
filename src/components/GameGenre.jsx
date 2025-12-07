import React from 'react'

export default function GameGenre({genre, setSelectedGenre}) {
  return (
    <li className='gameGenreItem' onClick={() => setSelectedGenre(genre)}>{genre}</li>
  )
}
