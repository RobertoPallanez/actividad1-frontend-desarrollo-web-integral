import React from 'react'
import GamesListSection from '../GamesListSection'
import GameFilters from '../GameFilters'

export default function HomePage({addItemToCart, gamesArray, selectedFilter, setSelectedFilter}) {
  return (
    <div className='pageContentContainer'>
    <h2 className='mainParagraph'>
      The best prices and the best catalog of games all over internet
    </h2>
    <GameFilters selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}/>
    <GamesListSection addItemToCart={addItemToCart} gamesArray={gamesArray} />
    </div>
  )
}
