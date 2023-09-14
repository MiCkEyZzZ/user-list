import { Skeleton } from './ui'

function AlbumLoader () {
  return (
    <div className='flex flex-col w-full max-w-4xl animate-pulse'>
      <div className='flex flex-row justify-between items-center w-full'>
        <Skeleton className='flex items-center w-[268.48px] h-[24px] mt-1 bg-gray-200' />
        <Skeleton className='flex items-center w-[123px] h-[38px] bg-gray-200' />
      </div>
      <div className='w-full pt-5'>
        <ul className='flex flex-col w-full'>
          <li>
            <Skeleton className='w-full h-[56px] mb-2 bg-gray-100' />
          </li>
          <li>
            <Skeleton className='w-fill h-[56px] mb-2 bg-gray-100' />
          </li>
          <li>
            <Skeleton className='w-full h-[56px] bg-gray-100' />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AlbumLoader
