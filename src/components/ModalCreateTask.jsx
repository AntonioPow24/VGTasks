import React, { useEffect, useState } from 'react'
import { handleListen } from '../utils/handleListenMicrophone'
import { formatDateToISO, formatTimeToISO } from '../utils/formatDateString'
import LoaderIcon from './LoaderIcon'


export default function ModalCreateTask({toggleModalNewTask, generalDataForm,addDataToFirebase, taskToEdit=null ,updateTaskFromFirebase }) {



  const {titleForm , buttonForm , methodForm} = generalDataForm

  const [inProcess,setInProcess] = useState(false)


  // ESTADO PARA LOS DATOS DE LA TAREA
  const [dataNewTask , setDataNewTask] = useState({
    clientName: taskToEdit?.clientName || '',
    description:taskToEdit?.description || '',
    direction:taskToEdit?.direction || '',
    inCharge:taskToEdit?.inCharge || '',
    date:taskToEdit && formatDateToISO(taskToEdit.date) || '',
    hour:taskToEdit && formatTimeToISO(taskToEdit?.hour) || '',
    completed:false
  })

  // Estado para saber si esta escuchando o no
  const [listening, setListening] = useState(false);


  // Estilos para el input
  const inputStyle ='relative w-full text-[14px] bg-bg-principal rounded-md   flex items-center justify-center pr-[9px] inputToWrite '




  // Eventos Del FORMULARIO

  const handleChangeDataTask = e =>{
      const {name ,value} = e.target


        setDataNewTask({...dataNewTask, [name]: value})

  }


  const handleSubmitTaskForm = async (e) =>{
    e.preventDefault()

    try {
      setInProcess(true)

      methodForm === 'create'?
      await addDataToFirebase(dataNewTask,toggleModalNewTask)

      : 
      await updateTaskFromFirebase('tasks',taskToEdit.id,dataNewTask,toggleModalNewTask)

    } catch (error) {
        console.log(error);
      
    }finally{
      setInProcess(false)
    }


  }


  const handleListening =()=>{

      handleListen(dataNewTask, setDataNewTask);

  }

  // const handleEndListening = () => {
  //   setListening(false); // Marcar que el reconocimiento de voz ya no está activo
  // }


  return (
    <>
    
    <section className='w-screen h-screen fixed z-50  top-0 right-0 left-0 bottom-0 flex items-center justify-center'>

      <div className="w-screen h-screen fixed top-0 right-0 left-0 bottom-0  bg-[#131313d8]" onClick={toggleModalNewTask}></div>



        <form   
              className='550:max-w-[380px] 550:min-w-[300px] bg-bg-white flex flex-col justify-center items-center gap-[23px] py-[27px] px-[41px] 550:px-[15px] rounded-xl absolute'
              
        >

              <h2 className='text-purple-color text-3xl 550:text-2xl'>{titleForm.toUpperCase() }</h2>

              <div className="flex  flex-col items-center gap-[27px]  w-full">

                <div className={`${inputStyle} h-[36px]`}>
                    <input 
                        className='flex-1  h-full' 
                        type="text"  
                        name='clientName' 
                        placeholder=' '
                        required
                        autoComplete='client'
                        value={dataNewTask.clientName}
                        onChange={handleChangeDataTask}
                    />
                                
                    <i className='bx bx-user text-xl text-purple-color'></i>

                    <label className='absolute left-[9px] text-NoSelectedFilter' htmlFor="email">Nombre del Cliente (*)</label>
                </div>

                <div className={`${inputStyle} h-[101px]`}>
                    <textarea 
                        className='flex-1  h-full py-1' 
                        name='description' 
                        placeholder=' '
                        autoComplete='client'
                        value={dataNewTask.description}
                        onChange={handleChangeDataTask}
                    />
                                
                    <i 
                      className='bx bx-microphone text-xl text-purple-color hover:scale-150 transition-all duration-300 cursor-pointer'

                      onClick={handleListening  }
                    >

                    </i>

                    <label className='absolute left-[9px] text-NoSelectedFilter' htmlFor="email">Description</label>
                </div>


                {/* DIRECCION Y ENCARGADO DE LA TAREA */}
                <div className='w-full flex gap-4'>

                  <div className={`${inputStyle}  h-[36px]`}>
                      <input 
                          className='flex-1  550:max-w-[138px] h-full' 
                          type="text"  
                          name='direction' 
                          placeholder=' '
                          value={dataNewTask.direction}
                          onChange={handleChangeDataTask}
                      />
                                  
                      <i className='bx bx-home text-xl text-purple-color '></i>

                      <label className='absolute left-[9px] text-NoSelectedFilter' htmlFor="email">Direccion</label>
                  </div>

                  <div className={`${inputStyle} h-[36px]`}>
                      <input 
                          className='flex-1 550:max-w-[138px]  h-full' 
                          type="text"  
                          name='inCharge'
                          required 
                          placeholder=' '
                          value={dataNewTask.inCharge}
                          onChange={handleChangeDataTask}
                      />
                                  
                      <i className='bx bx-body text-xl text-purple-color'></i>

                      <label className='absolute left-[9px] text-NoSelectedFilter' htmlFor="email">Encargado(*)</label>
                  </div>

                </div>

                {/* FECHA Y HORA DE LA TAREA */}
                <div className='flex gap-4 w-full'>

                  <div className={`${inputStyle} h-[36px]`}>
                      <input 
                          className='flex-1  h-full' 
                          type="date"  
                          name='date' 
                          placeholder=' '
                          value={dataNewTask.date}
                          onChange={handleChangeDataTask}
                      />
                                  

                      <label className='absolute left-[9px] text-NoSelectedFilter' htmlFor="email">Fecha(*)</label>
                  </div>

                  <div className={`${inputStyle} h-[36px]`}>
                      <input 
                          className='flex-1  h-full' 
                          type="time"  
                          name='hour'
                          required 
                          placeholder=' '
                          value={dataNewTask.hour}
                          onChange={handleChangeDataTask}
                      />
                                  

                      <label className='absolute left-[9px] text-NoSelectedFilter' htmlFor="email">Hora</label>
                  </div>

                </div>


              </div>

              <p className='text-left w-full text-[#343434ad] text-sm 550:text-[11px]'>Todos los campos que incluyan (*) son obligatorios</p>

              <button 
                type='submit' 
                className='bg-purple-color w-full rounded-md py-2 text-white-text flex justify-center items-center'
                onClick={handleSubmitTaskForm}
              >
                {inProcess? <span className='flex items-center gap-3'>Cargando    <LoaderIcon/></span> : buttonForm}
              </button>

        </form>

    </section>
    </>
  )
}
