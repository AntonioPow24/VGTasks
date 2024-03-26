import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import '../styles/dashboard.css'
import { useSideBarContext } from '../context/SideBarContext'
import { useDarkThemeContext } from '../context/DarkThemeContext'
import { logout } from '../config/firebase'
import { useUserContext } from '../context/UserContext'

export default function SideBar() {

    const [userTitleVisible ,setUserTitleVisible]= useState(false)

    const {toogleSideBar} = useSideBarContext()
    const {darkTheme} = useDarkThemeContext()
    
    const {user} = useUserContext()


    const toogleSideBarStyleClass = toogleSideBar? 'asideOpen' : ''

    const handleLogOut = async ()=>{
        try {
            await logout()
        } catch (error) {
            console.log(error);
        }
    }



const linkStyle= `py-2 flex items-center gap-2 pl-3 1530:justify-center 1530:pl-0`
  return (
    <>
        <aside className={`max-w-[270px] bg-bg-white flex-1 h-screen gap-[20px] flex flex-col py-[22px] transition-all duration-300 1530:max-w-[106px] 1431:min-w-[86px]  800:fixed 800:right-[-106px] 800:z-50 ${toogleSideBarStyleClass} dark:bg-[#202020] `}>

            <div className="flex items-center justify-center pb-[22px] px-6 1530:px-2">
                <img className='max-w-30 min-w-20' src="./images/logoVG.png" alt="" />
            </div>

            <div className="flex flex-col flex-1">
                <div className={`flex flex-col flex-1 transition-all duration-300 ${darkTheme? 'dark-mode' : ''}`} >
                        <NavLink 
                            className={`${linkStyle} `} to='/dashboard'
                            end
                        >
                            <i className='bx bx-list-ul text-3xl 1530:text-3xl dark:text-white-text transition-all duration-300'></i> <span className='1530:hidden dark:text-white-text transition-all duration-300' >Tareas</span>
                        </NavLink>


                        <NavLink 
                         className={`${linkStyle} `} to='/dashboard/users' 
                        >
                            <i className='bx bx-group text-3xl 1530:text-3xl dark:text-white-text transition-all duration-300'></i> <span className='1530:hidden dark:text-white-text transition-all duration-300'>Usuarios</span>
                        </NavLink>
                </div>

                <div className="flex justify-center relative items-center" onClick={()=> {setUserTitleVisible(!userTitleVisible); console.log(userTitleVisible)}
                }>
                    <p className="py-2 flex items-center gap-2 p-3 justify-center"><i className='bx bx-user text-2xl 1530:text-2xl dark:text-white-text transition-all duration-300'></i><span className='1530:hidden transition-all duration-300 dark:text-white-text'>{user?.email}</span></p>
                    
                    <div className={`${userTitleVisible? 'flex': 'hidden' }  items-center justify-center px-2 py-1 absolute bg-[#202020] dark:bg-white rounded-[3px]  left-[75%] 800:right-[75%] 800:left-auto 1551:hidden`}>
                        <p className='dark:text-black-text text-white-text text-xl'>{user?.email}</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center px-6 1530:px-3 ">
                <button 
                    className='bg-red-400 w-full rounded-md py-2 text-bg-white hover:bg-red-500 1430:px-4 flex justify-center items-center gap-3'
                    onClick={handleLogOut}
                > 
                    <i className='bx bx-log-out-circle 1530:text-2xl '></i> 
                    <span className='1530:hidden'>Cerrar Sesion</span>
                </button>
            </div>
        </aside>
    </>
  )
}
