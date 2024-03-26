import React, { useState } from 'react'

import ModalCreateTask from '../ModalCreateTask'

export default function Task({task,updateStateFromFirebase,updateTaskFromFirebase,deleteTaskFormFirebase}) {

  const {direction, date, clientName , hour , description , completed , inCharge,id} =task

  const [modalForm ,setModalForm] = useState(false)

  const [generalDataForm , setGeneralDataForm] = useState({titleForm:'' , buttonForm:'' , methodForm:''})

  const taskToEdit = {clientName,description,direction,inCharge,date,hour,id}



  // METODOS BUTTONS TASK
  const handleChangeState= () =>{
    updateStateFromFirebase('tasks',id,!completed)
  }


  const handleEditTask =(titleForm,buttonForm,methodForm)=>{
    setGeneralDataForm({titleForm,buttonForm,methodForm})
    setModalForm(!modalForm)
  }
    
  
  const handleDeleteTask = () =>{
      deleteTaskFormFirebase('tasks',id)
    }


  return (
    <article className={`pb-[15px] pt-[8px] px-[17px] flex flex-col gap-[10px] bg-gray-100 rounded-[10px] dark:bg-[#202020] transition-all duration-300 ${completed && 'border-2 border-[#be4848cc]'}`}>

        <div className="flex 550:flex-col-reverse 550:gap-[2px]">

          <div className="flex  flex-col flex-1 justify-end gap-[10px] 550:items-center 550:gap-[2px]">
            <h4 className='text-skyblue-text text-[18px]' >{direction}</h4>

            <h4 className=' text-black-text text-[20px] dark:text-white-text transition-all duration-300'>{clientName}</h4>
          </div>

          <div className="flex flex-col items-end  550:flex-row  550:justify-between 550:items-center">

                <span className={`text-purple-color text-[32px] font-semibold 550:text-[24px] ${completed && 'line-through'}`}>{date}</span>
                <span className='text-purple-color text-xl 550:text-[14px]'>{hour}</span>
          </div>

        </div>


        <div className="flex 550:flex-col">

              <div className="flex flex-col flex-1 justify-between gap-[8px] pr-2">
                <p className={`text-NoSelectedFilter 550:text-justify dark:text-[#ffffff80] transition-all duration-300 ${completed && 'line-through'}`}>{description} </p>
                
                <div className='flex'>

                  <p className='text-purple-color  flex items-end 550:justify-center'>{inCharge} </p>
                  {completed && <span className='w-full text-red-400 text-2xl text-center'>COMPLETADO</span> }
                </div>


              </div>

              <div className="flex flex-col text-white-text items-end justify-end pt-4 gap-5 550:flex-col-reverse 550:items-center 550:gap-2">
                
                <button 
                  className='bg-[#B0EEB6] hover:bg-[#8fc595] px-[18px] max-h-50px w-[120px] py-4  rounded-[4px] text-black-text text-sm 550:w-full 550:py-3 transition-all duration-300'
                  onClick={handleChangeState}
                >
                        Estado
                </button>




                    <div className='flex gap-3 550:w-full 550:gap-2'>

                      {completed || 
                        <button
                          className='py-2 px-3  bg-purple-color rounded-[4px] 550:flex-1 hover:bg-[#882f94] transition-all duration-300'
                          onClick={() => handleEditTask('Editar tarea','Editar tarea','update')}
                        >
                          Editar
                        </button>
                      }
                        <button
                          className='py-2 px-3 550:flex-1 bg-skyblue-text rounded-[4px]'
                          onClick={handleDeleteTask}
                        >
                          Eliminar
                        </button>

                    </div>





              </div>
        </div>
        {
          modalForm && 
            
          <ModalCreateTask
              toggleModalNewTask={handleEditTask} generalDataForm={generalDataForm} taskToEdit={taskToEdit} updateTaskFromFirebase={updateTaskFromFirebase}
          />
        }
    </article>
  )
}
