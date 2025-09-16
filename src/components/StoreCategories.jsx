
import React from 'react'
import Category from './Category'

const StoreCategories = () => {
  return (
    <section className='bg-[#FAF7F3] p-5'>
        <h1 className='text-center text-3xl'>SHOP BY CATEGORY</h1>
        <div className='flex justify-evenly flex-wrap md:space-x-20 p-4'>
            <a href='#'>
                <Category
                 imgUrl={"https://png.pngtree.com/png-vector/20230506/ourmid/pngtree-beauty-and-womens-products-png-image_7083084.png"}
                 label={"ALL Products"}/>
            </a>
            <a href='#'>
                <Category
                 imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSkwqssB8m6zw_k4fR2w_0tDpeRvjE4HVlPA&s"}
                 label={"Skin care"}/>

            </a>
            <a href='#'>
                <Category
                 imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1_xjo1b84WHZ_GWIoQawmFIc0Bt9o1QBNfA&s"}
                 label={"Body Care"}/>

            </a>
            <a href='#'>
                <Category
                 imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKnHjcZPrxltVhcy1EaLiHATSaiQ0HN2HLKw&s"}
                 label={"Hair Care"}/>

            </a>
            <a href='#'>
                <Category
                 imgUrl={"https://img.freepik.com/free-vector/bag-with-cosmetics-realistic-composition-with-isolated-image-open-vanity-case-with-brushes-lipstick-illustration_1284-57081.jpg"}
                 label={"Make up"}/>

            </a>
            <a href='#'>
                <Category
                 imgUrl={"https://atlas-content-cdn.pixelsquid.com/stock-images/vitamin-xwLGVl5-600.jpg"}
                 label={"Vitamins"}/>

            </a>
        </div>
    </section>
  )
}

export default StoreCategories
