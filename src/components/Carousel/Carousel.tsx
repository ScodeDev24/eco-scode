'use client'
import { useState, useEffect, useCallback } from "react"
import Image from 'next/image';
interface Slide {
    img: string;
    alt:string;
    label:string;
    description:string;
}
export default function Carousel() {
    const [activeIndex, setActiveIndex] = useState<number>(0)
    const slides: Slide[] = [
        {
            img: "/cuidado_agua.jpg",
            alt: "Cuidado del Agua",
            label: "Cuidado del Agua",
            description: "Some representative placeholder content for the first slide.",
        },
        {
            img: "/cuidado_ambiente.jpg",
            alt: "Cuidado del Ambiente",
            label: "Cuidado del ambiente",
            description: "Some representative placeholder content for the second slide.",
        },
        {
            img: "/reciclaje.jpg",
            alt: "Reciclaje",
            label: "Reciclaje",
            description: "Some representative placeholder content for the third slide.",
        },
    ];

    const handlePrev = useCallback((): void => {
        const newIndex = (activeIndex === 0) ? slides.length - 1 : activeIndex - 1;
        setActiveIndex(newIndex);
      }, [activeIndex, slides.length]);
      
      const handleNext = useCallback((): void => {
        const newIndex = (activeIndex === slides.length - 1) ? 0 : activeIndex + 1;
        setActiveIndex(newIndex);
      }, [activeIndex, slides.length]);
      
      useEffect(() => {
        const interval = setInterval(() => {
          handleNext();
        }, 3000);
      
        return () => clearInterval(interval);
      }, [handleNext]);

    return (
       <div
            id="carouselDarkVariant"
            className="relative"
            data-twe-carousel-init
            data-twe-ride="carousel">
            
            <div
                className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`relative float-left -mr-[100%] w-full transition-opacity duration-[600ms] ease-in-out ${
                            index === activeIndex ? 'opacity-100' : 'opacity-0'
                        }`}>
                        <Image
                            src={slide.img}
                            className="block w-full"
                            alt={slide.alt}
                            width={800}
                            height={600} 
                            />
                        <div
                            className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
                            <h5 className="text-xl">{slide.label}</h5>
                            <p>{slide.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Indicadores */}
            <div className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`mx-[3px] box-content h-[3px] w-[30px] cursor-pointer ${
                            index === activeIndex ? 'bg-black' : 'bg-gray-400'
                        }`}
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Slide ${index + 1}`}>
                    </button>
                ))}
            </div>

            {/* Botones de navegación */}
            <button
                className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center bg-none text-center text-black opacity-50 hover:opacity-90"
                type="button"
                onClick={handlePrev}>
                <span className="inline-block h-8 w-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </span>
                <span className="sr-only">Previous</span>
            </button>

            <button
                className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center bg-none text-center text-black opacity-50 hover:opacity-90"
                type="button"
                onClick={handleNext}>
                <span className="inline-block h-8 w-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
                <span className="sr-only">Next</span>
            </button>
        </div>
    );
}
