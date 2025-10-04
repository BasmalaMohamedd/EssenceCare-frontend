import React from 'react'

const Category = ({imgUrl, label}) => {
  return (
    <div className='border border-gray-200 p-1 border-r-2 content-center'>
        <img className=" w-24 h-24 bg-white" src={imgUrl} alt="" />
        <p className='text-md text-center font-bold'>{label}</p>
            
    </div>
  )
}

export default Category
