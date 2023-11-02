import { useState, useEffect } from 'react';
import { cartItemType } from '../types';

function useCart() {
  const [cart, setCart] = useState<cartItemType[]>([]);

  // Function to add a product to the cart
  const addToCart = (product:cartItemType) => {

    const {id,quantity} = product

    if (!id || quantity <= 0) {
      alert('Please select a product and enter a valid quantity.');
      return;
    }

    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex((item) => item.id === id);

    let newCart

    if (existingProductIndex !== -1) {
      // If the product is already in the cart, update its quantity
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantity;
      setCart(updatedCart);
      newCart = updatedCart
    } else {
        newCart = [...cart, product]
      // If the product is not in the cart, add it
      setCart(newCart);
    }
   
    // Save the cart to localStorage
    localStorage.setItem('cart', JSON.stringify(newCart));

    window.dispatchEvent(new StorageEvent("custom-storage-event-name"));
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId:number) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    window.dispatchEvent(new StorageEvent("custom-storage-event-name"));
  };
  
  // Load the cart from localStorage when the component mounts
  useEffect(() => {
      const cart = localStorage.getItem('cart')
      if(cart){
          const storedCart = JSON.parse(cart);
          if (storedCart) {
            setCart(storedCart);
          }
      }

      const checkCartData = () =>{
        const cart = localStorage.getItem('cart')
        if(cart){
            const storedCart = JSON.parse(cart);
            if (storedCart) {
              setCart(storedCart);
            }
        }
    }

      window.addEventListener('custom-storage-event-name', checkCartData)
      window.addEventListener('storage', checkCartData)

      return () => {
          window.removeEventListener('custom-storage-event-name', checkCartData)
          window.removeEventListener('storage', checkCartData)
      }
  }, []);

  return {
    cart,
    addToCart,
    removeFromCart
  };
}

export default useCart;
