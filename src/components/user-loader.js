import { Skeleton } from './ui'

function UserLoader () {
  return (
    <div className='flex flex-col w-full max-w-4xl min-h-[500px] px-10 py-10 animate-pulse'>
      <div className='flex flex-row justify-between w-full h-[50px]'>
        <Skeleton className='flex items-center w-[268.48px] h-[32px] bg-gray-200' />
        <Skeleton className='flex items-center w-[123px] h-[50px] bg-gray-200' />
      </div>
      <div className='w-full h-[500px] py-5'>
        <ul className='flex flex-col w-full'>
          <li className='flex flex-row items-center justify-between w-[688px] h-[56px] mb-3 px-5 py-4 animate-pulse bg-gray-200'>
            <Skeleton className='flex flex-row items-center w-5 h-5 mr-3' />
            <Skeleton className='w-5 h-5' />
          </li>
          <li className='flex flex-row items-center justify-between w-[688px] h-[56px] mb-3 px-5 py-4 animate-pulse bg-gray-200'>
            <Skeleton className='flex flex-row items-center w-5 h-5 mr-3' />
            <Skeleton className='w-5 h-5' />
          </li>
          <li className='flex flex-row items-center justify-between w-[688px] h-[56px] mb-3 px-5 py-4 animate-pulse bg-gray-200'>
            <Skeleton className='flex flex-row items-center w-5 h-5 mr-3' />
            <Skeleton className='w-5 h-5' />
          </li>
          <li className='flex flex-row items-center justify-between w-[688px] h-[56px] mb-3 px-5 py-4 animate-pulse bg-gray-200'>
            <Skeleton className='flex flex-row items-center w-5 h-5 mr-3' />
            <Skeleton className='w-5 h-5' />
          </li>
          <li className='flex flex-row items-center justify-between w-[688px] h-[56px] mb-3 px-5 py-4 animate-pulse bg-gray-200'>
            <Skeleton className='flex flex-row items-center w-5 h-5 mr-3' />
            <Skeleton className='w-5 h-5' />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UserLoader
