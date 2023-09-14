import { SkeletonLoader } from './ui'

function LoaderUser () {
  return (
    <div className='flex flex-col w-full max-w-4xl min-h-[500px] px-10 py-10 animate-pulse'>
      <div className='flex flex-row justify-between w-full h-[50px]'>
        <div className='flex items-center w-[268.48px] h-[32px] bg-gray-200' />
        <div className='flex items-center w-[123px] h-[50px] bg-gray-200' />
      </div>
      <div className='w-full h-[500px] py-5'>
        <ul className='flex flex-col w-full'>
          <SkeletonLoader times={4} />
        </ul>
      </div>
    </div>
  )
}

export default LoaderUser
