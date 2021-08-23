import { createContext, useEffect, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (window.localStorage.getItem("product") === null) {
                return setCartProducts([]);
            }

            const productLS = window.localStorage.getItem("product");
            return setCartProducts(JSON.parse(productLS));
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem("product", JSON.stringify(cartProducts));
    });
    console.log(cartProducts);
    return (
        <CartContext.Provider
            value={{
                cartProducts,
                setCartProducts,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
