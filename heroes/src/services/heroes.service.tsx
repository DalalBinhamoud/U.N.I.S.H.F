import { AxiosRequestConfig, AxiosError } from 'axios'
import { useApi } from '../api'
import { useState } from 'react'
import { message } from 'antd'

import { IHero } from '../interfaces/IHero'

export const useHeroesApis = () => {
  const { axiosApi } = useApi()
  const [heroes, setHeroes] = useState<IHero[]>([])

  const handleError = (err: AxiosError<ArrayBuffer>) => {
    const { data } = err.response as any
    if (data.message === 'Violations exist') {
      let msgs: [] = data.businessRulesViolations
      msgs.forEach((msg) => {
        message.error(msg)
      })
    } else {
      message.error(data.message)
    }
  }

  //get users to delegate
  const getHeroes = async () => {
    try {
      const { data }: AxiosRequestConfig = await axiosApi.get(
        `/users/delegation`,
      )
      setHeroes(data)
    } catch (err) {
      handleError(err as AxiosError<ArrayBuffer, any>)
    }
  }

  return {
    heroes,
    getHeroes,
  }
}
