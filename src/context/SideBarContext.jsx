import { createContext, useContext, useState } from "react";


const SideBarContext = createContext()

export default function SideBarContextProvider({children}){

    const [toogleSideBar,setToogleSideBar] = useState(false)

    return(
        <SideBarContext.Provider value={{toogleSideBar,setToogleSideBar}}>
            {children}
        </SideBarContext.Provider>
    )
}

export const useSideBarContext = () =>useContext(SideBarContext)