import React, { useState } from 'react'
import Filter from '../components/dashBoard/Filter'
import Task from '../components/dashBoard/Task'

export default function Dashboard() {

  const [ filter,setFilter ]=useState('total')


  const changeFilter = newFilter => setFilter(newFilter)

  return (
    <div className='overflow-y-scroll max-h-screen hide-scrollbar'>
      <Filter changeFilter={changeFilter} filter={filter} />

      <section className='px-[40px] grid grid-cols-auto-fill-440 gap-x-[82px] gap-y-[54px] tasksContainer pb-8 961:overflow-y-scroll 960:overflow-y-auto hide-scrollbar'>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
      </section>
    </div>
  )
}
