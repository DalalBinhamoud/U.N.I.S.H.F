import React, { useState, useEffect } from 'react'
import { Typography } from 'antd'
// import styles from '../HeroesList.module.scss'
import { formatPhoneNumber } from '../../../helpers'

export const getColumns = () => {
  const { Text } = Typography

  const columns:
    | {
        title: string
        dataIndex: string
        key: string
        render?: (phone: string) => any
      }[]
    | undefined = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      render: (phone: string) => <Text>{formatPhoneNumber(phone)}</Text>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
  ]

  return columns
}
