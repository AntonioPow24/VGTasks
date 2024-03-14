import React, { useEffect, useState } from 'react'
import { useSideBarContext } from '../context/SideBarContext'
import { useDarkThemeContext } from '../context/DarkThemeContext'

export default function Header() {

    const {toogleSideBar,setToogleSideBar} = useSideBarContext()
    const {darkTheme ,setDarkTheme} = useDarkThemeContext()
    const [selectedMonth,setSelectedMonth] = useState('')

    
    // Use Effect para manejar el darkTheme
    useEffect(()=>{
        if(darkTheme) {
            
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme','dark')
        }
        else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme','light')
        }
    },[darkTheme])


    //Use Effect para manejar el Mes seleccionado
    useEffect(()=>{
        const savedMonth = localStorage.getItem('selectedMonth') //obtiene valor del localStorage

        if(savedMonth) setSelectedMonth(savedMonth)
    },[])


    // Funcion para obtener el valor del mes Seleccionado
    const handleMonthChange = (e) =>{
        const month = e.target.value //Obtiene valor del select
        setSelectedMonth(month)
        localStorage.setItem('selectedMonth',month) //guarda en local Storage
    }


    const months=['todos','enero' ,'febrero' ,'marzo' ,'abril' ,'mayo' ,'junio' ,'julio', 'agosto' ,'setiembre' ,'octubre', 'noviembre', 'diciembre']

  return (
    <>
        <div className="flex items-center w-full bg-bg-white pl-[48px] gap-5 dark:bg-[#202020]  transition-all duration-300 rounded-b-md 800:rounded-none 960:px-[20px]">

            <i 
                className='bx bx-menu text-purple-color text-4xl hidden cursor-pointer 800:block' 
                onClick={()=>setToogleSideBar(!toogleSideBar) }
            ></i>

            <div className="flex justify-start items-center flex-1 py-[19px] 960:hidden">
                <h3 className='text-3xl text-purple-color '>VIDRIERIA <span className='text-skyblue-text'>GARATEA</span></h3>
            </div>

            <div className="flex gap-[65px] py-[19px] ">
                <div className="flex items-center justify-center">
                    <button onClick={()=> setDarkTheme(!darkTheme)}>
                        
                        <i className={`bx transition-all duration-300 ${darkTheme? 'bxs-sun' : 'bxs-moon' } text-3xl  cursor-pointer text-purple-color`}></i>
                    </button>
                </div>

            </div>

            <div className="flex items-center px-2 relative bg-purple-color h-full  960:w-full">
                    <select  
                        className="text-[35px]  text-center w-full capitalize text-white-text bg-transparent focus:outline-none appearance-none z-10 px-8 530:px-2 530:text-[25px] " 
                        name="month" 
                        id="month" 
                        value={selectedMonth}
                        onChange={handleMonthChange}
                    >

                        {
                            months.map(month => <option key={month} className="text-xl my-2 text-black-text" value={month}>{month}</option>)
                        }
                    </select>


            </div>
        </div>
    </>
  )
}
