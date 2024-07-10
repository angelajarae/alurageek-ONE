import { useState, useEffect } from "react";
import Card from "./Card";
import {getAllProducts} from "../api/api";


const Products = () => {
  const [products, setProducts]=useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllProducts();
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [products]);

  return (
    <div className="flex flex-col w-3/5 overflow-y-scroll h-[38rem]">
      <h1 className="uppercase font-press-start text-xl text-center mb-4">Mis productos:</h1>
      <div className="grid grid-cols-3 gap-2 ">
        {products.map((product)=><Card key={product.id} id={product.id} name={product.name} price={product.price} img={product.img}/>)}
      </div>
    </div>
  )
}

export default Products;