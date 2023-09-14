import { Skeleton } from './ui'

function PhotoLoader () {
  return (
    <div className='flex flex-col w-full max-w-4xl animate-pulse'>
      <div className='flex flex-row justify-between items-center w-full'>
        <Skeleton className='flex items-center w-[268.48px] h-[24px] mt-1 bg-gray-200' />
        <Skeleton className='flex items-center w-[123px] h-[38px] bg-gray-200' />
      </div>
      <div className='w-full pt-5'>
        <ul className='grid grid-cols-7 gap-1'>
          <li>
            <Skeleton className='h-20 w-20 bg-gray-100' />
          </li>
          <li>
            <Skeleton className='h-20 w-20 bg-gray-100' />
          </li>
          <li>
            <Skeleton className='h-20 w-20 bg-gray-100' />
          </li>
          <li>
            <Skeleton className='h-20 w-20 bg-gray-100' />
          </li>
          <li>
            <Skeleton className='h-20 w-20 bg-gray-100' />
          </li>
          <li>
            <Skeleton className='h-20 w-20 bg-gray-100' />
          </li>
          <li>
            <Skeleton className='h-20 w-20 bg-gray-100' />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PhotoLoader
