import React from 'react'
import NavBarSections from './NavBarSections';
import controlIcon from '../assets/control-logo-white.svg';
import cartIcon from '../assets/shopping-cart-white.svg';
import searchIcon from '../assets/search-icon.svg';
import { Link } from 'react-router-dom';
import gamesLibrary from '../mock-data/gamesLibrary';

export default function NavBar({
    cartCount,
    toggleCart,
    searchGame,
    gameName,
    setGameName,
    setSelectedGenre,
    setGamesArray
}) {
    return (
        <div className='navbarContainer'>
            <ul className='navbar'>
                <Link to="/">
                    <li className='logo'>
                        <img className='logoIcon' src={controlIcon} />
                        <span className='logoText'>GameZone</span>
                    </li>
                </Link>
                <li className='searchBar'>
                    <form onSubmit={searchGame}>
                        <input
                            type='text'
                            value={gameName ? gameName : ''}
                            onChange={(e) => {
                                const value = e.target.value;
                                setGameName(value);

                                if (value.trim() === "") {
                                    setGamesArray(gamesLibrary);
                                } else {
                                    setGamesArray(
                                        gamesLibrary.filter(game =>
                                            game.title.toLowerCase().includes(value.toLowerCase())
                                        )
                                    );
                                }
                            }}
                            className='searchBarInput'
                            placeholder='What game are you looking for?'>
                        </input>
                        <img
                            className='searchIcon'
                            src={searchIcon}
                            onClick={searchGame}
                        />
                    </form>
                </li>
                <li className='shoppingCart' onClick={toggleCart}>
                    <img className='cartIcon' src={cartIcon} />
                    {cartCount > 0 && <span className="cartBadge">{cartCount}</span>}
                </li>
            </ul>
            <NavBarSections setSelectedGenre={setSelectedGenre} />
        </div>
    )
}
