import React from 'react'
import { IoClose } from "react-icons/io5";
import deleteCartItemIcon from '../assets/delete-cart-item-icon.svg'

export default function CartDrawer({ isOpen, items, onClose, deleteCartItem, checkoutGames }) {
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.numOfCopies), 0);

    return (
        <>
            {/* Overlay */}
            <div
                className={`cartOverlay ${isOpen ? "open" : ""}`}
                onClick={onClose}
            />

            {/* Drawer */}
            <div className={`cartDrawer ${isOpen ? "open" : ""}`}>
                <div className="cartHeader">
                    <h2>Your Cart</h2>
                    <button className="closeBtn" onClick={onClose}>
                        <IoClose size={26} />
                    </button>
                </div>

                <div className="cartItems">
                    {items.length === 0 ? (
                        <p className="emptyCart">Your cart is empty.</p>
                    ) : (
                        items.map((item, index) => (
                            <div key={index} className="cartItem">
                                <img className='cartItemImage' src={item.imageUrl} alt={item.title} />
                                <div className='cartItemDataContainer'>
                                    <p className="itemName">{item.title}</p>
                                    <p className="itemPrice">${item.price.toFixed(2) * item.numOfCopies.toFixed(2)}</p>
                                    <p className='itemNumOfCopies'>{item.numOfCopies} x {item.price}</p>
                                </div>
                                <img 
                                className='deleteCartItemIcon' 
                                src={deleteCartItemIcon} 
                                onClick={() => deleteCartItem(item.id)}
                                />
                            </div>
                        ))
                    )}
                </div>

                {/* Footer / subtotal */}
                <div className="cartFooter">
                    <div className="subtotal">
                        <span>Subtotal:</span>
                        <strong>${subtotal.toFixed(2)}</strong>
                    </div>

                    <button className="checkoutBtn" disabled={items.length === 0} onClick={() => checkoutGames()}>Checkout</button>
                </div>
            </div>
        </>
    );
}
