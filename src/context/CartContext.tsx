import { createContext, useContext, useState } from "react";

type cartDetail = {
    id: number
    title: string
    image: string
    price: number
    quantity: number
}
type CartContextType = {
    cart: cartDetail[];
    addToCart: (cart: cartDetail) => void;
    removeCartItem: (id: number) => void
}

export const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({children} : {children: React.ReactNode}){
    const [cart, setCart] = useState<cartDetail[]>([]);

    const addToCart = (product: cartDetail) =>{
        setCart(prev =>{
            const existingProduct = prev.find(item => item.id === product.id)
            if(existingProduct){
                return prev.map(item => item.id === product.id ? 
                    {...item, quantity: product.quantity} : item
                )
            }
            return [...prev, product];
        })
    }

    const removeCartItem = (id: number) =>{
        setCart(prev => prev.filter((item) => item.id !== id))

    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeCartItem}}>
            {children}
        </CartContext.Provider>
    )

}

export const useCart = () => {
    const context = useContext(CartContext)
    if(!context){
        throw new Error("useCart must be used inside CartProvider")
    }
    return context;
}
