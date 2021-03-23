import { useState } from 'react'

export const useAsyncData = (requestFunc) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleRequest = (...params) => {
    setIsLoading(true)

    return requestFunc(...params)
      .then(result => {
        setIsLoading(false)
        setError(null)
        return result
      })
      .catch(err => {
        setIsLoading(false)
        setError(err)
      })
  }

  return [{ isLoading, error }, handleRequest]
}