import { useState } from "react";
import { addNewTask, db, deleteTask, getData, updateTask} from "../config/firebase";
import { nanoid } from "nanoid";
import { doc } from "firebase/firestore/lite";
import { formatDateString, formatTimeString } from "../utils/formatDateString";






export default function useFirestore() {

// ESTADOS
  const [data,setData] = useState([])
  const [loading,setLoading] = useState({})
  const [error,setError] = useState(null)




//   Metodos de FIRESTORE desde FireBase

    const getDataFromFirebase = async() => {
        try {

            setLoading(prev => ({...prev , getData:true}))

            // Query para obtener la data
            const querySnapShot = await getData() //Desde Firebase
            const dataDB= querySnapShot.docs.map( doc => doc.data()) //Obtener los datos, funcion explicita de firebase
            
            setData(dataDB)
        } catch (error) {

            console.log(error);
            setError(error.message)
            
        }finally{

            setLoading(prev => ({...prev , getData:false}))

        }
    }

    const addDataToFirebase = async(taskToAdd,toggleModalNewTask) => {

        const {clientName,date,description,direction,hour,inCharge,completed} = taskToAdd

        try {

            setLoading(prev => ({...prev , addData:true}))

            const newTask= {

                id:nanoid(6),
                clientName,
                date: formatDateString(date),
                description,
                direction,
                hour: formatTimeString(hour),
                inCharge,
                completed:false
            }

            
            const docRef = doc(db,'tasks', newTask.id)

            await addNewTask({docRef,newTask})

            setData([...data,newTask])
            toggleModalNewTask()



        } catch (error) {

            console.log(error);
            setError(error.message)
            
        }finally{

            setLoading(prev => ({...prev , addData:false}))

        }
    }

    const updateStateFromFirebase = async(collection,id , newState) => {

        try {

            setLoading(prev => ({...prev , updateData:true}))


                const docRef = doc(db, collection , id)
    
                await updateTask(docRef,{completed: newState})
    
                const newTasks = data.map(task =>{
                    if(task.id === id){
                        task.completed = !task.completed
                        return task
                    }
    
                    return task
                })
    
    
                setData(newTasks)

        } catch (error) {

            console.log(error);
            setError(error.message)
            
        }finally{

            setLoading(prev => ({...prev , updateData:false}))

        }
    }

    const updateTaskFromFirebase = async (collection , id , newData,toggleModalNewTask) =>{
        try {


            const {clientName , description ,direction , date ,hour , inCharge} = newData

            setLoading(prev => ({...prev , updateTask:true}))

            const docRef = doc(db, collection , id)

            await updateTask(docRef,{
                clientName,
                description,
                direction,
                inCharge,
                date:formatDateString(date),
                hour:formatTimeString(hour)
            })

            const newTasks = data.map(task =>{
                if(task.id === id){
                    
                    task.clientName = clientName
                    task.description = description
                    task.direction = direction
                    task.inCharge = inCharge
                    task.date = formatDateString(date)
                    task.hour = formatTimeString(hour)

                    return task
                }

                return task
            })


            setData(newTasks)
            toggleModalNewTask()

        }
         catch (error) {

            console.log(error);
            setError(error.message)
            
        }finally{

            setLoading(prev => ({...prev , updateTask:false}))
            
        }
    }

    const deleteTaskFormFirebase =async (collection,id) =>{
        try {

            setLoading(prev => ({...prev , deleteTask:true}))
            
            const docRef = doc(db,collection,id)

            await deleteTask({docRef})

            setData(data.filter( task => task.id !== id))

        } catch (error) {

            console.log(error);
            setError(error.message)
            
        }finally{

            setLoading(prev => ({...prev , deleteTask:false}))
            
        }
    }


// Retornar lo necesario

    return { data, loading ,error , getDataFromFirebase, addDataToFirebase,updateStateFromFirebase,updateTaskFromFirebase,deleteTaskFormFirebase}
}
