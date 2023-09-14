import { ChevronDownIcon, TrashIcon } from '@heroicons/react/24/outline'

import { useThunk } from '../hooks'
import { deleteUser } from '../store'
import { Button } from './ui'

function UserListItem ({ user }) {
  const [removeUser, isLoading, error] = useThunk(deleteUser)

  function handleClick () {
    removeUser(user)
  }

  return (
    <li className='flex flex-row items-center justify-between mb-3 px-5 py-4 border'>
      <div className='flex flex-row items-center'>
        <Button
          loading={isLoading}
          className='flex items-center justify-center mr-3'
          onClick={handleClick}
        >
          <TrashIcon className='w-5 h-5' />
        </Button>
        {error && <h3 className='ml-5'>Ошибка удаления пользователя</h3>}
        <h3 className='ml-5'>{user.name}</h3>
      </div>
      <Button className='flex items-center justify-center'>
        <ChevronDownIcon className='w-5 h-5' />
      </Button>
    </li>
  )
}

export default UserListItem
