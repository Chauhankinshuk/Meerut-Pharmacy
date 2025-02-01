import React, { useContext,useState, useEffect } from 'react'
import { ShopContext } from '../context/shopContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faXmark } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
const searchBar = () => {
    const {search,setSearch,showSearch,setShowSearch}=useContext(ShopContext);
    const location =useLocation();
    const[visible,setVisible]=useState(false);
    useEffect(()=>{
         if(location.pathname.includes('collections')){
             setVisible(true)
         }
         else{
            setVisible(false)
         }
    },[location])
  return showSearch && visible? (
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type='text' placeholder='Search'></input>
            <FontAwesomeIcon  className='w-4' icon={faMagnifyingGlass}></FontAwesomeIcon>
        </div>
           <FontAwesomeIcon onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer' icon={faXmark}></FontAwesomeIcon>
    </div>
  ): null
}

export default searchBar