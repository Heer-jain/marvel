import React from 'react'

const Comics = ({items}) => {
  return (
    <div className='flex m-5 gap-5 flex-wrap'>
    {items.map((item)=>{
        return(<>
            <div className='m-3 cursor-pointer space-y-4'>
            <img src={item.src} className='w-60 rounded-md  hover:scale-105 object-fill '/>
            <div className='mx-1 w-56 text-wrap'>
                <div className='text-2xl'>{item.name}</div>
                <div>{item.writer}</div>
            </div>
            </div>
            </>)
    })}
    </div>
  )
}

export default Comics
