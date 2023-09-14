import { PlusIcon } from '@heroicons/react/20/solid'

import { useFetchAlbumsQuery, useAddAlbumMutation } from '../store'
import { AlbumItem, AlbumLoader } from './index'
import { Button, ErrorMessage } from './ui'

function AlbumsList ({ user }) {
  const { data, error, isFetching } = useFetchAlbumsQuery(user)
  const [addAlbum, results] = useAddAlbumMutation()

  function handleAddAlbum () {
    addAlbum(user)
  }

  if (isFetching) {
    return <AlbumLoader />
  }

  if (error) {
    return <ErrorMessage text='Ошибка загрузки альбомов...' />
  }

  return (
    <div className='flex flex-col'>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row'>
          <h3 className='mr-2'>Альбом пользователя</h3>
          <span className='font-bold'>{user.name}</span>
        </div>
        <div className='flex items-center'>
          <Button
            loading={results.isLoading}
            className='w-[110px] text-sm text-white bg-black hover:bg-gray-600 py-2 border border-black hover:border-gray-600'
            onClick={handleAddAlbum}
          >
            <PlusIcon className='w-4 h-4 mr-2' />
            Добавить
          </Button>
        </div>
      </div>
      <div className='w-full pt-5'>
        <ul className='flex flex-col'>
          {data?.map((album) => {
            return (
              <AlbumItem key={album.id} album={album} />
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default AlbumsList
