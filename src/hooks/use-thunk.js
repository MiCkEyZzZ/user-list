import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'

function useThunk (thunk) {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const execute = useCallback((arg) => {
    setIsLoading(true)
    dispatch(thunk(arg))
      .unwrap()
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false))
  }, [dispatch, isLoading, error])

  return [execute, isLoading, error]
}

export default useThunk
