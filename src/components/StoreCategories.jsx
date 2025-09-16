
import React from 'react'

const StoreCategories = () => {
  return (
    <section className='bg-[#FAF7F3] p-5'>
        <h1 className='text-center text-3xl'>SHOP BY CATEGORY</h1>
        <div className='flex justify-evenly flex-wrap md:space-x-20 p-4'>
            <a className='border border-gray-200 p-1 border-r-2' href='#'>
                <img className=" w-24 h-24 bg-white" src="https://png.pngtree.com/png-vector/20230506/ourmid/pngtree-beauty-and-womens-products-png-image_7083084.png" alt="" />
                <p className='text-md text-center font-bold'>ALL Products</p>
            </a>
            <a className='border border-gray-200 p-1 border-r-2' href='#'>
                <img className="w-24 h-24 bg-white"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSkwqssB8m6zw_k4fR2w_0tDpeRvjE4HVlPA&s" alt="" />
                <p className='text-md text-center font-bold'>Skin care</p>

            </a>
            <a className='border border-gray-200 p-1 border-r-2' href='#'>
                <img className="w-24 h-24 bg-white"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1_xjo1b84WHZ_GWIoQawmFIc0Bt9o1QBNfA&s" alt="" />
                <p className='text-md text-center font-bold'>Body Care</p>

            </a>
            <a className='border border-gray-200 p-1 border-r-2' href='#'>
                <img className="w-24 h-24 bg-white"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKnHjcZPrxltVhcy1EaLiHATSaiQ0HN2HLKw&s" alt="" />
                <p className='text-md text-center font-bold'>Hair Care</p>

            </a>
            <a className='border border-gray-200 p-1 border-r-2' href='#'>
                <img className="w-24 h-24 bg-white"src="https://img.freepik.com/free-vector/bag-with-cosmetics-realistic-composition-with-isolated-image-open-vanity-case-with-brushes-lipstick-illustration_1284-57081.jpg" alt="" />
                <p className='text-md text-center font-bold'>Makeup</p>

            </a>
            <a className='border border-gray-200 p-1 border-r-2' href='#'>
                <img className="w-24 h-24 bg-white"src="https://atlas-content-cdn.pixelsquid.com/stock-images/vitamin-xwLGVl5-600.jpg" alt="" />
                <p className='text-md text-center font-bold'>Vitamins</p>

            </a>
        </div>
    </section>
  )
}

export default StoreCategories
