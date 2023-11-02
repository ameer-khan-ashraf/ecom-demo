import React from 'react';
import { RatingStar } from './svg';

const Rating = ({ rating }:{rating:number}) => {
  // Calculate the number of full and half stars to display
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={`text-2xl ${index < fullStars ? 'text-yellow-500' : 'text-gray-300'}`}>
          {index < fullStars ? <RatingStar className='fill-current text-highlight'/> : index === fullStars && hasHalfStar ? '½' : <RatingStar className='fill-current text-transparent'/>}
        </span>
      ))}
    </div>
  );
};

export default Rating;
