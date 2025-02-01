import React, { useState, useEffect, useContext } from 'react';
import  {ShopContext} from '../context/shopContext';
import ProductItem from './productItem';
import Title from './title';

const LatestCollection = () => {
  const { products = [] } = useContext(ShopContext); // Provide fallback to an empty array
  const [latestProducts, setLatestProducts] = useState([]);
  

  useEffect(() => {
    if (products && products.length > 0) {
      setLatestProducts(products.slice(0, 10));
    } else {
      setLatestProducts([]); // Fallback if products is undefined or empty
    }
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1="LATEST" text2="COLLECTIONS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque odit natus distinctio numquam omnis totam eveniet, ipsam at aliquam beatae, doloribus asperiores nulla molestias quae vel. Perspiciatis voluptatum fugiat rerum.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 m-10">
        {Array.isArray(latestProducts) &&
          latestProducts.map((item, index) => (
            <ProductItem
              key={index}
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

export default LatestCollection;
