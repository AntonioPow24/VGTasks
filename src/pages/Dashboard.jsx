import React, { useEffect, useState } from 'react'
import Filter from '../components/dashBoard/Filter'
import Task from '../components/dashBoard/Task'
import useFirestore from '../hooks/useFirestore'
import Loading from '../components/Loading'
import TasksContainer from '../components/dashBoard/TasksContainer'
import { useMonthSelectedContext } from '../context/MonthSelectedContext'

import { orderByDate } from '../utils/orderByDate'

export default function Dashboard() {




  // Filtro de los tasks
  const [ filter,setFilter ]=useState('total')



  // Destructurar el hook USEFIRESTORE
  const {data , loading ,error , getDataFromFirebase , addDataToFirebase , updateStateFromFirebase ,updateTaskFromFirebase,deleteTaskFormFirebase} = useFirestore()



  // Mes seleccionado 
  const {monthSelected} = useMonthSelectedContext()


  // Funcion cambiar Filtro
  const changeFilter = newFilter => setFilter(newFilter)




  
  const filteredPerMonth = () => {
    
    // Filtrado de data
    let dataFiltered

    // CAMBIO DE FILTRO POR MES
    if(monthSelected === 'todos'){
      dataFiltered = data
    }else{
      dataFiltered = data.filter( task => task.date.toUpperCase().includes(monthSelected.toUpperCase()))
    }

    return dataFiltered
      
  }


  const filteredTasks = () =>{

    const dataFiltered = filteredPerMonth()

    const incompletedTasks = orderByDate(dataFiltered.filter( task => !task.completed))


    const completedTasks = orderByDate(dataFiltered.filter( task => task.completed))


  // CAMBIO DE FILTRO POR ESTADO
  switch(filter){
    case 'total':
      return [...incompletedTasks,...completedTasks]

    case 'pending':
      return incompletedTasks

    case 'completed':
      return completedTasks

    default:
      return [...incompletedTasks,...completedTasks]
  }
  }



  // UseEffect para obtener los datos
  useEffect( ()=>{

    getDataFromFirebase()

  },[])



  return (
    <div className='overflow-y-scroll max-h-screen hide-scrollbar'>
      <Filter changeFilter={changeFilter} filter={filter}  addDataToFirebase={addDataToFirebase} data={data && filteredPerMonth()} />


      {
        loading.getData? <Loading />

        :error? <p>{error}</p>

        :
        
          <TasksContainer  data={filteredTasks()} updateStateFromFirebase={updateStateFromFirebase} updateTaskFromFirebase={updateTaskFromFirebase} deleteTaskFormFirebase={deleteTaskFormFirebase} />

        }
    </div>
  )
}
