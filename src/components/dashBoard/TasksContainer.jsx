import React from 'react'
import Task from './Task'

export default function TasksContainer({data,updateStateFromFirebase,updateTaskFromFirebase,deleteTaskFormFirebase}) {
  return (
    <>
      {
         data.length?
        <section className='justify-center px-[40px] grid grid-cols-auto-fill-440 gap-x-[82px] gap-y-[54px] tasksContainer pb-8 961:overflow-y-scroll 960:overflow-y-auto hide-scrollbar'>

            {

               data.map( task => 
                    <Task key={task.id} task={task} updateStateFromFirebase={updateStateFromFirebase} updateTaskFromFirebase={updateTaskFromFirebase} deleteTaskFormFirebase={deleteTaskFormFirebase} /> 
                )

            }
        </section>

        :

        <section className=' flex justify-center items-center px-[40px] gap-x-[82px] gap-y-[54px] tasksContainer pb-8 h-[730px]'>
          <div className="flex justify-center items-center">
            <p className='dark:text-white-text text-black-text text-4xl'>Aqui no hay Tareas</p>
          </div>
        </section>
      }

    </>
  )
}
