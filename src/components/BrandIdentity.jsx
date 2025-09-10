import React from 'react'

const BrandIdentity = () => {
  return (
    <div className=' m-0 bg-[#FAF7F3] border-y border-gray-200'>
        {/* <p className='mt-3 text-2xl md:text-6xl text-[#987070] md:text-center font-bold italic'>Essence Care</p> */}
        <div className='flex flex-row'>
            <div className=' m-4 flex-2'>
                <p className='m-2 text-sm md:text-4xl'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium, urna nec dictum volutpat, augue odio facilisis lorem, eu vulputate nisi elit ut eros.
                </p>
            </div>
            <div className='flex-1'>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/044/450/438/small_2x/luxurious-skin-care-products-display-on-transparent-background-png.png" alt="logo" />
            </div>
        </div>
        
    </div>
  )
}

export default BrandIdentity
