import React from 'react'

export default function PopMessage({message}) {
  return (
    <>
        <div 
            className='rounded-md px-4 py-2 absolute right-1 top-1'
        >
            {message}
        </div>
    </>
  )
}
