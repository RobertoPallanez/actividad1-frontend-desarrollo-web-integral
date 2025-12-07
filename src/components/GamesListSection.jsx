import React from 'react'
import GameCard from './GameCard'
import { useOutletContext } from 'react-router-dom'

export default function GamesListSection() {
    const { addItemToCart, gamesArray } = useOutletContext();

    if (!gamesArray) return <p className='loadingPageMessage'>Loading page...</p>;

    return (
        <div className='gameCardsContainer'>
            {gamesArray.map((card) => {
                return (
                    <GameCard
                        key={crypto.randomUUID()}
                        id={card.id}
                        imageUrl={card.imageUrl}
                        title={card.title}
                        platformIcon={card.platformIcon}
                        platform={card.platform}
                        availability={card.availability}
                        price={card.price}
                        addItemToCart={addItemToCart}
                    />
                )
            })}
        </div>
    )
}
