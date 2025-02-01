import React from 'react'

const offer = () => {
  return (
    <div className="text-center">
           <div className="justify-center text-center px-14 py-10">
           <p className="font-bold">Subscribe now and get 20% off</p>
           <p className="py-4">Lorum ipsum is simply a dummy text for printing and typesetting industry.</p>
          
           </div>
            <input
              type="email"
              placeholder='Enter Your email'
              className=" p-2 w-1/4 border px-2 py-3 my-3 w-100"
            />
            <button className="bg-black text-white px-3 py-3">
              Subscribe
            </button>
          </div>
  )
}

export default offer