import React from 'react'
import axios from 'axios'
import { HTTPMethod } from '../Constants/HTTPMethod'

interface UseRequestProps {
  url: string
  method: HTTPMethod
  body?: any
}

export const useRequest = () => {
  const sendRequest = React.useCallback(async <T, >({ url, method, body = null }: UseRequestProps): Promise<T> => {
    const { data } = await axios({
      url: `${url}`,
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      data: body
    })

    if (!data) throw new Error()
    return data as T
  }, [])

  return { sendRequest }
}
