function SkeletonLoader ({ times }) {
  return Array(times).fill(0).map((_, i) => {
    return (
      <li
        key={i}
        className='flex flex-row items-center justify-between w-[688px] h-[56px] mb-3 px-5 py-4 animate-pulse bg-gray-200'
      >
        <div className='flex flex-row items-center w-5 h-5 mr-3' />
        <div className='w-5 h-5' />
      </li>
    )
  })
}

export default SkeletonLoader
