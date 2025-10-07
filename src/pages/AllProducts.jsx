import React from 'react'
import ProductCard from '../components/ProductCard'

const AllProducts = () => {
  return (
    <div className='p-3 '>
        <h1 className='text-xl ml-4 text-center m-2 font-light text-[#987070]'>Shop/ <span className='text-2xl font-bold text-center text-[#987070]'>All Products</span></h1>
        <section className='p-5'>
        <div className='flex justify-around flex-wrap md:space-x-20 p-2 '>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </section>
    </div>
  )
}

export default AllProducts
