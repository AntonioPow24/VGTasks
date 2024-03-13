import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import ModalRegister from '../ModalRegister'
// import { getAuth ,listUsers } from 'firebase/auth'

export default function UsersContainer() {

  // const [usersFirebase ,setUsersFirebase] = useState([])
  const [modalRegisterUser ,setModalRegisterUser]= useState(false)

  // useEffect(()=>{
  //   const auth =getAuth()

  //   listUsers(auth)
  //     .then( userRecords => {
  //       const usersData = userRecords.map(userRecord => {email:userRecord.email})

  //       setUsersFirebase(usersData)
  //     })
  //     .catch( error => console.error('Error al obtener la lista de usuarios',error))
  // },[usersFirebase])


  // console.log(usersFirebase);

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
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />

        </div>
    </div>
        {
      modalRegisterUser && <ModalRegister toggleModalRegisterUser={toggleModalRegisterUser} />
        }


    </>


  )
}
