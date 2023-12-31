import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { PlusIcon } from '@heroicons/react/20/solid'

import { useThunk } from '../hooks'
import { fetchUsers, addUser } from '../store'
import { UserItem, UserLoader } from './index'
import { Button, ErrorMessage } from './ui'

function UsersList () {
  const [getUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers)
  const [createUser, isCreatingUser, creatingUserError] = useThunk(addUser)
  const { data } = useSelector((state) => state.users)

  function handleUserAdd () {
    createUser()
  }

  useEffect(() => {
    getUsers()
  }, [getUsers])

  if (isLoadingUsers) {
    return <UserLoader />
  }

  if (loadingUsersError) {
    return <ErrorMessage text='Ошибка получения данных...' />
  }

  return (
    <div className='flex flex-col w-full max-w-4xl min-h-[500px] px-10 py-10'>
      <div className='flex flex-row justify-between w-full h-[50px]'>
        <div className='flex items-center'>
          <h2 className='text-2xl font-bold'>Список пользователей</h2>
        </div>
        <div className='flex items-center'>
          <Button
            loading={isCreatingUser}
            className='w-[125px] text-white bg-black hover:bg-gray-600 py-3 border border-black hover:border-gray-600'
            onClick={handleUserAdd}
          >
            <PlusIcon className='w-4 h-4 mr-2' />
            Добавить
          </Button>
          {creatingUserError && 'Ошибка создаётся пользователем...'}
        </div>
      </div>
      <div className='w-full h-[500px] py-5'>
        <ul className='flex flex-col w-full'>
          {data.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default UsersList
