import React, { createContext, useContext, useReducer } from 'react'
import {faker} from '@faker-js/faker'; //nope
import { cartReducer } from './Reducer';

const Cart = createContext();

const Context = ({children}) => {

  const Products = [...Array(20)].map(() => ({
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.url(),
      inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
      fastDelivery: faker.datatype.boolean(),
      ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

    const [state, dispatch] = useReducer(cartReducer, {
      products: Products,
      cart:[]
    });

 
  return <Cart.Provider value={{state, dispatch}}>{children}</Cart.Provider>  
};

export default Context;

export const CartState = () => {
  return useContext(Cart)
}