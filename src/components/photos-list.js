import { PlusIcon } from '@heroicons/react/20/solid'

import { useAddPhotoMutation, useFetchPhotosQuery } from '../store'
import { PhotoItem, PhotoLoader } from './index'
import { Button, ErrorMessage } from './ui'

function PhotosList ({ album }) {
  const { data, error, isFetching } = useFetchPhotosQuery(album)
  const [addPhoto, results] = useAddPhotoMutation()

  function handleAddPhoto () {
    addPhoto(album)
  }

  if (isFetching) {
    return <PhotoLoader />
  }

  if (error) {
    return <ErrorMessage text='Ошибка загрузки фотографий...' />
  }

  return (
    <div className='flex flex-col'>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row'>
          <h3 className='mr-2'>Фотографии в альбоме</h3>
          <span className='font-bold'>{album.title}</span>
        </div>
        <div className='flex items-center'>
          <Button
            loading={results.isLoading}
            className='w-[110px] text-sm text-white bg-black hover:bg-gray-600 py-2 border border-black hover:border-gray-600'
            onClick={handleAddPhoto}
          >
            <PlusIcon className='w-4 h-4 mr-2' />
            Добавить
          </Button>
        </div>
      </div>
      <div className='w-full pt-5'>
        <ul className='grid grid-cols-7 gap-1'>
          {data?.map((photo) => {
            return (
              <PhotoItem key={photo.id} photo={photo} />
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default PhotosList
