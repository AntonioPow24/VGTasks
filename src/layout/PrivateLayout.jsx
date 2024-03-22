import { Navigate, Outlet } from "react-router-dom"
import { useUserContext } from "../context/UserContext"
import SideBar from "../components/SideBar"
import Header from "../components/Header"
import MonthSelectedContextProvider from "../context/MonthSelectedContext"





export default function PrivateLayout() {

    const {user} = useUserContext()




  return (



      <MonthSelectedContextProvider>

        <div className="flex bg-bg-principal max-h-screen gap-1 dark:bg-[#3f3f3f] transition-all duration-300">  



            <SideBar />


            <div className="flex flex-col flex-1 h-screen 960:pt-[74px] max-h-screen">
              <div className=" w-full flex 960:fixed 960:top-0 z-20  ">
                <Header />
              </div>
              {
                  user ? <Outlet /> : <Navigate to='/' />
              }
            </div>
        </div>
      </MonthSelectedContextProvider>  


  )
}
