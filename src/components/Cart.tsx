import { useCart } from "@/context/CartContext";
import { Button } from "./ui/button";
import { Trash } from 'lucide-react';

const Cart = () =>{

    const {cart, removeCartItem} = useCart()

    return (
        <div className="">
            <h2 className="font-bold text-md pb-4">Cart</h2>
            <hr/>
            <div className="flex justify-center items-center py-6">
                {cart.length > 0 ? (
                    <div className="">
                        {cart.map((item) => (
                            <div key={item.id} className="flex flex-col gap-4">
                                <div className="flex gap-4 items-center">
                                    <img src={item.image} className="w-10 h-10 rounded-lg"/>
                                    <div>
                                        <h3 className="text-darkgreyblue text-sm font-medium">{item.title}</h3>
                                        <p className="text-sm text-darkgreyblue font-medium">${item.price.toFixed(2)} x {item.quantity}<span className="font-semibold text-black ml-2">{(item.price * item.quantity).toFixed(2)}</span> </p>
                                    </div>
                                    <Trash className="text-darkgreyblue cursor-pointer" size={20} onClick={()=> removeCartItem(item.id) }/>
                                </div>
                                <Button className="bg-orange text-black">Checkout</Button>
                                
                            </div>
                        ))}
                    </div>
                ): (
                    <p className="font-medium text-darkgreyblue">Your cart is empty.</p>
                )}

            </div>



        </div>
    )
}

export default Cart;