import React from 'react'
import ProductCard from './ProductCard'

const BestSellers = () => {
  return (
    <div>
      <section className='md:m-5'>
        <h2 className='text-center text-3xl'>OUR BEST SELLERS</h2>
        <div className='m-10 flex border border-gray-200 p-3 overflow-auto'>
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

export default BestSellers
