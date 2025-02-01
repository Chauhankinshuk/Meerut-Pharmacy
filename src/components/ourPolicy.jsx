import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate, faCircleCheck ,faHeadset} from '@fortawesome/free-solid-svg-icons';
const ourPolicy = () => {
  return (
    <div className='flex felx-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 '>
          <div>
              <FontAwesomeIcon  className='w-24 m-auto mb-5' icon={faRotate} /> 
              <p className='font-semibold'>Easy Exchange Policy</p>
              <p className='text-gray-400'>We Offer Hassle Free Exchange policy</p>
          </div>
          <div>
              <FontAwesomeIcon  className='w-24 m-auto mb-5' icon={faCircleCheck} /> 
              <p className='font-semibold'>7 Days Return Policy</p>
              <p className='text-gray-400'>We Provide 7 days free return policy</p>
          </div>
          <div>
              <FontAwesomeIcon  className='w-24 m-auto mb-5' icon={faHeadset} /> 
              <p className='font-semibold'>Best Customer Support</p>
              <p className='text-gray-400'>We Provide 24/7 customer support</p>
          </div>
    </div>
  )
}

export default ourPolicy