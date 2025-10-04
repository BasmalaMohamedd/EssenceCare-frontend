import React from 'react'
import ProductCard from '../components/ProductCard'

const AllProducts = () => {
  return (
    <div className='p-3 '>
        <h1 className='text-3xl text-center m-2 font-bold text-[#987070]'>Shop</h1>
        <h1 className='text-xl text-center text-[#987070]'>Shop/All Products</h1>
        <section className='p-5'>
        <div className='flex justify-evenly flex-wrap md:space-x-20 p-2 '>
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
