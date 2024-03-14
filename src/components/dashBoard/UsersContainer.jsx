import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import ModalRegister from '../ModalRegister'


// import { getAuth ,listUsers } from 'firebase/auth'
const URLDomain = "http://localhost:5001"
console.log(URLDomain);
export default function UsersContainer() {

  // const [usersFirebase ,setUsersFirebase] = useState([])
  const [modalRegisterUser ,setModalRegisterUser]= useState(false)

  const [users,setUsers]=useState([])

  const [hasNewRegister ,setHasNewRegister] =useState(false)

  

  useEffect( () => {

   const fetchUsers = async()=>{

     try {
         const res = await fetch(`${URLDomain}/api/users`)
         const data = await res.json()

         setUsers(data);
         
     } catch (error) {
       console.log(error);
     }
   } 

   setHasNewRegister(false)


   fetchUsers()
  }, [hasNewRegister]);




  const toggleModalRegisterUser = ()=>{
    setModalRegisterUser(!modalRegisterUser)
  }


  return (
    <>
    
    <div className='px-[44px] py-[30px] overflow-y-scroll 550:px-[20px] '>
        <div className="flex justify-end">
            <button
                className='rounded-lg bg-bg-white px-6 py-2 min-w-[190px] newTaskButton'
                onClick={toggleModalRegisterUser}
            >
                <span className='text-white-text text-xl'>Crear usuario</span>
            </button>
        </div>

        <div className="grid grid-cols-auto-fill-480 gap-[22px] mt-[40px] 550:grid-cols-auto-fill-450">

          {
            users && users.map( user => <UserCard email={user.email}  key={user.uid}/>)
          }
        </div>
    </div>
        {
      modalRegisterUser && <ModalRegister setHasNewRegister={setHasNewRegister} toggleModalRegisterUser={toggleModalRegisterUser} setModalRegisterUser={setModalRegisterUser}/>
        }


    </>


  )
}
