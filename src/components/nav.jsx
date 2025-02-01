import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping ,faBars,faChevronRight} from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';
import { Route, Routes ,NavLink,Link} from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
 const Nav = () => {
   const [visible, setVisible ]=useState(false);
   const{setShowSearch}=useContext(ShopContext);
  return (
 
    <div className=' bg-cyan-400 flex items-center justify-between py-5 font-medium'>
                    <a href="/">
                        <img 
                        src={logo}
                        className='pl-10 w-36'/>
                    </a>

                  <ul className=" hidden sm:flex gap-5 text-sm text-grey-700">
                      <NavLink to='/' className='flex flex-col items-center gap-1'>
                       <p>HOME</p>
                       <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden '></hr>
                      </NavLink>
                      <NavLink to='/collections' className='flex flex-col items-center gap-1'>
                       <p>COLLECTION</p>
                       <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                      </NavLink>
                      <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                       <p>CONTACT</p>
                       <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                      </NavLink>
                      <NavLink to='/about' className='flex flex-col items-center gap-1'>
                       <p>ABOUT</p>
                       <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                      </NavLink>
                      <NavLink to='/becomeSeller' className='flex flex-col items-center gap-1'>
                       <p>BECOME A SELLER</p>
                       <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                      </NavLink>
                  </ul>   
                  <div className='flex item-center gap-6'>
                     <NavLink to="/collections" ><FontAwesomeIcon onClick={()=>setShowSearch(true)} icon={faMagnifyingGlass} /></NavLink>
                     <div className='group relative'>
                        <NavLink className='w-5 cursor-pointer' to="/login" ><FontAwesomeIcon icon={faUser} /></NavLink>
                        <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                             <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-grey-500 rounded'>
                                 <p className='cursor-pointer hover:text-black '>My profile</p> 
                                 <p className='cursor-pointer hover:text-black '>Orders</p>
                                 <p className='cursor-pointer hover:text-black '>Logout</p>
                             </div>  
                         </div>    
                     </div>
                     <NavLink className='relative pr-8' to="/cart" >
                        <FontAwesomeIcon icon={faCartShopping} />
                        <p className='absolute right-[20px] bottom-[5px] w-4 text-center leading-4 bg-black text-white
                          aspect-square rounded-full text-[10px]'>0</p>
                     </NavLink>
                     <FontAwesomeIcon onClick={()=>setVisible(true)} className='w-5 cursor-pointer py-1 pr-8 sm:hidden' icon={faBars}></FontAwesomeIcon>     
                   </div>
                   <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full':'w-0'}`}> 
                             <div className='flex flex-col text-grey-600'>
                                  <div onClick={()=>setVisible(false)} className='flex item-center gap-4 p-3 cursor-pointer'>
                                    <FontAwesomeIcon className='h-4 py-1 rotate-180' icon={faChevronRight}></FontAwesomeIcon>
                                    <p>BACK</p>
                                  </div>
                                  <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                                  <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collections'>COLLECTIONS</NavLink>
                                  <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
                                  <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                                  <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/becomeSeller'>BECOME A SELLER</NavLink>   
                             </div>
                   </div>
                            
    </div>
  )
}
export default Nav