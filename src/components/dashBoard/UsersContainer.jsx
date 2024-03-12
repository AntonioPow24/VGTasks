import React from 'react'
import UserCard from './UserCard'

export default function UsersContainer() {
  return (
    <div className='px-[44px] py-[30px] overflow-y-scroll 550:px-[20px] '>
        <div className="flex justify-end">
            <button
                className='rounded-lg bg-bg-white px-6 py-2 min-w-[190px] newTaskButton'
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
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
        </div>
    </div>
  )
}
