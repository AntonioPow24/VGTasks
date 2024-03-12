import React, { useState } from 'react'
import Filter from '../components/dashBoard/Filter'

export default function Dashboard() {

  const [ filter,setFilter ]=useState('total')


  const changeFilter = newFilter => setFilter(newFilter)

  return (
    <>
      <Filter changeFilter={changeFilter} filter={filter} />

      <section className='bg-red-300 px-[48px] grid grid-cols-auto-fill-420 gap-x-[82px] gap-y-[54px]'>
        <div className="bg-slate-300">
          1
        </div>
        <div className="bg-slate-300">
          1
        </div>
        <div className="bg-slate-300">
          1ss
        </div>
      </section>
    </>
  )
}
