import { useState, useEffect } from 'react'

export const useFetchOnMount = (defaultValue, requestFn, ...params) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(defaultValue)
  const [error, setError] = useState(null)

  const handleRequest = () => {
    setIsLoading(true)
    requestFn(...params)
      .then(data => {
        setIsLoading(false)
        setData(data)
      })
      .catch(err => {
        setIsLoading(false)
        setError(null)
      })
  }

  useEffect(() => {
    handleRequest()
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const refetch = () => {
    handleRequest()
  }

  return [
    { isLoading, error, data },
    { refetch }
  ]
}