import { Navigate, Outlet } from "react-router-dom"
import { useUserContext } from "../context/UserContext"
import SideBar from "../components/SideBar"
import Header from "../components/Header"


export default function PrivateLayout() {

    const {user} = useUserContext()

  return (
    <div className="flex bg-bg-principal max-h-screen ">  



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
  )
}
