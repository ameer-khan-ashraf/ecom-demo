import React, { Dispatch, SetStateAction, useState } from 'react'
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from './svg';


const ImageCarousel = ({ images,setImage }:{images:string[],setImage:Dispatch<SetStateAction<null | string>>}) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
  
    const imagesToShow = 4; // Number of images to show in each slide
    const totalImages = images.length;
  
    const handlePrevClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex - imagesToShow < 0 ? totalImages - imagesToShow : prevIndex - imagesToShow));
    };
  
    const handleNextClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex + imagesToShow >= totalImages ? 0 : prevIndex + imagesToShow));
    };
  
    const visibleImages = images.slice(currentIndex, currentIndex + imagesToShow);
  
    return (
      <div className=" flex gap-4">
      <button onClick={handlePrevClick} className="">
        <ChevronLeft/>
      </button>
      <div className="flex gap-8">
        {visibleImages.map((image:string, index:number) => (
          <Image
            key={index}
            src={image}
            alt={`Image ${currentIndex + index + 1}`}
            className="aspect-square rounded-md border border-slate-200 object-cover hover:cursor-pointer w-[50px] md:w-[75px]"
            width='75'
            height='75'
            onClick={()=>setImage(image)}
          />
        ))}
      </div>
      <button onClick={handleNextClick} className="">
        <ChevronRight/>
      </button>
    </div>
    );
  };

export default ImageCarousel