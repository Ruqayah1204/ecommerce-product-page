import { useState } from "react";
import ProductModal from "./ProductModal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"

type productGalleryProps = {
    images: string[];
    // onclick: () => void;
};

const ProductGallery = ({images}: productGalleryProps) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    // const [open, setOpen] = useState(false)

    return (
        <div className="hidden md:flex flex-1 w-full max-w-[400px] mx-auto flex flex-col gap-6">
            
            {/* <div className="w-full flex items-center justify-center rounded-xl overflow-hidden">
                <img src={images[selectedIndex]} alt={`Product Image ${selectedIndex + 1}`} className="object-contain w-full h-full" />
            </div> */}
            <ProductModal 
                src={images[selectedIndex]} 
                alt={`Product Image ${selectedIndex + 1}`} 
                images={images}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
                
             />

            {/* Thumbnail */}
            <div className="flex justify-between">
                {images.map((img:string, index:number) => (
                    <div 
                        key={index}
                        onClick={() => setSelectedIndex(index)}
                        className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition ${selectedIndex === index ? "border-orange" : "border-transparent hover:opacity-50"}`}
                    >
                        <img src={img} alt={`Thumbnail ${index + 1}`} className="object-cover w-full h-full" />
                        {selectedIndex === index && (
                            <div className="absolute inset-0 bg-white/75 z-0" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductGallery;

export function MobileGallery({images}: productGalleryProps){
    return (
        <Carousel className="md:hidden block">
            <CarouselContent className="">
                {images?.map((img: string, index:number) => (
                    <CarouselItem 
                        key={index}
                        className="flex items-center justify-center overflow-hidden"
                    >
                        <img src={img} alt={`Product Image ${index +1}`} className="object-contain rounded-xl" />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-4"/>
            <CarouselNext className="right-4"/>
        </Carousel>
    )
}