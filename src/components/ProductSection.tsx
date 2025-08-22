import ProductGallery, { MobileGallery } from "./ProductGallery";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "./ui/card";
import img1 from "../assets/images/image-product-1.jpg";
import img2 from "../assets/images/image-product-2.jpg";
import img3 from "../assets/images/image-product-3.jpg";
import img4 from "../assets/images/image-product-4.jpg";
import cartIcon from "../assets/images/icon-cart.svg";
import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";

import { Button } from "./ui/button";
import {useState } from "react";
import { useCart } from "@/context/CartContext";

const ProductSection = () => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart()

  const productImage = [img1, img2, img3, img4];

  const product = {
    id: 100398,
    title: "Fall Limited Edition Sneakers",
    price: 125.0,
    image: img1,
    quantity: quantity,
  };

  const handleClick = () => {
    addToCart(product);
    console.log("product added", product);
  };
  return (
    <section className="container mx-auto mt-12 md:mt-20 md:px-8 px-4">
      <div className="md:max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-6  py-8">
        <ProductGallery images={productImage} />
        <MobileGallery images={productImage} />

        <Card className="flex-1 p-0 shadow-none border-none gap-4 md:max-w-md mx-auto">
          <CardHeader>
            <CardDescription className="uppercase font-black font-semibold text-xs tracking-wide">
              Sneaker Company
            </CardDescription>
            <CardTitle className="pt-3 md:text-4xl text-3xl font-bold">
              {product.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-[1.5] font-medium text-darkgreyblue">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they'll withstand
              everything the weather can offer.
            </p>
            <div className="pt-4 flex md:block justify-between">
              <h3 className="text-2xl font-bold flex items-center gap-4">
                ${product.price.toFixed(2)}{" "}
                <span className="inline-block text-sm text-white bg-black px-2 py-[3px] rounded-lg">
                  50%
                </span>
              </h3>
              <span className="inline-block py-2 text-sm line-through text-darkgreyblue font-semibold">
                $250.00
              </span>
            </div>
          </CardContent>
          <CardFooter className="flex md:flex-row flex-col gap-2">
            <div className="flex items-center bg-lightgreyblue py-2 rounded-lg gap-4 justify-between w-full md:w-auto">
              <Button
                variant="ghost"
                onClick={() => setQuantity((qty) => Math.max(1, qty - 1))}
              >
                <img src={minusIcon} alt="cart-icon" className="w-4 h-4" />
              </Button>
              <span className="font-bold">{product.quantity}</span>
              <Button
                variant="ghost"
                onClick={() => setQuantity((qty) => qty + 1)}
              >
                <img src={plusIcon} alt="cart-icon" className="w-4 h-4" />
              </Button>
            </div>
            <Button
              onClick={handleClick}
              className="bg-orange text-black font-bold md:py-6 py-4 flex-1 hover:bg-orange/60 w-full"
            >
              <img src={cartIcon} alt="cart-icon" className="w-4 h-4" />
              Add to cart
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default ProductSection;
