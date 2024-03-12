import React from 'react'

export default function UserCard() {
  return (
    <article className='px-4 flex bg-white py-[19px] rounded-[10px] items-center'>
        <div className="flex-1">
            <p className='text-black-text text-2xl 800:text-xl'>Nombre del Usuario</p>
        </div>

        <div className="flex gap-[15px]">
            <button className='px-[15px] py-2 bg-skyblue-text flex items-center justify-center rounded-[4px] hover:bg-[#44abca]'>
                <i className="bx bx-edit text-xl text-white-text"></i>
            </button>

            <button className='px-3 py-2 bg-purple-color flex items-center justify-center rounded-[4px] hover:bg-[#8e6cd1]'>
                <i className="bx bx-x text-2xl text-white-text font-thin"></i>
            </button>
        </div>
    </article>
  )
}
