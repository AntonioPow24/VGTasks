import React from 'react'
import { useSideBarContext } from '../context/SideBarContext'

export default function Header() {

    const {toogleSideBar,setToogleSideBar} = useSideBarContext()
    

    const months=['todos','enero' ,'febrero' ,'marzo' ,'abril' ,'mayo' ,'junio' ,'julio', 'agosto' ,'setiembre' ,'octubre', 'noviembre', 'diciembre']

  return (
    <>
        <div className="flex items-center w-full bg-bg-white pl-[48px] gap-5">

            <i 
                className='bx bx-menu text-purple-color text-4xl hidden cursor-pointer 800:block' 
                onClick={()=>setToogleSideBar(!toogleSideBar) }
            ></i>

            <div className="flex justify-start items-center flex-1 py-[19px] 960:hidden">
                <h3 className='text-3xl text-purple-color '>VIDRIERIA <span className='text-skyblue-text'>GARATEA</span></h3>
            </div>

            <div className="flex gap-[65px] py-[19px] ">
                <div className="flex items-center justify-center">
                    <i className='bx bxs-moon text-3xl text-purple-color cursor-pointer'></i>
                </div>

            </div>

            <div className="flex items-center px-2 relative bg-purple-color h-full  960:w-full">
                    <select  className="text-[35px]  text-center w-full capitalize text-white-text bg-transparent focus:outline-none appearance-none z-10 px-8 530:px-2 530:text-[25px] " name="month" id="month" defaultValue={`todos`}>

                        {
                            months.map(month => <option key={month} className="text-xl my-2 text-black-text" value={month}>{month}</option>)
                        }
                    </select>


            </div>
        </div>
    </>
  )
}
