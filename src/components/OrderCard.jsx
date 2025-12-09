import React from 'react'
import { toast } from "react-hot-toast";

export default function OrderCard({ game, setPurchasedGames }) {

    function refundGame() {
        setPurchasedGames((prev) =>
            prev.filter(purchasedGame => (
                purchasedGame.id !== game.id
            ))
        )
        toast.success('Refund completed.');
    }

    return (
        <div className='orderCardContainer'>
            <img className='orderCardImage' src={game.imageUrl} />
            <div className='orderCardData'>
                <span>{game.title}</span>
                <div className='orderPlatformContainer'>
                    <img className='gamePlatformIcon' src={game.platformIcon} />
                    <span className='gamePlatformTitle'>{game.platform}</span>
                </div>
                <span className='gameAvailability'>{game.availability}</span>
                <div className='priceAndCurrencyContainer'>
                    <span className='gamePrice'>{game.price}</span>
                    <span className='gameCurrency'> USD</span>
                </div>
                <div className='priceAndCurrencyContainer'>
                    <span className='orderPrice'>TOTAL: {game.price} x {game.numOfCopies}</span>
                    <span className='orderTotal'> = {game.price * game.numOfCopies}</span>
                </div>
            </div>
            <button className='refundGameButton' onClick={refundGame}>Refund game</button>
        </div>
    )
}
