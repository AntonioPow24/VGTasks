import React, { useEffect, useState } from 'react'
import ModalCreateTask from '../ModalCreateTask'


export default function Filter({changeFilter , filter,addDataToFirebase ,data}) {

    const [modalForm ,setModalForm] = useState(false)
    const [generalDataForm , setGeneralDataForm] = useState({titleForm:'' , buttonForm:'' , methodForm:''})


    // Funcion abrir y cerrar Modal
    const toggleModalNewTask = (titleForm,buttonForm,methodForm) =>{
        setGeneralDataForm({titleForm,buttonForm,methodForm})
        setModalForm(!modalForm)
    }

    // Contar las tareas por estado
    const computedCompletedTasks = (data) => data.filter(task => task.completed).length

    
    // Completed tasks
    const totalTasks = data && data.length
    const completedTasks = data && computedCompletedTasks(data)
    const pendingTasks = data && totalTasks - completedTasks

    // useEffect(()=>{

    // })



  return (

    <>
    
        <div className='flex px-[48px] py-[25px] gap-10 1430:flex-col-reverse 1430:gap-4 960:px-[20px]'>

            <div className="flex gap-[40px] justify-center 530:flex-col 550:gap-0 ">
                <button
                    className={`transition-all duration-300 ${filter === 'total'? 'text-purple-color' : 'text-NoSelectedFilter dark:text-[#b3aaaaa4]'} text-[32px]`}

                    onClick={()=>changeFilter('total')}
                >
                    <span className='960:text-[25px]'>Total</span> 
                    <span className='text-[22px] ml-2 960:text-[18px]'>{totalTasks}</span>  
                </button>

                <button
                    className={`transition-all duration-300 ${filter === 'pending'? 'text-purple-color' : 'text-NoSelectedFilter dark:text-[#b3aaaaa4]'} text-[32px]`}

                    onClick={()=>changeFilter('pending')}
                ><span className='960:text-[25px]'>Pendientes</span>
                    <span className='text-[22px] ml-2 960:text-[18px]'>{pendingTasks}</span>
                </button>

                <button
                    className={`transition-all duration-300 ${filter === 'completed'? 'text-purple-color' : 'text-NoSelectedFilter dark:text-[#b3aaaaa4]'} text-[32px]`}

                    onClick={()=>changeFilter('completed')}
                ><span className='960:text-[25px]'>Completados</span> 
                    <span className='text-[22px] ml-2 960:text-[18px]' >{completedTasks}</span>
                </button>
            </div>

            <div className="flex gap-[35px] flex-1 960:flex-col 530:gap-[20px]">

                <div className="flex items-center justify-center bg-bg-white dark:bg-[#202020] transition-all duration-300 gap-4 text-xl rounded-lg pl-3 w-full flex-1 min-w-[180px] 960 z-10">

                    <i className='bx bx-search text-3xl text-black-text dark:text-bg-white transition-all duration-300'></i>

                    <input 
                        className='bg-transparent focus:outline-none w-full dark:text-white-text transition-all duration-300'
                        type="text" 
                        placeholder='Buscar tareas por encargado'
                    />

                </div>


                <div className="flex items-center  py-[3px] px-2 gap-[6px] bg-bg-white rounded-lg text-black-text relative z-10">

                    <select 
                        className='appearance-none bg-transparent text-xl focus:outline-none pl-4 pr-8 z-10 w-full' 
                        name="filterOrderBy" 
                        id="filterOrderBy"
                        defaultValue=""
                        
                    >
                        <option className='text-[16px] text-NoSelectedFilter' value="" disabled >Ordenar por</option>
                        <option className='text-[16px] text-black-text' value="encargado">Encargado</option>
                        <option className='text-[16px] text-black-text' value="fecha">Fecha</option>
                    </select>

                        <i className='bx bx-chevron-down text-3xl pt-1 text-black-text absolute right-0' ></i>

                    
                </div>

                <button 
                    className='rounded-lg bg-bg-white px-10 py-[3px] min-w-[190px] newTaskButton'
                    onClick={() => toggleModalNewTask('Nueva Tarea','Crear tarea','create')}
                >
                    <span className='text-white-text text-xl '>Nueva tarea</span>
                </button>
            </div>
        </div>
        
        {
            modalForm && 
            
            <ModalCreateTask 
                toggleModalNewTask={toggleModalNewTask} generalDataForm={generalDataForm} addDataToFirebase={addDataToFirebase}
            />
        }
    </>
  )
}
