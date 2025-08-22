import { useState } from "react";
import { AlignJustify } from "lucide-react";
import { Button } from "./ui/button";
import Logo from "../assets/images/logo.svg";
import cartIcon from "../assets/images/icon-cart.svg"
import imgAvatar from "../assets/images/image-avatar.png"
import { X } from "lucide-react";import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./ui/hover-card"
import Cart from "./Cart";
import { useCart } from "@/context/CartContext";
// import { NavLinks } from "./NavLinks";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {cart} = useCart();

  return (
    <header className="fixed top-0 left-0 w-full z-10">
      <nav
        arial-label="Global-Navigation"
        className="container bg-white flex items-center justify-between lg:px-16 p-4 gap-4 border-b-1 border-greyblue"
      >
        <h1 className="sr-only">Sneakers</h1>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <AlignJustify size={34} className="!w-6 !h-6" />
            
          </Button>
          
          <img src={Logo} alt="Kotuma Logo" className="pr-10 w-[150px]" />

            <ul className="md:flex gap-8 hidden text-darkgreyblue text-sm">
                <li className="cursor-pointer">Collection</li>
                <li className="cursor-pointer">Men</li>
                <li className="cursor-pointer">Women</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Contact</li>
            </ul>
        </div>

        <div className="flex gap-2 ">
            <HoverCard openDelay={0}>
                <HoverCardTrigger asChild className="cursor-pointer relative">
                    <Button variant="ghost" size="icon" >
                      { cart.length > 0 && (
                        <small className="absolute bg-orange rounded-lg top-0 right-1 px-2 font-bold text-white text-[10px]">{cart.reduce((total:number, item) => total + item.quantity, 0)}</small>
                      )}
                        <img src={cartIcon} alt="cart-icon" />
                    </Button>
                </HoverCardTrigger>
                <HoverCardContent sideOffset={16} className=" mr-6 w-80">
                    <Cart/>
                </HoverCardContent>
            </HoverCard>
            <img src={imgAvatar} alt="cart-icon" className="w-9 h-9 hover:border-2 border-orange rounded-full cursor-pointer" />
            
        </div>

        { menuOpen && (
            <>
            <div className="absolute inset-0 min-h-[100vh] bg-black/75 z-0" />
                <div className="lg:hidden absolute top-0 left-0 h-[100vh] w-1/2 bg-white z-50 animate-fadeIn p-4">
                        <Button
                            variant="ghost"
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            className="md:hidden"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <X size={34} className="!w-6 !h-6" />
                            
                        </Button>
                        <ul className="list-none flex flex-col gap-4 p-4 text-kotumablack">
                            <li className="cursor-pointer">Collection</li>
                            <li className="cursor-pointer">Men</li>
                            <li className="cursor-pointer">Women</li>
                            <li className="cursor-pointer">About</li>
                            <li className="cursor-pointer">Contact</li>
                        </ul>
                </div>
            </>
            )}
      </nav>
    </header>
  );
};

export default NavBar;
