import React, { FC } from 'react'
import { Empty } from 'antd'

interface IProps {
  message: string
}
export const CustomizeRenderEmpty: FC<IProps> = ({ message }) => {
  return (
    <div>
      <Empty description={message} image={Empty.PRESENTED_IMAGE_SIMPLE} />
    </div>
  )
}
