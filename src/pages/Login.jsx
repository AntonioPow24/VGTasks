import React from 'react'

import '../styles/LoginRegister.css'


export default function Login() {



  const inputStyle ='relative w-full text-[14px] bg-bg-principal rounded-md  h-[36px] flex items-center justify-center pr-[9px] inputToWrite '

  return (
    <div className='flex justify-center items-center min-h-screen bg-[url("/public/images/bgLogin.png")] bg-center bg-cover bg-no-repeat'>
        <form className='max-w-[560px] bg-bg-white flex flex-col justify-center items-center gap-[23px] py-[27px] px-[41px] rounded-xl'>

          <h2 className='text-purple-color text-3xl'>INICIO DE SESION</h2>

          <div className="flex  flex-col items-center gap-[27px]  w-full">


              <div className={`${inputStyle}`}>
                      <input 
                        className='flex-1  h-full' 
                        type="text"  
                        name='username' 
                        placeholder=' '
                        required
                      />
                      
                      <i class='bx bx-user text-xl text-purple-color'></i>

                      <label className='absolute left-[9px] text-NoSelectedFilter' htmlFor="username">Correo (*)</label>
              </div>



              <div className={`${inputStyle}`}>
                      <input 
                        className='w-full   h-full'
                        type="text"  
                        name='username'
                        placeholder=' '
                        required
                      />

                      <i class='bx bx-lock-alt text-xl text-purple-color'></i>

                      <label  className='absolute left-[9px] text-NoSelectedFilter' htmlFor="username">Contraseña (*)</label>
              </div>

          </div>
              <p className='text-left w-full text-[#343434ad] text-sm'>Todos los campos que incluyan (*) son obligatorios</p>

          <button className='bg-purple-color w-full rounded-md py-2 text-white-text '>Iniciar Sesion</button>

        </form>
    </div>
  )
}
