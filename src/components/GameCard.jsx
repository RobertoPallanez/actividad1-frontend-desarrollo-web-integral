import React from 'react'
import addToCartIcon from '../assets/add-to-cart-icon.svg'

export default function GameCard({id, imageUrl, title, platformIcon, platform, availability, price, addItemToCart }) {
    return (
        <div className='gameCard'>
            <div className='gameImageContainer'>
                <img className='gameCoverImage' src={imageUrl} />
            </div>
            <div className='gameCardDataContainer'>
                <div className='dataWithoutPricingContainer'>
                    <span className='gameTitle'>{title}</span>
                    <div className='gamePlatformContainer'>
                        <img className='gamePlatformIcon' src={platformIcon} />
                        <span className='gamePlatformTitle'>{platform}</span>
                    </div>
                    <span className='gameAvailability'>{availability}</span>
                </div>
                <div className='gamePricingContainer'>
                    <div className='priceAndCurrencyContainer'>
                        <span className='gamePrice'>{price}</span>
                        <span className='gameCurrency'> USD</span>
                    </div>
                    <img
                        className='addToCartIcon'
                        src={addToCartIcon}
                        onClick={() => addItemToCart(id)} 
                        />
                </div>
            </div>
        </div>
    )
}
