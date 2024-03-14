import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../config/firebase";
import Loading from "../components/Loading";


const UserContext = createContext()

export default function UserContextProvider({children}){

    const [user,setUser] = useState(false)

    useEffect(()=>{
        const unsuscribe = onAuthStateChanged(auth,(user)=>{
            setUser(user)
        })

        return unsuscribe
    },[])


    if(user === false) return <Loading />

    return (
        <UserContext.Provider value={{user }} >
            {children}
        </UserContext.Provider>
    )
}


export const useUserContext = () => useContext(UserContext)