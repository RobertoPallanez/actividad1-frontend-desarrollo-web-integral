import React from 'react'
import { useOutletContext } from 'react-router-dom'
import OrderCard from '../OrderCard';

export default function MyOrders() {
    const { purchasedGames, setPurchasedGames } = useOutletContext();

    if (purchasedGames.length === 0) return (
        <div className='myOrdersPageContainer'>
            <h1 className='ordersHeader'>MY ORDERS:</h1>
            <p className='loadingPageMessage'>There are no orders yet</p>
        </div>
    )

    return (
        <div className='myOrdersPageContainer'>
            <h1 className='ordersHeader'>MY ORDERS: You have {purchasedGames.length} orders:</h1>
            <div className='ordersContainer'>
                {purchasedGames.map((game) => {
                    return <OrderCard
                        game={game}
                        purchasedGames={purchasedGames}
                        setPurchasedGames={setPurchasedGames}
                    />
                })}
            </div>
        </div>
    )
}
