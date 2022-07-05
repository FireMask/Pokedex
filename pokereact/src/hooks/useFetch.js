import { useState, useEffect, useCallback } from 'react'
import axios from '../utils/axios-instance'

export const useFetch = (url = 'GET', method, payload) => {
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState(false)

  const fetchData = useCallback(async (url, method, payload) => {
    try {
      let res = await axios({ method: method, url: url, data: payload })
      setData(res.data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    setLoading(true)
    fetchData(url, method, payload)
  }, [fetchData])

  return [Object.values(data), isLoading, error]
}
