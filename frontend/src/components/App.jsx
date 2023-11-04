import './App.css'
import Navbar from './Navbar'
import Card from './Card'
import Filters from './Filters'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [allp,setAllp]=useState([])
  const [products, setProducts]=useState([]);
  const [search, setSearch] = useState("");
  const [categories, setCategories]= useState([false,false,false,false])
  const API="https://api.pujakaitem.com/api/products";
  const getProducts = async (url)=>{
    const res= await axios.get(url);
    await setAllp(res.data)
    setProducts(allp)
  }
  useEffect(()=>{
    getProducts(API);
  },[])

  return (
    <div>
      <Navbar />
      <div className='box'>
        <div className='filters'>
          <Filters search={search} setSearch={setSearch} categories={categories} setCategories={setCategories} products={products} setProducts={setProducts} allp={allp}/>
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
