import { Navigate, Outlet } from "react-router-dom"
import { useUserContext } from "../context/UserContext"
import SideBar from "../components/SideBar"
import Header from "../components/Header"


export default function PrivateLayout() {

    const {user} = useUserContext()

  return (
    <div className="flex gap-[7px] bg-bg-principal">  
      <SideBar />
        <div className="flex flex-col flex-1 min-h-screen">
          <div className=" w-full flex ">
            <Header />
          </div>
          {
              user ? <Outlet /> : <Navigate to='/' />
          }
        </div>
    </div>
  )
}
