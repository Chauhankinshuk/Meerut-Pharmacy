import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState,useContext,useEffect } from 'react';
import {ShopContext} from '../context/shopContext'
import Title from '../components/title'
import ProductItem from '../components/productItem'
import Offer from '../components/offer'
import OurPolicy from '../components/ourpolicy';
 const Collections = () => {
  const {products,search ,showSearch}=useContext(ShopContext);
   const [showFilter,setShowFilter]=useState(false);
   const [sortType,setSortType]=useState('relavent');
   const [filterProducts,setFilterProducts]=useState([]);
   const[category, setCategory]=useState([]);
   const[subCategory, setSubCategory]=useState([]);
   const toggleCategory=(e)=>{
      if(category.includes(e.target.value)){
        setCategory(prev=>prev.filter(item=>item!==e.target.value))
      }
      else{
        setCategory(prev=>[...prev,e.target.value])
      }
   }
   const toggleSubCategory=(e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=>prev.filter(item=>item!==e.target.value))
    }
    else{
      setSubCategory(prev=>[...prev,e.target.value])
    }
 }
   const applyFilter=()=>{
    let productsCopy=products.slice();
    if(showSearch&& search){
      productsCopy=productsCopy.filter(item=> item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(category.length>0){
      productsCopy=productsCopy.filter(item=>category.includes(item.category));

    }
    if(subCategory.length>0){
      productsCopy=productsCopy.filter(item=>subCategory.includes(item.subCategory));

    }
    setFilterProducts(productsCopy)
   }
    
    const sortProduct=()=>{
      let fpCopy=filterProducts.slice();
      switch(sortType){
         case 'low-high':setFilterProducts(fpCopy.sort((a,b)=>(a.price  - b.price)));
         break;
         case 'high-low':setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
         break;
         default:
          applyFilter();
          break;
      }
    }
   
   useEffect(()=>{
     applyFilter();
   },[category,subCategory,search,showSearch])
   useEffect(()=>{
       sortProduct();
   },[sortType])

  return (
    <div>
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      <div className=' ml-10 min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS 
          <FontAwesomeIcon className={`h-3 sm:hidden ${showFilter?'rotate-90':''}`} icon={faChevronRight}></FontAwesomeIcon>
        </p>
        {/* Categories filter*/ }
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ml-10 mr-10 ${showFilter?'':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
             <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'medecine'} onChange={toggleCategory}/>Medicine
             </p>
             <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'healthCare'}onChange={toggleCategory}/>HealthCare
             </p>
             <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'surgical'}onChange={toggleCategory}/>Surgical
                </p>
          </div>
        </div>
        {/*subCategories Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ml-10 mr-10 ${showFilter?'':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'> TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
             <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'capsule'} onChange={toggleSubCategory}/>Capsule
             </p>
             <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'tablets'} onChange={toggleSubCategory}/>Tablets
             </p>
             <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'fragile'} onChange={toggleSubCategory}/>Fragile
                </p>
            </div>
          </div>
        </div>
    {/*right side */}
          <div className='flex-1 mr-10'>
                  <div className='flex justify-between text-base sm:text-2xl mb-4'>
                       <Title text1={"ALL"} text2={"COLLECTIONS"}></Title>
                       <select  onChange={(e)=>setSortType(e.target.value)} className='border border-gray-300 text-sm px-2'>
                        <option value="relavent">Sort By: Relavent</option>
                        <option value="low-high">Sort By: Low to High</option>
                        <option value="high-low">Sort By: High to Low</option>
                       </select>
                  </div>
                  {/*Map Products */}
                  <div className='grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                        {
                          filterProducts.map((item,index)=>(
                            <ProductItem 
                            key={index}
                           id={item._id}
                           image={item.image}
                            name={item.name}
                            price={item.price}></ProductItem>
                          ))
                        }
                  </div>
          </div>
          
    </div>
    <Offer></Offer>
    <OurPolicy></OurPolicy>
    </div>
  )
}
export default Collections