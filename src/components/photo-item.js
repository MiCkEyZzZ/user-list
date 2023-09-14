import { TrashIcon } from '@heroicons/react/24/outline'

import { useDeletePhotoMutation } from '../store'
import { Button } from './ui'

function PhotoItem ({ photo }) {
  const [deletePhoto] = useDeletePhotoMutation()

  function handleDeletePhoto () {
    deletePhoto(photo)
  }

  return (
    <li className='w-auto group/item'>
      <div className='relative flex flex-row items-center'>
        <img className='h-20 w-20' src={photo.url} alt='случайная картинка' />
        <div className='absolute top-auto right-0 left-auto w-full h-full flex flex-row items-center z-10 hover:bg-gray-200 opacity-0 hover:opacity-80 invisible group-hover/item:visible'>
          <Button
            className='flex items-center justify-center mx-auto text-white py-3 bg-red-500 hover:opacity-100 z-50 rounded-full'
            onClick={handleDeletePhoto}
          >
            <TrashIcon className='w-5 h-5' />
          </Button>
        </div>
      </div>
    </li>
  )
}

export default PhotoItem
