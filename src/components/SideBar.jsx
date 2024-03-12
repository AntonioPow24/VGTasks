import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import '../styles/dashboard.css'
import { useSideBarContext } from '../context/SideBarContext'

export default function SideBar() {

    const [linkActive , setlinkActive] = useState('tasks')



    const {toogleSideBar} = useSideBarContext()



    const toogleSideBarStyleClass = toogleSideBar? 'asideOpen' : ''


const linkStyle= `py-2 flex items-center gap-2 pl-3 1530:justify-center 1530:pl-0`
  return (
    <>
        <aside className={`max-w-[270px] bg-bg-white flex-1 h-screen gap-[20px] flex flex-col py-[22px] transition-all duration-300 1530:max-w-[106px] 1431:min-w-[86px]  800:absolute 800:right-[-106px] 800:z-20 ${toogleSideBarStyleClass}`}>

            <div className="flex items-center justify-center pb-[22px] px-6 1530:px-2">
                <img className='max-w-30 min-w-20' src="/public/images/logoVG.png" alt="" />
            </div>

            <div className="flex flex-col flex-1">
                <div className="flex flex-col flex-1">
                        <Link 
                            className={`${linkStyle} ${linkActive === 'tasks'? 'active' : ''} `} to='/dashboard'
                            onClick={()=>setlinkActive('tasks')}
                        >
                            <i className='bx bx-list-ul text-3xl 1530:text-4xl '></i> <span className='1530:hidden' >Tareas</span>
                        </Link>


                        <Link 
                         className={`${linkStyle} ${linkActive === 'users'? 'active' : ''}`} to='/dashboard/users' 
                         onClick={()=>setlinkActive('users')}
                        >
                            <i className='bx bx-group text-3xl 1530:text-4xl'></i> <span className='1530:hidden'>Usuarios</span>
                        </Link>
                </div>

                <div className="flex justify-center">
                    <p className="py-2 flex items-center gap-2 p-3 justify-center"><i className='bx bx-user text-2xl 1530:text-3xl'></i><span className='1530:hidden'>Antonio Romero</span></p>
                </div>
            </div>

            <div className="flex items-center justify-center px-6 1530:px-3">
                <button className='bg-red-400 w-full rounded-md py-2 text-bg-white hover:bg-red-500 1430:px-4'> <i className='bx bx-log-out-circle 1430:text-2xl'></i> <span className='1530:hidden'>Cerrar Sesion</span></button>
            </div>
        </aside>
    </>
  )
}
