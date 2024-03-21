

import { createContext, useContext, useState } from "react";


const MonthSelectedContext = createContext()

export default function MonthSelectedContextProvider({children}){

    const [monthSelected,setMonthSelected] = useState(localStorage.getItem('selectedMonth') || 'todos')




    return (
        <MonthSelectedContext.Provider value={{monthSelected,setMonthSelected}} >
            { children }
        </MonthSelectedContext.Provider>
    )
}


export const useMonthSelectedContext = () => useContext(MonthSelectedContext)