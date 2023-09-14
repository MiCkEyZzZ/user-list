import { useState } from 'react'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

import { Button } from './ui'

function ExpandablePanel ({ header, children }) {
  const [expanded, setExpanded] = useState(false)

  function handleClick () {
    setExpanded(!expanded)
  }

  return (
    <li className='flex flex-row items-center justify-between mb-3 border'>
      <div className='flex flex-col w-full'>
        <div className='flex flex-row items-center justify-between w-full px-5 py-2'>
          {header}
          <Button
            className='flex items-center justify-center bg-white hover:bg-gray-100 py-2 rounded'
            onClick={handleClick}
          >
            {expanded
              ? <ChevronDownIcon className='w-4 h-4' />
              : <ChevronRightIcon className='w-4 h-4' />}
          </Button>
        </div>
        {expanded && <div className='px-5 py-5 border-t'>{children}</div>}
      </div>
    </li>
  )
}

export default ExpandablePanel
