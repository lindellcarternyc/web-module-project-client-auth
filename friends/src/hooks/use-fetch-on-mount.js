import { useState, useEffect } from 'react'

export const useFetchOnMount = (defaultValue, requestFn, ...params) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(defaultValue)
  const [error, setError] = useState(null)

  useEffect(() => {
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [
    { isLoading, error, data }
  ]
}