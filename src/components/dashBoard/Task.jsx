import React from 'react'

export default function Task() {
  return (
    <article className='pb-[15px] pt-[8px] px-[17px] flex flex-col gap-[10px] bg-gray-100 rounded-[10px]'>

        <div className="flex 550:flex-col-reverse 550:gap-[2px]">

          <div className="flex  flex-col flex-1 justify-end gap-[10px] 550:items-center 550:gap-[2px]">
            <h4 className='text-skyblue-text text-[18px]' >Direccion destino</h4>

            <h4 className=' text-black-text text-[20px]'>Nombre del Cliente Antonio</h4>
          </div>

          <div className="flex flex-col items-end  550:flex-row  550:justify-between 550:items-center">

                <span className='text-purple-color text-[32px] font-semibold 550:text-[24px]'>Marzo 15</span>
                <span className='text-purple-color text-xl 550:text-[14px]'>6:00 pm</span>
          </div>

        </div>


        <div className="flex 550:flex-col">

              <div className="flex flex-col flex-1 justify-between gap-[8px]">
                <p className='text-NoSelectedFilter 550:text-justify'>Descripcion de la tarea Descripcion de la tarea  Descripcion de la tarea  Descripcion de la tarea Descripcion de la tarea  Descripcion de la tarea  </p>
                
                <p className='text-purple-color  flex items-end 550:justify-center'>Encargado de la tarea Takeshi</p>


              </div>

              <div className="flex flex-col text-white-text items-end justify-end pt-4 gap-5 550:flex-col-reverse 550:items-center 550:gap-2">
                
                <button className='bg-[#B0EEB6] px-[18px] max-h-50px w-[120px] py-4  rounded-[4px] text-black-text text-sm 550:w-full 550:py-3'>
                        Estado
                </button>

                <div className='flex gap-3 550:w-full 550:gap-2'>
                    <button
                      className='py-2 px-3  bg-purple-color rounded-[4px] 550:flex-1'
                    >
                      Editar
                    </button>

                    <button
                      className='py-2 px-3 550:flex-1 bg-skyblue-text rounded-[4px]'
                    >
                      Eliminar
                    </button>

                </div>
              </div>
        </div>

    </article>
  )
}
