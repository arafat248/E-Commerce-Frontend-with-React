import { useState } from "react";
import { CartContext } from "./CartContextProvider";

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (product) =>
    setCartItems((prev) => {
        const exist = prev.find((item) => item.id === product.id);
        if (exist)
        return prev.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
        return [...prev, { ...product, qty: 1 }];
    });
    const removeFromCart = (id) =>
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    const clearCart = () => setCartItems([]);
    const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);
    return (
    <CartContext.Provider
        value={{ cartItems, addToCart, removeFromCart, clearCart, totalItems }}
    >
        {children}
    </CartContext.Provider>
    );
};
