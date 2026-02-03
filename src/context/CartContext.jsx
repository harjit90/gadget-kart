import { createContext, useContext, useState, useMemo } from "react";
import { products } from "../data";

// create context

const CartContext = createContext();

// provide context

const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const productItems = products;

    // Add item into the cart
    // const addToCart = (product) => {
    //     setCart((prevCart) => {
    //         const existingItem = prevCart.find((item) => {
    //             item = item.id === product.id;
    //             if (existingItem) {
    //                 return prevCart.map((item) => {
    //                     item.id === product.id
    //                         ? { ...item, quantity: item.quantity + 1 }
    //                         : item
    //                 });
    //             } else {
    //                 return [...prevCart, { ...product, quantity: 1 }];
    //             }
    //         });
    //     });
    // };

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) =>
                item.id === product.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };


    // Remove items from cart
    // const removeFromCart = (productId, removeAll = false) => {
    //     setCart((prevCart) => {
    //         const existingItem = prevCart.find((item) => {
    //             item = item.id === productId;
    //             if (!existingItem) {
    //                 return prevCart;
    //             }
    //             if (removeAll || existingItem.quantity === 1) {
    //                 return prevCart.filter((item) => {
    //                     item.id !== productId
    //                 })
    //             } else {
    //                 return prevCart.map((item) => {
    //                     item.id === productId
    //                         ? { ...item, quantity: item.quantity - 1 }
    //                         : item
    //                 });
    //             }
    //         });
    //     });
    // }

    const removeFromCart = (productId, removeAll = false) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) =>
                item.id === productId);
            if (!existingItem) return prevCart;

            if (removeAll || existingItem.quantity === 1) {
                return prevCart.filter((item) =>
                    item.id !== productId)
            } else {
                return prevCart.map((item) =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            }
        });
    };

    // Clear items from cart
    const clearCart = () => {
        setCart([]);
    };

    // Showing number of items in the cart
    const cartCount = useMemo(() =>
        cart.reduce((total, item) =>
            total + item.quantity, 0),
        [cart]);

    // Showing total  number of items in the cart
    const cartTotal = useMemo(() =>
        cart.reduce((total, item) =>
            total + item.price * item.quantity, 0),
        [cart]);

    return (
        <CartContext.Provider value={{ productItems, cart, addToCart, clearCart, removeFromCart, cartCount, cartTotal }}>
            {children}
        </CartContext.Provider >
    )
}
// use context

const useCartContext = () => {
    return useContext(CartContext);
}

export { CartContextProvider, useCartContext }