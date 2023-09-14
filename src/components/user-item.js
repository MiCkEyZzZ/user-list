import { TrashIcon } from '@heroicons/react/24/outline'

import { deleteUser } from '../store'
import { useThunk } from '../hooks'
import { AlbumsList, ExpandablePanel } from './index'
import { Button } from './ui'

function UserItem ({ user }) {
  const [removeUser, isLoading, error] = useThunk(deleteUser)

  function handleClick () {
    removeUser(user)
  }

  const header = (
    <>
      <div className='flex flex-row items-center'>
        <Button
          loading={isLoading}
          className='flex items-center justify-center mr-3 py-3 bg-white hover:bg-gray-100 rounded-full'
          onClick={handleClick}
        >
          <TrashIcon className='w-4 h-4' />
        </Button>
        {error && <h3 className='ml-5'>Ошибка удаления пользователя</h3>}
        <h3 className='ml-5'>{user.name}</h3>
      </div>
    </>
  )

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  )
}

export default UserItem
