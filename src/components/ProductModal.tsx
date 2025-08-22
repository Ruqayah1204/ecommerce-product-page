import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "./ui/dialog"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "./ui/carousel"
import { Card, CardContent } from "./ui/card"
import { useEffect, useState } from "react"


type productModalProp = {
    src: string
    alt?: string
    open?: boolean
    onOpen?: (open: boolean) => void
    images?: string[]
    selectedIndex: number
    setSelectedIndex: (index: number) => void
}
const ProductModal = ({src, alt, images, selectedIndex, setSelectedIndex} : productModalProp) =>{

    const [api, setApi] = useState<CarouselApi>();

    useEffect(()=>{
        if(!api)  return

        api.on("select", () =>{
            setSelectedIndex(api.selectedScrollSnap())
        })
    }, [api, setSelectedIndex])


    return (
        <Dialog >
            <DialogTrigger asChild>
                <div className="w-full flex items-center justify-center rounded-xl overflow-hidden">
                    <img src={src} alt={alt} className="object-contain w-full h-full" />
                </div>
            </DialogTrigger>

            {/* Modal Content */}
            <DialogContent className="bg-transparent border-none max-h-[90dvh]">
                <Carousel 
                    // opts={{startIndex: selectedIndex}}  
                    setApi={setApi}>
                    <CarouselContent className="">
                        {images?.map((img: string, index:number) => (
                            <CarouselItem 
                                key={index}
                                className="flex items-center justify-center overflow-hidden"
                            >
                                <img src={img} alt={`Product Image ${index +1}`} className="max-h-[60dvh] w-auto object-contain rounded-xl" />
                            </CarouselItem>
                        ))}
                    </CarouselContent >
                    <CarouselPrevious className="left-5 hover:text-orange"/>
                    <CarouselNext className="right-5 hover:text-orange"/>
                </Carousel>

                {/* Thumbnail */}

                <Card className="bg-transparent px-0 border-none">
                    <CardContent className="flex gap-4 items-center justify-center">
                        {images?.map((img: string, index: number) => (
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
                    </CardContent>
                </Card>
                


            </DialogContent>
        </Dialog>
    )
    
}

export default ProductModal


// useEffect(() => {
//         if (!api) return
//         const onSelect = () => setSelectedIndex(api.selectedScrollSnap())
//         api.on("select", onSelect)
//         return () => {
//             api.off("select", onSelect)
//         }
//     }, [api, setSelectedIndex])

//     useEffect(() => {
//         if (!api) return
//         api.scrollTo(selectedIndex)
//     }, [selectedIndex, api])

//     useEffect(() => {
//         if (!api) return
//         api.scrollTo(selectedIndex, true) 
//     }, [api])