import './App.css'
import Navbar from './Navbar'
import Card from './Card'
import Filters from './Filters'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts]=useState([]);
  const API="https://api.pujakaitem.com/api/products";
  const getProducts = async (url)=>{
    const res= await axios.get(url);
    console.log(res);
    setProducts(res.data);

  }
  useEffect(()=>{
    getProducts(API);
  },[])

  return (
    <div>
      <Navbar />
      <div className='box'>
        <div className='filters'>
          <Filters />
        </div>

        <div className='cards'>
          {products.map((product, index)=>{
            return(
              <Card 
                name={product.name}
                price={product.price}
                img={product.image}
              />
            )
          })}
        </div>
      </div>

    </div>

  )
}

export default App
