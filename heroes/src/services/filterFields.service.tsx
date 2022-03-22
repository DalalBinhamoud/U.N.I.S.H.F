import { AxiosRequestConfig, AxiosError } from 'axios'
import { useApi } from '../api'
import { useState } from 'react'
import { message } from 'antd'

import { IHero } from '../interfaces/IHero'

export const useFilterFieldsApis = () => {
  const { axiosApi } = useApi()
  const [options, setOptions] = useState<IHero[]>([])

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

  //get drop down options to delegate
  const getDropdownOpts = async (api: string) => {
    try {
      const { data }: AxiosRequestConfig = await axiosApi.get(api)
      setOptions(data)
    } catch (err) {
      handleError(err as AxiosError<ArrayBuffer, any>)
    }
  }

  return {
    options,
    getDropdownOpts,
  }
}
