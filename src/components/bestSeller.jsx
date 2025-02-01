import React, { useContext, useState, useEffect } from "react";
import Title from "./title";
import ProductItem from "./productItem";
import { ShopContext } from "../context/shopContext";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      const bestProduct = products.filter((item) => (item.bestseller));
      setBestSeller(bestProduct.slice(0, 5));
    }
  }, [products]); // Add 'products' as a dependency

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1="BEST" text2="SELLERS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
          consectetur accusantium. Voluptates sapiente et alias saepe corporis
          corrupti reiciendis molestias adipisci, quis atque, debitis neque
          natus dolor ratione sint laboriosam.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 m-10">
        {bestSeller.map((item) => (
          <ProductItem
            key={item._id} // Use unique '_id' as key
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
