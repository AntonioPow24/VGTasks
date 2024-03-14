import React, { useState } from 'react'
import { register } from '../config/firebase'
import { useNavigate } from 'react-router-dom'

export default function ModalRegister({toggleModalRegisterUser ,setModalRegisterUser, setHasNewRegister}) {

    const [passwordVisible , setPasswordVisible] = useState(false)


    const [dataNewUser , setDataNewUser] = useState({
        email:'', password:''
    })

    const navigate = useNavigate()

    const handleChangeDataUser =(e) =>{


        setDataNewUser({...dataNewUser, [e.target.name]:e.target.value})

        console.log(dataNewUser);
    }

    

    const handleRegisterUser = async(e)=>{
        e.preventDefault()
        try {
            const credentialsUser = await register({email:dataNewUser.email , password:dataNewUser.password})

            setModalRegisterUser(false)
            setDataNewUser({email:'',password:''})

            setHasNewRegister(true)
        } catch (error) {
            console.log(error);
        }
    }

    // Estilos para el input
    const inputStyle ='relative w-full text-[14px] bg-bg-principal rounded-md  h-[36px] flex items-center justify-center pr-[9px] inputToWrite '

  return (
    <section className='w-screen h-screen fixed z-50  top-0 right-0 left-0 bottom-0 flex items-center justify-center'>

        <div className="w-screen h-screen fixed top-0 right-0 left-0 bottom-0  bg-[#131313d8]" onClick={toggleModalRegisterUser}></div>

       

            <form   
                className='max-w-[600px] 550:min-w-[300px] bg-bg-white flex flex-col justify-center items-center gap-[23px] py-[27px] px-[41px] 550:px-[15px] rounded-xl absolute'
                onSubmit={handleRegisterUser}
            >

                    <h2 className='text-purple-color text-3xl 550:text-2xl'>NUEVO USUARIO</h2>

                    <div className="flex  flex-col items-center gap-[27px]  w-full">


                        <div className={`${inputStyle}`}>
                                <input 
                                    className='flex-1  h-full' 
                                    type="text"  
                                    name='email' 
                                    placeholder=' '
                                    required
                                    autoComplete='email'
                                    value={dataNewUser.email}
                                    onChange={handleChangeDataUser}
                                />
                                
                                <i className='bx bx-user text-xl text-purple-color'></i>

                                <label className='absolute left-[9px] text-NoSelectedFilter' htmlFor="email">Correo del usuario</label>
                        </div>



                        <div className={`${inputStyle}`}>
                                <input 
                                    className='w-full   h-full'
                                    type={passwordVisible? `text` : `password`}  
                                    name='password'
                                    placeholder=' '
                                    autoComplete='current-password'
                                    required
                                    value={dataNewUser.password}
                                    onChange={handleChangeDataUser}
                                />

                                <i className='bx bx-lock-alt text-xl text-purple-color' onClick={()=> setPasswordVisible(!passwordVisible)}></i>

                                <label  className='absolute left-[9px] text-NoSelectedFilter' htmlFor="password">Contraseña  (6 caracteres)</label>
                        </div>

                    </div>
                    <p className='text-left w-full text-[#343434ad] text-sm 550:text-[11px]'>Todos los campos que incluyan (*) son obligatorios</p>

                    <button type='submit' className='bg-purple-color w-full rounded-md py-2 text-white-text '>Registrar usuario</button>

            </form>






    </section>
  )
}
