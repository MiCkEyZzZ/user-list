import { TrashIcon } from '@heroicons/react/24/outline'

import { useDeleteAlbumMutation } from '../store'
import { ExpandablePanel, PhotosList } from './index'
import { Button } from './ui'

function AlbumItem ({ album }) {
  const [deleteAlbum, results] = useDeleteAlbumMutation()

  function handleDeleteAlbum () {
    deleteAlbum(album)
  }

  const header = (
    <>
      <div className='flex flex-row items-center'>
        <Button
          loading={results.isLoading}
          className='flex items-center justify-center mr-3 py-3 bg-white hover:bg-gray-100 rounded-full'
          onClick={handleDeleteAlbum}
        >
          <TrashIcon className='w-4 h-4' />
        </Button>
        <h3 className='ml-5'>{album.title}</h3>
      </div>
    </>
  )

  return (
    <ExpandablePanel key={album.id} header={header}>
      <PhotosList album={album} />
    </ExpandablePanel>
  )
}

export default AlbumItem
