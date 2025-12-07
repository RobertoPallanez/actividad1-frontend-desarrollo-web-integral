import { useState } from "react";
import { toast } from "react-hot-toast";

export function useCart(gamesArray) {
    const [gamesInCart, setGamesInCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const cartCount = gamesInCart.reduce((t, g) => t + (g.numOfCopies || 1), 0);

    function toggleCart() {
        setIsCartOpen(o => !o);
    }

    function closeCart() {
        setIsCartOpen(false);
    }

    function addItemToCart(id) {
        const game = gamesArray.find(g => g.id === id);

        setGamesInCart(prev => {
            const existing = prev.find(item => item.id === id);
            if (existing) {
                return prev.map(item =>
                    item.id === id
                        ? { ...item, numOfCopies: item.numOfCopies + 1 }
                        : item
                );
            }
            return [...prev, { ...game, numOfCopies: 1 }];
        });
    }

    function deleteCartItem(id) {
        setGamesInCart(prev => prev.filter(g => g.id !== id));
    }

    function checkoutGames() {
        setGamesInCart([]);
        setIsCartOpen(false);
        toast.success("Thank you for your purchase!");
    }

    return {
        gamesInCart,
        isCartOpen,
        cartCount,
        toggleCart,
        closeCart,
        addItemToCart,
        deleteCartItem,
        checkoutGames
    };
}
