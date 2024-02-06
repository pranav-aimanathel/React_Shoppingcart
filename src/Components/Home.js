import React from 'react'
import { CartState} from "../context/Context"
import SingleProduct from './SingleProduct';
import './Home.css';
import Filter from './Filter';


const Home = () => {
const { state: {products}, } = CartState();
console.log(products);

  return (
    <div className='home'>
      <Filter />
      <div className='productContainer'>
        {products.map((prod) => {
          return <SingleProduct prod={prod} key={prod.id} />
        })}
      </div>
    </div>
  )
}

export default Home;