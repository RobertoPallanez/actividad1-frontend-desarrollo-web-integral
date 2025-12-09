import React from 'react'
import NavBar from './NavBar';

export default function Header({
    cartCount,
    myOrdersCount,
    toggleCart,
    searchGame,
    gameName,
    setGameName,
    setSelectedGenre,
    setGamesArray
}) {
    return (
        <div className='header'>
            <NavBar
            cartCount={cartCount}
            myOrdersCount={myOrdersCount}
            toggleCart={toggleCart}
            searchGame={searchGame}
            gameName={gameName}
            setGameName={setGameName}
            setSelectedGenre={setSelectedGenre}
            setGamesArray={setGamesArray} 
        />
        </div>
    )
}
