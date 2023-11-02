import React, { Dispatch, SetStateAction } from 'react';

const Stepper = ({ quantity, onQuantityChange }:{quantity:number,onQuantityChange:Dispatch<SetStateAction<number>>}) => {
  const handleIncrement = () => {
    onQuantityChange(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="flex items-center border rounded  border-primary">
      <button
        onClick={handleDecrement}
        className="px-2 py-1 text-base text-type-high cursor-pointer"
      >
        -
      </button>
      <span className="px-2 py-1">{quantity}</span>
      <button
        onClick={handleIncrement}
        className="text-type-high text-base px-2 py-1 cursor-pointer"
      >
        +
      </button>
    </div>
  );
};

export default Stepper;
