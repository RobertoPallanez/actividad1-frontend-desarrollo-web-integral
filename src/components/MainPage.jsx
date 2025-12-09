import React from 'react'
import Header from './Header'
import Footer from './Footer'
import CartDrawer from './CartDrawer'
import gamesLibrary from '../mock-data/gamesLibrary'
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { useCart } from './hooks/useCart'
import { useGamesLibrary } from './hooks/useGamesLibrary'
import { useFetchGames } from './hooks/useFetchGames'


export default function MainPage() {
  // Custom hook para simular el fetching the productos de base de datos
  const { gamesData } = useFetchGames(gamesLibrary);

  // Custom hook para todo el manejo de la informacion de los productos (juegos)
  const {
    gamesArray,
    gameName,
    selectedFilter,
    // selectedGenre,
    setGameName,
    setGamesArray,
    searchGame,
    setSelectedFilter,
    setSelectedGenre
  } = useGamesLibrary(gamesData);

  // Custom Hook para el manejo de info y funciones del carrito de compras
  const {
    gamesInCart,
    isCartOpen,
    cartCount,
    toggleCart,
    closeCart,
    addItemToCart,
    deleteCartItem,
    checkoutGames,
    purchasedGames,
    setPurchasedGames
  } = useCart(gamesArray);

  const myOrdersCount = purchasedGames.length;

  return (
    <div className='pageBody'>
      <div className='pageContainer'>
      <Header
        cartCount={cartCount}
        myOrdersCount={myOrdersCount}
        toggleCart={toggleCart}
        searchGame={searchGame}
        gameName={gameName}
        setGameName={setGameName}
        setSelectedGenre={setSelectedGenre}
        setGamesArray={setGamesArray}
      />
      <CartDrawer
        isOpen={isCartOpen}
        items={gamesInCart}
        onClose={closeCart}
        deleteCartItem={deleteCartItem}
        checkoutGames={checkoutGames}
      />
      <Toaster position='center-center' />
      <main className='outletContainer'>
        <Outlet context={{
          // Home Page
          addItemToCart,
          gamesArray,
          selectedFilter,
          setSelectedFilter,

          // My Orders Page
          purchasedGames,
          setPurchasedGames
        }} />
      </main>
      <Footer />
    </div>
    </div>
  )
}
